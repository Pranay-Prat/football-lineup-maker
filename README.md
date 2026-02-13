# Lineup Lab

Lineup Lab is a sophisticated web application designed for football enthusiasts, coaches, and analysts to create, customize, and share professional-grade football lineups. It combines a powerful drag-and-drop interface with robust customization options, allowing users to visualize tactics and team formations with precision.

## Features

### Interactive Pitch Builder
- **Drag-and-Drop functionality:** Seamlessly move players across the pitch to create custom formations or adjust standard ones.
- **Dynamic Positioning:** Players snap to grid or free-roam based on your tactical needs.
- **Visual Feedback:** Real-time updates as you adjust player positions.

### Deep Customization
- **Player Details:** Edit individual player names and jersey numbers to match your squad.
- **Team Branding:** Customize team names and formations.
- **Pitch Styles:** Choose from various pitch designs to match different aesthetics.
- **Kit Colors:** Adjust player kit colors to represent home, away, or custom team colors.

### Tactical Tools
- **Standard Formations:** Pre-loaded with popular formations like 4-4-2, 4-3-3, 3-5-2, and more as starting points.
- **Roster Management:** Add and remove players to build your perfect starting XI and substitutes.
- **Stats & Analysis:** View basic formation statistics and player distribution (where applicable).

### Saving and Sharing
- **Cloud Storage:** Authenticated users can save their lineups to a secure database for future editing.
- **Image Export:** Generate high-quality images of your lineups for social media, presentations, or coaching documents.
- **Shareable Links:** Create unique, read-only links to share your tactics with others without them needing an account.

## How It Works

1. **Select a Formation:** Start by choosing a base formation from the dropdown menu (e.g., 4-4-2). This positions players in a standard setup.
2. **Customize Your Team:** Click on any player to edit their name and number. Use the team settings to change the team name and kit colors.
3. **Adjust Positioning:** Drag players to their exact positions on the field to represent specific tactical roles (e.g., a False 9 or an Inverted Wingback).
4. **Manage Roster:** Use the roster panel to swap players in and out of the starting lineup.
5. **Save or Export:** once satisfied, save your lineup to your profile or download it as an image to share with your team or followers.

## Technology Stack

This project leverages a modern, performance-oriented tech stack:

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **ORM:** Prisma
- **State Management:** Zustand
- **Drag & Drop:** React DnD
- **Animations:** Framer Motion
- **Icons:** Lucide React, Tabler Icons

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A package manager like npm, yarn, pnpm, or bun.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd football-lineup-maker
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and configure your Supabase credentials and other necessary environment variables.

5. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Development

- **Linting:** Run `npm run lint` to check for code quality issues.
- **Building:** Run `npm run build` to create an optimized production build.
