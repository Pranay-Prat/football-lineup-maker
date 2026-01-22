"use client";

import { useState, RefObject } from 'react';
import { toPng, toSvg } from 'html-to-image';

export interface UseExportOptions {
    backgroundColor?: string;
    pngQuality?: number;
    pngPixelRatio?: number;
}

export interface UseExportReturn {
    isExporting: boolean;
    isExportOpen: boolean;
    toggleExportOpen: () => void;
    closeExport: () => void;
    handleExportPng: () => Promise<void>;
    handleExportSvg: () => Promise<void>;
}

/**
 * Custom hook for exporting a DOM element as PNG or SVG
 */
export const useExport = (
    elementRef: RefObject<HTMLDivElement | null>,
    filename: string,
    options: UseExportOptions = {}
): UseExportReturn => {
    const {
        backgroundColor = '#1a1a2e',
        pngQuality = 1,
        pngPixelRatio = 2,
    } = options;

    const [isExporting, setIsExporting] = useState(false);
    const [isExportOpen, setIsExportOpen] = useState(false);

    const toggleExportOpen = () => setIsExportOpen((prev) => !prev);
    const closeExport = () => setIsExportOpen(false);

    const sanitizeFilename = (name: string) => name.replace(/\s+/g, '_');

    const handleExportPng = async () => {
        if (!elementRef.current) return;
        setIsExporting(true);
        try {
            const dataUrl = await toPng(elementRef.current, {
                quality: pngQuality,
                pixelRatio: pngPixelRatio,
                backgroundColor,
            });
            const link = document.createElement('a');
            link.download = `${sanitizeFilename(filename)}_lineup.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to export PNG:', err);
        } finally {
            setIsExporting(false);
            setIsExportOpen(false);
        }
    };

    const handleExportSvg = async () => {
        if (!elementRef.current) return;
        setIsExporting(true);
        try {
            const dataUrl = await toSvg(elementRef.current, {
                backgroundColor,
            });
            const link = document.createElement('a');
            link.download = `${sanitizeFilename(filename)}_lineup.svg`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to export SVG:', err);
        } finally {
            setIsExporting(false);
            setIsExportOpen(false);
        }
    };

    return {
        isExporting,
        isExportOpen,
        toggleExportOpen,
        closeExport,
        handleExportPng,
        handleExportSvg,
    };
};

export default useExport;
