import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorEffect() {
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
            className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-gray-800 pointer-events-none z-0 blur-[100px]"
            style={{ x: position.x - 150, y: position.y - 150 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: position.x - 150, y: position.y - 150 }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 100,
                mass: 1,
            }}
        />
    );
}
