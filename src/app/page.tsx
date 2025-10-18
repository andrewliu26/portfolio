"use client";

import PrimaryButton from "@/components/PrimaryButton";
import LinkButton from "@/components/LinkButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function Home() {
    return (
        <div
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
                <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <h1>Hi, I'm Andrew Liu</h1>
                        <h2>Junior UI/UX Designer</h2>
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <PrimaryButton onClick={() => console.log('Button clicked!')}>
                            View Resume
                        </PrimaryButton>
                        <SecondaryButton onClick={() => console.log('Button clicked!')}>
                            About Me
                        </SecondaryButton>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <p>Connect with me</p>
                        <div style={{ display: "flex", gap: "20px" }}>
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
                style={{
                    flex: 4,
                    height: "100vh",
                    overflowY: "auto",
                    paddingTop: "40px",
                    paddingBottom: "60px",
                    backgroundColor: "#e5e5e5",
                }}
            >
                {/* Your right content here */}
            </div>
        </div>
    );
}
