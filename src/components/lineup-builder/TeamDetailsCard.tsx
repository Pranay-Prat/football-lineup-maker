"use client";

import React from 'react';

export interface TeamDetailsCardProps {
    teamName: string;
    onTeamNameChange: (name: string) => void;
}

/**
 * Card component for team name input
 */
export const TeamDetailsCard: React.FC<TeamDetailsCardProps> = ({
    teamName,
    onTeamNameChange
}) => {
    return (
        <div className="bg-card border-2 dark:border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Team Details</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Team Name
                    </label>
                    <input
                        type="text"
                        value={teamName}
                        onChange={(e) => onTeamNameChange(e.target.value)}
                        className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Enter team name"
                    />
                </div>
            </div>
        </div>
    );
};

export default TeamDetailsCard;
