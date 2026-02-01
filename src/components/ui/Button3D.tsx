"use client";

import { motion } from "framer-motion";

interface Button3DProps {
    children: React.ReactNode;
    className?: string;
}

export default function Button3D({ children, className = "" }: Button3DProps) {
    return (
        <motion.button
            className={`relative w-[180px] h-[60px] bg-transparent border-none p-0 m-0 cursor-pointer ${className}`}
            whileHover="hover"
            whileTap="pressed"
            initial="idle"
            style={{ outline: 'none' }}
        >
            {/* Shadow layer - gray background at bottom */}
            <div 
                className="absolute w-[calc(100%+2px)] h-full rounded-[7mm] -left-[1px]"
                style={{
                    background: 'rgb(140, 140, 140)',
                    top: '14px',
                    outline: '2px solid rgb(36, 38, 34)',
                    zIndex: -1
                }}
            />
            
            {/* Bottom layer - cream colored */}
            <div 
                className="absolute w-full h-full rounded-[7mm]"
                style={{
                    background: 'rgb(229, 229, 199)',
                    top: '10px',
                    left: 0,
                    outline: '2px solid rgb(36, 38, 34)',
                    zIndex: -1
                }}
            >
                {/* Left connector line */}
                <div 
                    className="absolute bottom-0"
                    style={{
                        width: '2px',
                        height: '9px',
                        background: 'rgb(36, 38, 34)',
                        left: '15%'
                    }}
                />
                {/* Right connector line */}
                <div 
                    className="absolute bottom-0"
                    style={{
                        width: '2px',
                        height: '9px',
                        background: 'rgb(36, 38, 34)',
                        left: '85%'
                    }}
                />
            </div>
            
            {/* Top layer - main button surface */}
            <motion.div 
                className="relative w-full h-full rounded-[7mm] flex items-center justify-center overflow-hidden"
                style={{
                    background: 'rgb(255, 255, 238)',
                    outline: '2px solid rgb(36, 38, 34)'
                }}
                variants={{
                    idle: { y: 0 },
                    hover: { y: 2 },
                    pressed: { y: 10 }
                }}
                transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 25
                }}
            >
                {/* Button text */}
                <span 
                    className="text-lg font-semibold select-none"
                    style={{ 
                        fontFamily: 'Poppins, sans-serif',
                        color: 'rgb(36, 38, 34)'
                    }}
                >
                    {children}
                </span>
                
                {/* Shine effect on hover/press */}
                <motion.div 
                    className="absolute h-full"
                    style={{
                        width: '15px',
                        background: 'rgba(0, 0, 0, 0.1)',
                        transform: 'skewX(30deg)'
                    }}
                    variants={{
                        idle: { left: '-20px' },
                        hover: { left: '-20px' },
                        pressed: { left: 'calc(100% + 20px)' }
                    }}
                    transition={{
                        duration: 0.25
                    }}
                />
            </motion.div>
        </motion.button>
    );
}
