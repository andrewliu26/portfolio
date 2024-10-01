"use client";

import { useState } from "react";

export default function AboutPage() {
    const techStack = [
        { iconClass: "devicon-figma-plain", proficiency: "75%" },
        { iconClass: "devicon-react-original", proficiency: "80%" },
        { iconClass: "devicon-nextjs-original", proficiency: "40%" },
        { iconClass: "devicon-javascript-plain", proficiency: "80%" },
        { iconClass: "devicon-typescript-plain", proficiency: "70%" },
        { iconClass: "devicon-tailwindcss-plain", proficiency: "40%" },
        { iconClass: "devicon-java-plain", proficiency: "70%" },
        { iconClass: "devicon-python-plain", proficiency: "65%" },
        { iconClass: "devicon-git-plain", proficiency: "80%" },
        { iconClass: "devicon-github-original", proficiency: "70%" }
    ];

    // Sort by proficiency in descending order
    const sortedTechStack = techStack.sort((a, b) => parseInt(b.proficiency) - parseInt(a.proficiency));

    // State for toggling each section
    const [isEducationOpen, setIsEducationOpen] = useState(false);
    const [isTechStackOpen, setIsTechStackOpen] = useState(false);
    const [isPersonalOpen, setIsPersonalOpen] = useState(false);

    // Arrow SVG with inline rotation styles
    const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
        <svg
            style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-in-out'
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20"
            height="20"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
    );

    // Animation container styles (using height for the animation, like in the reference)
    const animatedStyle = (isOpen: boolean) => ({
        height: isOpen ? 'auto' : '0px',  // use auto to grow naturally
        overflow: 'hidden',
        transition: 'height 0.4s ease' // same animation as reference
    });

    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tight">
                About Me
            </h1>

            <p className="mb-8 text-neutral-600 dark:text-neutral-300 text-justify">
                {`I began my computer science journey in middle school, where I was first introduced to languages like Python and Scratch. My curiosity was piqued by how I could blend my love for art with programming. Now, I’ve developed a deep passion for designing and developing all types of software applications, and I’ve taken courses and contributed to projects that have broadened my understanding of the diverse and dynamic field of computer science.`}
            </p>

            {/* Education Section */}
            <div className="mb-8">
                <div className="flex justify-between items-center cursor-pointer"
                     onClick={() => setIsEducationOpen(!isEducationOpen)}>
                    <h2 className="text-lg font-medium tracking-tight">Education</h2>
                    <ArrowIcon isOpen={isEducationOpen} />
                </div>
                <div style={animatedStyle(isEducationOpen)}>
                    <p className="mt-4 font-medium text-neutral-600 dark:text-neutral-300 text-justify">
                        {`Boston University`}
                    </p>
                    <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-justify">
                        {`B.A. in Computer Science (2021 – 2025)`}
                    </p>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mb-8">
                <div className="flex justify-between items-center cursor-pointer"
                     onClick={() => setIsTechStackOpen(!isTechStackOpen)}>
                    <h2 className="text-lg font-medium tracking-tight">Tech Stack</h2>
                    <ArrowIcon isOpen={isTechStackOpen} />
                </div>
                <div style={animatedStyle(isTechStackOpen)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {sortedTechStack.map((tech, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <i className={`${tech.iconClass} text-2xl`}></i>
                                <div className="w-full bg-neutral-200 rounded-full h-2 dark:bg-neutral-700">
                                    <div
                                        className="h-2 rounded-full bg-[#4c97f8]"
                                        style={{ width: tech.proficiency }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Personal Section */}
            <div className="mb-8">
                <div className="flex justify-between items-center cursor-pointer"
                     onClick={() => setIsPersonalOpen(!isPersonalOpen)}>
                    <h2 className="text-lg font-medium tracking-tight">Personal</h2>
                    <ArrowIcon isOpen={isPersonalOpen} />
                </div>
                <div style={animatedStyle(isPersonalOpen)}>
                    <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-justify">
                        {`In my free time, I love exploring creative outlets like making music and practicing photography, both 35mm and digital. I find joy in capturing moments and experimenting with different styles. When I'm not behind the camera or working on new tracks, I spend quality time with my friends, family, and of course, my cat. I’m also an avid tennis player and enjoy the thrill of skateboarding. On quieter days, you’ll often find me watching movies—it’s one of my favorite ways to relax.`}
                    </p>
                </div>
            </div>
        </section>
    );
}
