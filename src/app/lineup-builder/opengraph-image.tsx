import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Lineup Builder - Create Custom Football Formations';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0a0a0a',
                    backgroundImage: 'linear-gradient(135deg, #0a0a0a 0%, #0d2818 50%, #0a0a0a 100%)',
                }}
            >
                {/* Football pitch illustration */}
                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <div
                        style={{
                            width: '600px',
                            height: '400px',
                            border: '4px solid #22c55e',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(34, 197, 94, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        {/* Center circle */}
                        <div
                            style={{
                                width: '120px',
                                height: '120px',
                                border: '3px solid #22c55e',
                                borderRadius: '100%',
                            }}
                        />
                        {/* Center line */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: '50%',
                                width: '3px',
                                height: '100%',
                                backgroundColor: '#22c55e',
                            }}
                        />
                    </div>
                </div>

                {/* Content overlay */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        backgroundColor: 'rgba(10, 10, 10, 0.85)',
                        padding: '48px 64px',
                        borderRadius: '16px',
                    }}
                >
                    {/* Badge */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: 'rgba(34, 197, 94, 0.2)',
                            border: '1px solid rgba(34, 197, 94, 0.5)',
                            borderRadius: '9999px',
                            padding: '8px 20px',
                            marginBottom: '24px',
                        }}
                    >
                        <span style={{ fontSize: '24px' }}>🎯</span>
                        <span style={{ fontSize: '18px', color: '#22c55e' }}>Lineup Builder</span>
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontSize: '56px',
                            fontWeight: 'bold',
                            color: '#ffffff',
                            marginBottom: '16px',
                            textAlign: 'center',
                            lineHeight: 1.1,
                        }}
                    >
                        Build Your Perfect Lineup
                    </h1>

                    {/* Subtitle */}
                    <p
                        style={{
                            fontSize: '24px',
                            color: '#9ca3af',
                            textAlign: 'center',
                            maxWidth: '700px',
                        }}
                    >
                        Drag, drop, customize, and export professional football formations
                    </p>
                </div>

                {/* Bottom gradient */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #22c55e 0%, #10B981 50%, #14b8a6 100%)',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
