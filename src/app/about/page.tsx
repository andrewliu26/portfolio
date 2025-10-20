"use client";

import Link from "next/link";
import PrimaryButton from "@/components/PrimaryButton";
import BackButton from "@/components/BackButton";

export default function AboutPage() {
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
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridTemplateRows: "repeat(7, 1fr)",
                    gap: "8px",
                    height: "100%",
                    padding: "20px"
                }}>
                    {[
                        "100_0269.JPG", "100_0347.JPG", "100_0350.JPG", "4374521800932500333.jpg",
                        "583276707798771918.jpg", "b8f589143c01fc63dfd560898dba3c96.jpg", "CineStill 400D-25.jpg", "DSCN0663.JPG",
                        "IMG_0763.jpeg", "IMG_0791.jpeg", "IMG_1096.jpeg", "IMG_1165.jpeg",
                        "IMG_3141.jpeg", "IMG_3276.jpeg", "IMG_3404.JPG", "IMG_3820.jpeg",
                        "IMG_4251.jpeg", "IMG_4253.jpeg", "IMG_4319.jpeg", "IMG_4634.jpeg",
                        "IMG_5026.JPG", "IMG_5293.jpeg", "IMG_5340.jpeg", "IMG_6058.jpeg",
                        "IMG_8371.jpeg", "IMG_8433.jpeg", "IMG_8777.jpeg", "IMG_9580.jpeg"
                    ].slice(0, 28).map((image, index) => {
                        // Define different grid spans for variety
                        const getGridSpan = (i: number) => {
                            if (i === 0 || i === 3 || i === 8 || i === 15 || i === 20) return "span 2";
                            if (i === 1 || i === 6 || i === 11 || i === 18 || i === 23) return "span 1 / span 2";
                            if (i === 2 || i === 7 || i === 12 || i === 19 || i === 24) return "span 2 / span 1";
                            return "span 1";
                        };

                        return (
                            <div
                                key={image}
                                style={{
                                    gridColumn: getGridSpan(index),
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    backgroundColor: "#f5f5f5"
                                }}
                            >
                                <img
                                    src={`/about-me/${image}`}
                                    alt={`About me photo ${index + 1}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 0.3s ease"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.05)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

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
                <BackButton href="/" />
                <div className="main-left" style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <h1>About Me</h1>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <p style={{ fontSize: "0.938rem" }}>
                            I’m a designer and developer with a passion for inclusivity. Since I was a kid, I’ve always loved doing anything that has allowed me to express myself creatively: drawing, painting, and so on. Recently, I graduated from Boston University with a degree in Computer Science. Now, I’m working to combine my passion for art and design with my background working on developing software to create beautiful and human user experiences. 
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            In my free time, I love listening to and making music, taking photos on various types of cameras, watching film and TV, and playing video games. I also enjoy playing tennis and am possibly the biggest ramen fiend you’ll ever meet.
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            I love meeting new people and chatting, so please feel free to reach out using any of my social links! :)
                        </p>
                    </div>
                </div>
                <p>© 2025 Andrew Liu</p>
            </div>
        </div>
    );
}


