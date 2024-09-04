import { motion } from 'framer-motion';
import {Poppins} from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    activeDates: string;
    location?: string;
    description: string;
}

export default function InfoCard({ imageUrl, title, activeDates, location, description }: ProjectCardProps) {
    return (
        <motion.div
            className="max-w-sm bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
            whileHover={{ y: -10, opacity: 1 }}
            initial={{ opacity: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {/* Image Section */}
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover"
            />

            {/* Content Section */}
            <div className="p-6">
                <h2 className={`text-md font-semibold text-white mb-4 ${poppins.className}`}>{title}</h2>
                <p className="text-sm text-gray-400 mb-4">{activeDates} {location ? ` • ${location}` : ""}</p>
                <p className="text-gray-300 text-sm">{description}</p>
            </div>
        </motion.div>
    );
}
