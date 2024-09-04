"use client";

import { TextEffect } from "@/components/text-effect";
import { Typewriter } from 'react-simple-typewriter';
import { Poppins } from "next/font/google";
import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, logoFigma, logoInstagram } from 'ionicons/icons';
import { motion } from "framer-motion";
import CursorEffect from "@/components/cursor-effect";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Page() {
    return (
        <main className="bg-black">
            <CursorEffect />

            {/* Fade In Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                className="h-screen w-screen overflow-auto"
            >
                {/* Hero Section */}
                <div className="h-screen flex flex-col text-white items-center justify-center bg-black z-20">
                    <TextEffect preset="fade"
                                className={`py-6 text-center text-3xl font-bold ${poppins.className} z-20`}>
                        Andrew Liu
                    </TextEffect>
                    <span className={"pb-6 text-center text-xl font-medium z-20"}>
                        Software{' '}
                        <Typewriter
                            words={['Developer', 'Engineer', 'Designer']}
                            loop
                            cursor
                            typeSpeed={80}
                            deleteSpeed={70}
                            delaySpeed={1500}
                        />
                    </span>
                    <div className="text-center text-sm max-w-lg px-10 z-20">
                        <p>
                            I'm an undergraduate student studying computer science with 2+ years of experience in
                            software engineering specializing in frontend engineering and UX/UI design.
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 my-10 z-20">
                        <a href="https://www.linkedin.com/in/andrewliu26/" target="_blank" rel="noopener noreferrer"
                           className="relative group w-10 h-10 flex items-center justify-center">
                            <span
                                className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                            </span>
                            <IonIcon icon={logoLinkedin} style={{ fontSize: '24px', color: 'white' }}
                                     className="relative z-10"/>
                        </a>
                        <a href="https://github.com/andrewliu26" target="_blank" rel="noopener noreferrer"
                           className="relative group w-10 h-10 flex items-center justify-center">
                            <span
                                className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                            </span>
                            <IonIcon icon={logoGithub} style={{ fontSize: '24px', color: 'white' }}
                                     className="relative z-10"/>
                        </a>
                        <a href="https://www.figma.com/@andrewliu26" target="_blank" rel="noopener noreferrer"
                           className="relative group w-10 h-10 flex items-center justify-center">
                            <span
                                className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                            </span>
                            <IonIcon icon={logoFigma} style={{ fontSize: '24px', color: 'white' }}
                                     className="relative z-10"/>
                        </a>
                        <a href="https://www.instagram.com/andrewliu.u" target="_blank" rel="noopener noreferrer"
                           className="relative group w-10 h-10 flex items-center justify-center">
                            <span
                                className="absolute inset-0 bg-white opacity-0 rounded-md group-hover:opacity-30 transition-opacity duration-300 w-10 h-10">
                            </span>
                            <IonIcon icon={logoInstagram} style={{ fontSize: '24px', color: 'white' }}
                                     className="relative z-10"/>
                        </a>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="h-screen flex flex-col items-center justify-center bg-black">
                    <div className="h-[90%] w-[90%] text-center text-white p-10 glass-div rounded-lg">
                        <h1 className="font-bold text-2xl py-6">
                            Experience
                        </h1>
                        <p className="text-sm">
                            Details about your experience go here.
                        </p>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="h-screen flex flex-col items-center justify-center bg-black">
                    <div className="h-[90%] w-[90%] text-center text-white p-10 glass-div rounded-lg">
                        <h1 className="font-bold text-2xl py-6">
                            Projects
                        </h1>
                        <p className="text-sm">
                            Details about your projects go here.
                        </p>
                    </div>
                </div>

                {/* About Me Section */}
                {/*
                <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
                    <div className="text-center text-black p-10 glass-div rounded-lg">
                        <h1 className="font-bold text-2xl py-6">
                            About Me
                        </h1>
                        <p className="text-sm">
                            Information about you goes here.
                        </p>
                    </div>
                </div>
                */}

                {/* Footer */}
                <div className="w-screen h-[20%] flex flex-col items-center justify-center bg-gray-100"/>
            </motion.div>
        </main>
    );
}
