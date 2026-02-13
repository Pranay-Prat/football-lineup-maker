import { createClient } from "@/lib/supabase/client";

const LINEUP_IMAGES_BUCKET = "lineup-images";

/**
 * Upload a lineup image to Supabase Storage.
 * Files are stored under `{userId}/{filename}` for organization.
 */
export async function uploadLineupImage(
  file: File,
  userId: string,
  filename?: string
) {
  const supabase = createClient();
  const name = filename || `${Date.now()}-${file.name}`;
  const filePath = `${userId}/${name}`;

  const { data, error } = await supabase.storage
    .from(LINEUP_IMAGES_BUCKET)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Error uploading image:", error.message);
    throw error;
  }

  return {
    path: data.path,
    publicUrl: getLineupImageUrl(data.path),
  };
}

/**
 * Upload a lineup image from a Blob (e.g., from html-to-image).
 */
export async function uploadLineupBlob(
  blob: Blob,
  userId: string,
  filename?: string
) {
  const name = filename || `lineup-${Date.now()}.png`;
  const file = new File([blob], name, { type: blob.type || "image/png" });
  return uploadLineupImage(file, userId, name);
}

/**
 * Get the public URL for a stored lineup image.
 */
export function getLineupImageUrl(path: string): string {
  const supabase = createClient();
  const {
    data: { publicUrl },
  } = supabase.storage.from(LINEUP_IMAGES_BUCKET).getPublicUrl(path);
  return publicUrl;
}

/**
 * Delete a lineup image from storage.
 */
export async function deleteLineupImage(path: string) {
  const supabase = createClient();
  const { error } = await supabase.storage
    .from(LINEUP_IMAGES_BUCKET)
    .remove([path]);

  if (error) {
    console.error("Error deleting image:", error.message);
    throw error;
  }
}

/**
 * List all lineup images for a specific user.
 */
export async function listUserLineupImages(userId: string) {
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from(LINEUP_IMAGES_BUCKET)
    .list(userId, {
      limit: 100,
      sortBy: { column: "created_at", order: "desc" },
    });

  if (error) {
    console.error("Error listing images:", error.message);
    throw error;
  }

  return (data || []).map((file) => ({
    ...file,
    publicUrl: getLineupImageUrl(`${userId}/${file.name}`),
  }));
}
