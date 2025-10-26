"use client";

import PrimaryButton from "@/components/PrimaryButton";
import LinkButton from "@/components/LinkButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProjectCard from "@/components/ProjectCard";
import PageWrapper from "@/components/PageWrapper";
import { ChevronDown } from 'lucide-react';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.title = "Andrew Liu";
    }, []);

    const imageUrls = [
        "/notion-face.png",
        "/adaptx/adaptx-thumbnail.png",
        "/uniview/uniview-thumbnail.png",
        "/icons/figma.svg",
        "/icons/linkedin.svg",
        "/icons/github.svg",
        "/icons/email.svg",
        "/icons/down-arrow.svg"
    ];

    return (
        <PageWrapper imageUrls={imageUrls}>
            <div
                className="main-container"
                style={{
                    backgroundColor: "var(--background)",
                    minHeight: "100vh",
                    padding: "0 120px",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "80px",
                }}
            >
            {/* Left Column */}
            <div
                className="left-column"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flex: 3,
                    alignSelf: "stretch",
                    padding: "80px 0",
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                }}
            >
                <img
                    src="/notion-face.png"
                    alt="Notion Face"
                    width={48}
                    height={44}
                />
                <div className="main-left" style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <h1>Hi, I'm Andrew Liu</h1>
                        <h2>Junior UI/UX Designer</h2>
                    </div>
                    <div className="buttons-container" style={{ display: "flex", gap: "10px" }}>
                        <PrimaryButton href="/Andrew_Liu_UIUX_Designer.pdf" target="_blank">
                            View Resume
                        </PrimaryButton>
                        <SecondaryButton href="/about">
                            About Me
                        </SecondaryButton>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <p>Connect with me:</p>
                        <div className="social-links" style={{ display: "flex", gap: "20px" }}>
                            <LinkButton href="https://www.figma.com/@andrewliu26/" icon="figma">
                                Figma
                            </LinkButton>
                            <LinkButton href="https://www.linkedin.com/in/andrewliu26/" icon="linkedin">
                                LinkedIn
                            </LinkButton>
                            <LinkButton href="https://www.github.com/andrewliu26" icon="github">
                                GitHub
                            </LinkButton>
                            <LinkButton href="mailto:andrewliucs@gmail.com" icon="mail">
                                Email
                            </LinkButton>
                        </div>
                    </div>
                </div>
                <p className="copyright">© 2025 Andrew Liu</p>
            </div>

            {/* Right Column */}
            <div
                className="right-column"
                style={{
                    flex: 4,
                    paddingTop: "40px",
                    paddingBottom: "60px",
                }}
            >
                {/* Header */}
                <div className="projects-header" style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    marginBottom: "32px"
                }}>
                    <h3>Projects</h3>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "var(--font-geist-sans), sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                    }}>
                        <ChevronDown size={16} className="bounce-arrow" />
                        <span>Scroll down to view more</span>
                    </div>
                </div>
                
                {/* Project Cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <ProjectCard
                        href="/project/adaptx"
                        imageSrc="/adaptx/adaptx-thumbnail.png"
                        imageAlt="AdaptX Project"
                        projectName="AdaptX"
                        date="2025"
                    />
                    <ProjectCard
                        href="/project/uniview"
                        imageSrc="/uniview/uniview-thumbnail.png"
                        imageAlt="Uniview Project"
                        projectName="Uniview"
                        date="2024"
                    />
                </div>
            </div>
        </div>
        <div className="copyright-footer">© 2025 Andrew Liu</div>
        </PageWrapper>
    );
}
