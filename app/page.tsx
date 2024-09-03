"use client";

import { InView } from "@/components/in-view";
import { TextEffect } from "@/components/text-effect";
import { Typewriter } from 'react-simple-typewriter';
import { Poppins, Source_Code_Pro } from "next/font/google";
import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, logoFigma, logoInstagram } from 'ionicons/icons';

import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const source_code_pro = Source_Code_Pro({ subsets: ["latin"] });

export default function Page() {
    return (
        <main className="bg-black">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, ease: "easeInOut", delay: 1}}
                className="h-screen w-screen overflow-auto"
            >
                <div className="h-screen flex flex-col text-white items-center justify-center bg-black">
                    <TextEffect preset="fade" className={`py-6 text-center text-3xl font-bold ${poppins.className}`}>
                        Andrew Liu
                    </TextEffect>
                    <span className={`pb-6 text-center text-xl font-medium ${source_code_pro.className}`}>
                        Software{' '}
                        <Typewriter
                            words={['Developer', 'Engineer', 'Designer']}
                            loop
                            cursor
                            cursorStyle='┃'
                            typeSpeed={80}
                            deleteSpeed={70}
                            delaySpeed={1500}
                        />
                    </span>
                    <div className="text-center text-sm max-w-lg px-10">
                        <p>
                            I'm an undergraduate student studying computer science with 2+ years of experience in
                            software engineering specializing in frontend engineering and UX/UI design.
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 my-10">
                        <a href="https://www.linkedin.com/in/andrewliu26/" target="_blank" rel="noopener noreferrer">
                            <IonIcon icon={logoLinkedin} style={{fontSize: '24px', color: 'white'}}/>
                        </a>
                        <a href="https://github.com/andrewliu26" target="_blank" rel="noopener noreferrer">
                            <IonIcon icon={logoGithub} style={{fontSize: '24px', color: 'white'}}/>
                        </a>
                        <a href="https://www.figma.com/@andrewliu26" target="_blank" rel="noopener noreferrer">
                            <IonIcon icon={logoFigma} style={{fontSize: '24px', color: 'white'}}/>
                        </a>
                        <a href="https://www.instagram.com/andrewliu.u" target="_blank" rel="noopener noreferrer">
                            <IonIcon icon={logoInstagram} style={{fontSize: '24px', color: 'white'}}/>
                        </a>
                    </div>
                </div>

                {/* Experience */}
                <div className="h-screen flex flex-col items-center justify-center bg-black">
                    <InView
                        variants={{
                            hidden: {opacity: 0, y: 50, filter: "blur(10px)"},
                            visible: {opacity: 1, y: 0, filter: "blur(0px)"},
                        }}
                        viewOptions={{margin: "0px 0px -200px 0px"}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                        <div className={`text-center text-white ${poppins.className}`}>
                            <h1 className="font-bold text-2xl py-6">
                                Experience
                            </h1>
                        </div>
                    </InView>
                </div>

                {/* Projects */}
                <div className="h-screen flex flex-col items-center justify-center bg-black">
                    <InView
                        variants={{
                            hidden: {opacity: 0, y: 50, filter: "blur(10px)"},
                            visible: {opacity: 1, y: 0, filter: "blur(0px)"},
                        }}
                        viewOptions={{margin: "0px 0px -200px 0px"}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                        <div className={`text-center text-white ${poppins.className}`}>
                            <h1 className="font-bold text-2xl py-6">
                                Projects
                            </h1>
                        </div>
                    </InView>
                </div>

                {/* About Me */}
                <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
                    <InView
                        variants={{
                            hidden: {opacity: 0, y: 50, filter: "blur(10px)"},
                            visible: {opacity: 1, y: 0, filter: "blur(0px)"},
                        }}
                        viewOptions={{margin: "0px 0px -200px 0px"}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                        <div className={`text-center text-black ${poppins.className}`}>
                            <h1 className="font-bold text-2xl py-6">
                                Experience
                            </h1>
                        </div>
                    </InView>
                </div>
            </motion.div>
        </main>
    );
}
