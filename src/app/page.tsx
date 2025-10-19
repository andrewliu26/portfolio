"use client";

import PrimaryButton from "@/components/PrimaryButton";
import LinkButton from "@/components/LinkButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    return (
        <div
            className="main-container"
            style={{
                backgroundColor: "#ffffff",
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
                        <PrimaryButton onClick={() => window.open('/Andrew_Liu_UIUX_Designer.pdf', '_blank')}>
                            View Resume
                        </PrimaryButton>
                        <SecondaryButton onClick={() => console.log('Button clicked!')}>
                            About Me
                        </SecondaryButton>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <p>Connect with me:</p>
                        <div className="social-links" style={{ display: "flex", gap: "20px" }}>
                            <LinkButton href="https://www.figma.com/@andrewliu26/" icon="/icons/figma.svg">
                                Figma
                            </LinkButton>
                            <LinkButton href="https://www.linkedin.com/in/andrewliu26/" icon="/icons/linkedin.svg">
                                LinkedIn
                            </LinkButton>
                            <LinkButton href="https://www.github.com/andrewliu26" icon="/icons/github.svg">
                                GitHub
                            </LinkButton>
                            <LinkButton href="mailto:andrewliucs@gmail.com" icon="/icons/email.svg">
                                Email
                            </LinkButton>
                        </div>
                    </div>
                </div>
                <p>© 2025 Andrew Liu</p>
            </div>

            {/* Right Column */}
            <div
                className="right-column"
                style={{
                    flex: 4,
                    height: "100vh",
                    overflowY: "auto",
                    paddingTop: "40px",
                    paddingBottom: "60px",
                }}
            >
                {/* Header */}
                <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    marginBottom: "32px"
                }}>
                    <h2 style={{ 
                        fontFamily: "var(--font-geist-sans), sans-serif",
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#111111",
                        margin: "0"
                    }}>
                        Projects
                    </h2>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "var(--font-geist-sans), sans-serif",
                        fontSize: "0.875rem",
                        color: "#4e4e4e"
                    }}>
                        <img src="/icons/down-arrow.svg" alt="Arrow down" width={10} height={10} className="bounce-arrow" />
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
    );
}
