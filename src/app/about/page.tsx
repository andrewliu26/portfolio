"use client";

import BackButton from "@/components/BackButton";
import PageWrapper from "@/components/PageWrapper";
import { useState, useEffect } from "react";

export default function AboutPage() {
    const [randomBentoImage, setRandomBentoImage] = useState("/about-me/bento-1.png");
    
    const bentoImages = [
        "/about-me/bento-1.png",
        "/about-me/bento-2.png", 
        "/about-me/bento-3.png"
    ];

    useEffect(() => {
        // Select a random bento image on component mount
        const randomIndex = Math.floor(Math.random() * bentoImages.length);
        setRandomBentoImage(bentoImages[randomIndex]);
    }, []);

    const imageUrls = [randomBentoImage];

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
                <BackButton href="/" />
                <div className="main-left" style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <h1>About Me</h1>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <p style={{ fontSize: "0.938rem" }}>
                            I’m a designer and developer with a passion for inclusive design. Since I was a kid, I’ve always loved doing anything that has allowed me to express myself creatively. Recently, I graduated from Boston University with a degree in Computer Science. Now, I’m working to combine my passion for art and design with my background working on developing software to create beautiful and human user experiences. 
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            In my free time, I love listening to and making music, taking photos on various types of cameras, watching film and TV, and playing video games. I also enjoy playing tennis and am possibly the biggest ramen fiend you’ll ever meet.
                        </p>
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
                <div className="bento-image-container">
                    <img
                        src={randomBentoImage}
                        alt="About me photos"
                        className="bento-image"
                    />
                </div>
            </div>
        </div>
        <div className="copyright-footer">© 2025 Andrew Liu</div>
        </PageWrapper>
    );
}
