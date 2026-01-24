import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Lineup Builder',
    description: 'Create stunning football lineups with our intuitive drag-and-drop builder. Choose from popular formations, customize player positions, add names, and export high-quality images.',
    keywords: [
        'football lineup builder',
        'soccer formation creator',
        'drag and drop lineup',
        'custom football formation',
        'football tactical board',
        'create starting eleven',
        'football team builder',
        'lineup generator',
        'lineup lab builder',
    ],
    openGraph: {
        title: 'Lineup Builder | Lineup Lab',
        description: 'Design professional football lineups with our interactive builder. Drag-and-drop interface, multiple formation options, and easy export.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lineup Builder | Lineup Lab',
        description: 'Create and customize your perfect football formation with ease',
    },
    alternates: {
        canonical: '/lineup-builder',
    },
};

export default function LineupBuilderLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <>{children}</>;
}
