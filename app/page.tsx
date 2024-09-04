"use client";

import { TextEffect } from "@/components/text-effect";
import { Typewriter } from 'react-simple-typewriter';
import { Poppins } from "next/font/google";
import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, logoFigma, logoInstagram } from 'ionicons/icons';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CursorEffect from "@/components/cursor-effect";
import InfoCard from "@/components/info-card";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Page() {
    const [showHeaderBar, setShowHeaderBar] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowHeaderBar(!entry.isIntersecting); // Show header bar if hero section is out of view
            },
            { threshold: 0.4 } // Trigger when at least 10% of the hero section is visible
        );

        const target = document.querySelector("#hero-section");
        if (target) observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, []);

    return (
        <main className="bg-[#080E15] relative">
            <CursorEffect />

            {/* Retractable Header Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 bg-white/10 backdrop-blur-xl"
                initial={{ opacity: 0, y: -50 }}
                animate={showHeaderBar ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {/* Site/Logo Name in the Center */}
                <div className={`text-white text-xl font-semibold mr-4 ${poppins.className}`}>
                    Andrew Liu
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-2 ml-4">
                    <a href="https://www.linkedin.com/in/andrewliu26/" target="_blank" rel="noopener noreferrer"
                       className="relative group w-10 h-10 flex items-center justify-center">
                        <span
                            className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                        </span>
                        <IonIcon icon={logoLinkedin} style={{ fontSize: '24px', color: 'white' }}
                                 className="relative z-10" />
                    </a>
                    <a href="https://github.com/andrewliu26" target="_blank" rel="noopener noreferrer"
                       className="relative group w-10 h-10 flex items-center justify-center">
                        <span
                            className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                        </span>
                        <IonIcon icon={logoGithub} style={{ fontSize: '24px', color: 'white' }}
                                 className="relative z-10" />
                    </a>
                    <a href="https://www.figma.com/@andrewliu26" target="_blank" rel="noopener noreferrer"
                       className="relative group w-10 h-10 flex items-center justify-center">
                        <span
                            className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                        </span>
                        <IonIcon icon={logoFigma} style={{ fontSize: '24px', color: 'white' }}
                                 className="relative z-10" />
                    </a>
                    <a href="https://www.instagram.com/andrewliu.u" target="_blank" rel="noopener noreferrer"
                       className="relative group w-10 h-10 flex items-center justify-center">
                        <span
                            className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                        </span>
                        <IonIcon icon={logoInstagram} style={{ fontSize: '24px', color: 'white' }}
                                 className="relative z-10" />
                    </a>
                </div>
            </motion.div>

            {/* Fade In Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                className="h-screen w-screen overflow-auto"
            >
                {/* Hero Section */}
                <div id="hero-section"
                     className="h-screen flex flex-col text-white items-center justify-center bg-transparent z-20">
                    <TextEffect preset="fade"
                                className={`py-6 text-center text-3xl font-bold ${poppins.className} z-20`}>
                        Andrew Liu
                    </TextEffect>
                    <span className={"pb-6 text-center text-xl font-medium z-20"}>
                        <Typewriter
                            words={['Software Developer', 'Software Engineer', 'UX/UI Designer']}
                            loop
                            cursor
                            typeSpeed={60}
                            deleteSpeed={40}
                            delaySpeed={1500}
                        />
                    </span>
                    <div className="text-center text-sm max-w-lg px-10 z-20">
                        <p>
                            I'm an undergraduate student studying computer science with 2+ years of experience in
                            software engineering specializing in frontend engineering and UX/UI design.
                        </p>
                    </div>

                    {/* Social Media Buttons */}
                    <div className="flex space-x-4 my-10 z-20">
                        <a href="https://www.linkedin.com/in/andrewliu26/" target="_blank" rel="noopener noreferrer"
                           className="relative group w-10 h-10 flex items-center justify-center">
                            <span
                                className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                            </span>
                            <IonIcon icon={logoLinkedin} style={{ fontSize: '24px', color: 'white' }}
                                     className="relative z-10" />
                        </a>
                        <a href="https://github.com/andrewliu26" target="_blank" rel="noopener noreferrer"
                           className="relative group w-10 h-10 flex items-center justify-center">
                            <span
                                className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                            </span>
                            <IonIcon icon={logoGithub} style={{ fontSize: '24px', color: 'white' }}
                                     className="relative z-10" />
                        </a>
                        <a href="https://www.figma.com/@andrewliu26" target="_blank" rel="noopener noreferrer"
                           className="relative group w-10 h-10 flex items-center justify-center">
                            <span
                                className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                            </span>
                            <IonIcon icon={logoFigma} style={{ fontSize: '24px', color: 'white' }}
                                     className="relative z-10" />
                        </a>
                        <a href="https://www.instagram.com/andrewliu.u" target="_blank" rel="noopener noreferrer"
                           className="relative group w-10 h-10 flex items-center justify-center">
                            <span
                                className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                            </span>
                            <IonIcon icon={logoInstagram} style={{ fontSize: '24px', color: 'white' }}
                                     className="relative z-10" />
                        </a>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="h-fit flex flex-col items-center justify-center bg-transparent">
                    <div className="h-[90%] w-[90%] text-center text-white p-10 z-20 rounded-lg">
                        <h1 className="font-bold text-2xl py-6">
                            Experience
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <InfoCard
                                imageUrl="https://via.placeholder.com/400x300"
                                title="Frontend Engineer Intern"
                                activeDates="May 2024 - Aug 2024"
                                location="Boston, MA"
                                description="Cross-platform app that uses a matching algorithm to generate personalized suggestions for events and locations to visit."
                            />
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="h-fit flex flex-col items-center justify-center bg-transparent">
                    <div className="h-[90%] w-[90%] text-center text-white p-10 z-20 rounded-lg">
                        <h1 className="font-bold text-2xl py-6">
                            Projects
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <InfoCard
                                imageUrl="https://via.placeholder.com/400x300"
                                title="Whirl Mobile App"
                                activeDates="Jul 2024 - Present"
                                description="Cross-platform app that uses a matching algorithm to generate personalized suggestions for events and locations to visit."
                            />
                            <InfoCard
                                imageUrl="https://via.placeholder.com/400x300"
                                title="Instasport Android App"
                                activeDates="Oct 2023 - Dec 2023"
                                description="Android app that allows users to create, find, and join local sports pickup games."
                            />
                            <InfoCard
                                imageUrl="https://via.placeholder.com/400x300"
                                title="Voyager Mobile App"
                                activeDates="Jun 2023 - Aug 2024"
                                description="Cross-platform mobile app that uses the ChatGPT API to give users AI-generated travel itineraries."
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="w-screen h-[20%] flex flex-col items-center justify-center bg-transparent">
                </div>
            </motion.div>
        </main>
    );
}
