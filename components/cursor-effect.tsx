// Made with https://github.com/perfectbase/effects

import {useEffect, useRef, useState} from 'react';
import { motion } from 'framer-motion';

export default function CursorEffect() {
    const [mouse, _setMouse] = useState({ x: 0, y: 0 });

    const ref = useRef<HTMLDivElement>(null);

    const svgPosInfo = ref.current?.getBoundingClientRect();
    const svgLeft = svgPosInfo?.left ?? 0;
    const svgTop = svgPosInfo?.top ?? 0;
    const svgWidth = svgPosInfo?.width ?? 0;
    const svgHeight = svgPosInfo?.height ?? 0;

    const svgCenterX = svgLeft + svgWidth / 2;
    const svgCenterY = svgTop + svgHeight / 2;

    const deltaX = mouse.x - svgCenterX;
    const deltaY = mouse.y - svgCenterY;

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <motion.div
            className="fixed rounded-full pointer-events-none z-0 blur-[120px]"
            style={{
                x: deltaX,
                y: deltaY,
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1, x: position.x - 200, y: position.y - 200}}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 200,
                mass: 1,
            }}
        >
            <svg viewBox="0 0 900 900" width="400" height="400">
                <g transform="translate(506.2611492658317 427.97930850749117)">
                    <motion.path
                        d="M254.3 -249.2C297 -211.7 276.5 -105.8 264.7 -11.8C252.9 82.3 249.9 164.5 207.2 217.2C164.5 269.9 82.3 292.9 -11.9 304.8C-106.1 316.7 -212.1 317.5 -285.5 264.8C-358.8 212.1 -399.4 106.1 -391.7 7.7C-384.1 -90.7 -328.2 -181.5 -254.8 -219C-181.5 -256.5 -90.7 -240.8 7.5 -248.3C105.8 -255.8 211.7 -286.7 254.3 -249.2"
                        fill="#BB004B"
                        animate={{
                            d: [
                                "M254.3 -249.2C297 -211.7 276.5 -105.8 264.7 -11.8C252.9 82.3 249.9 164.5 207.2 217.2C164.5 269.9 82.3 292.9 -11.9 304.8C-106.1 316.7 -212.1 317.5 -285.5 264.8C-358.8 212.1 -399.4 106.1 -391.7 7.7C-384.1 -90.7 -328.2 -181.5 -254.8 -219C-181.5 -256.5 -90.7 -240.8 7.5 -248.3C105.8 -255.8 211.7 -286.7 254.3 -249.2",
                                "M181.1 -177.6C256.1 -106.1 353 -53 362.5 9.4C371.9 71.9 293.8 143.8 218.8 188.3C143.8 232.8 71.9 249.9 3.1 246.8C-65.8 243.8 -131.5 220.5 -171 176C-210.5 131.5 -223.8 65.8 -238.4 -14.6C-253 -95 -269 -190 -229.5 -261.5C-190 -333 -95 -381 -21 -360C53 -339 106.1 -249.1 181.1 -177.6",
                                "M182.7 -178C231.5 -133.9 262.3 -66.9 280.5 18.3C298.8 103.5 304.6 206.9 255.8 281.9C206.9 356.9 103.5 403.5 25.2 378.3C-53 353 -106.1 256.1 -165.7 181.1C-225.4 106.1 -291.7 53 -310.8 -19.1C-329.9 -91.2 -301.8 -182.4 -242.1 -226.6C-182.4 -270.8 -91.2 -267.9 -12.1 -255.7C66.9 -243.6 133.9 -222.2 182.7 -178",
                            ],
                            fill: ["#5380f3", "#489FB5", "#6ce0cf"],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            duration: 5,
                        }}
                    />
                </g>
            </svg>
        </motion.div>
    );
}