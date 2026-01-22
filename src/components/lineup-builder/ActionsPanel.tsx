"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Save, Share2, Download, Image, FileCode, ChevronDown } from 'lucide-react';

export interface ActionsPanelProps {
    isExporting: boolean;
    isExportOpen: boolean;
    onToggleExport: () => void;
    onExportPng: () => void;
    onExportSvg: () => void;
    onSave?: () => void;
    onShare?: () => void;
}

/**
 * Actions panel with Save, Share, and Export buttons
 */
export const ActionsPanel: React.FC<ActionsPanelProps> = ({
    isExporting,
    isExportOpen,
    onToggleExport,
    onExportPng,
    onExportSvg,
    onSave,
    onShare,
}) => {
    return (
        <div className="bg-card border-2 dark:border rounded-lg p-6 space-y-3">
            <h3 className="text-lg font-semibold text-foreground mb-4">Actions</h3>

            <button
                onClick={onSave}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
                <Save className="w-4 h-4" />
                <span>Save Lineup</span>
            </button>

            <button
                onClick={onShare}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
            >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
            </button>

            {/* Export Dropdown */}
            <div className="relative">
                <button
                    onClick={onToggleExport}
                    disabled={isExporting}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors disabled:opacity-50"
                >
                    <Download className="w-4 h-4" />
                    <span>{isExporting ? 'Exporting...' : 'Export'}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExportOpen ? 'rotate-180' : ''}`} />
                </button>

                {isExportOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bottom-full left-0 right-0 mb-2 bg-card border border-border rounded-md shadow-lg z-20 overflow-hidden"
                    >
                        <button
                            onClick={onExportPng}
                            className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-accent transition-colors text-left"
                        >
                            <Image className="w-5 h-5 text-blue-500" />
                            <div>
                                <div className="font-medium text-foreground">Export as PNG</div>
                                <div className="text-xs text-muted-foreground">High-quality image format</div>
                            </div>
                        </button>
                        <button
                            onClick={onExportSvg}
                            className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-accent transition-colors text-left border-t border-border"
                        >
                            <FileCode className="w-5 h-5 text-green-500" />
                            <div>
                                <div className="font-medium text-foreground">Export as SVG</div>
                                <div className="text-xs text-muted-foreground">Scalable vector format</div>
                            </div>
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default ActionsPanel;
