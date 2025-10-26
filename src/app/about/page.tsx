"use client";

import BackButton from "@/components/BackButton";
import PageWrapper from "@/components/PageWrapper";
import MediaItem from "@/components/MediaItem";
import PrimaryButton from "@/components/PrimaryButton";

export default function AboutPage() {
    const imageUrls = [
        // Only preload critical images that are immediately visible
        "/about-me/albums/two-star.jpeg",
        "/about-me/albums/absolutely.jpeg", 
        "/about-me/albums/imaginal-disk.png",
        "/about-me/albums/minecraft.jpeg",
        "/about-me/movies/parasite.jpg",
        "/about-me/movies/nemo.jpg",
        "/about-me/movies/cure.jpg",
        "/about-me/movies/dune.jpeg"
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
                <BackButton href="/" />
                <div className="main-left" style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <h1>About Me</h1>
                        <h2>Learn more about who I am and what I do.</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p><span style={{ marginRight: "8px" }}>📍</span><span style={{ fontWeight: 600 }}>Located in:</span> Hopkinton, MA</p>
                        <p><span style={{ marginRight: "8px" }}>🎮</span><span style={{ fontWeight: 600 }}>Playing:</span> Hollow Knight: Silksong, CS2</p>
                        <p><span style={{ marginRight: "8px" }}>📚</span><span style={{ fontWeight: 600 }}>Reading:</span> Recursion (Blake Crouch)</p>
                        <p><span style={{ marginRight: "8px" }}>🎧</span><span style={{ fontWeight: 600 }}>Listening to:</span> Dijon, Novo Amor, Zack Villere</p>
                    </div>
                </div>
                        <p className="copyright">© 2025 Andrew Liu</p>
            </div>

            {/* Right Column */}
            <div
                className="right-column"
                style={{
                    flex: 4,
                    paddingTop: "80px",
                    paddingBottom: "80px",
                }}
            >
                {/* About Text Section */}
                <div style={{ marginBottom: "40px" }}>
                    <h4 style={{ marginBottom: "16px" }}>BACKGROUND</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <p style={{ fontSize: "0.938rem" }}>
                            I'm a designer and developer with a passion for inclusive design. Since I was a kid, I've loved expressing myself creatively. I also began coding for fun when I was little, which led me to earn a degree in Computer Science from Boston University. Now, I'm combining my background in software development with my love for art and design to create beautiful, human-centered experiences.
                        </p>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "20px" }}>
                    {/* Favorite Albums */}
                    <div style={{ flex: 1 }}>
                        <h4 style={{ marginBottom: "16px" }}>FAVORITE ALBUMS</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <MediaItem
                                imageSrc="/about-me/albums/two-star.jpeg"
                                imageAlt="Two Star & The Dream Police"
                                title="Two Star & The Dream Police"
                                artist="Mk.gee"
                            />
                            <MediaItem
                                imageSrc="/about-me/albums/absolutely.jpeg"
                                imageAlt="Absolutely"
                                title="Absolutely"
                                artist="Dijon"
                            />
                            <MediaItem
                                imageSrc="/about-me/albums/imaginal-disk.png"
                                imageAlt="Imaginal Disk"
                                title="Imaginal Disk"
                                artist="Magdelena Bay"
                            />
                            <MediaItem
                                imageSrc="/about-me/albums/minecraft.jpeg"
                                imageAlt="Minecraft - Volume Alpha"
                                title="Minecraft - Volume Alpha"
                                artist="C418"
                            />
                        </div>
                    </div>

                    {/* Favorite Movies */}
                    <div style={{ flex: 1 }}>
                        <h4 style={{ marginBottom: "16px" }}>FAVORITE MOVIES</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <MediaItem
                                imageSrc="/about-me/movies/parasite.jpg"
                                imageAlt="Parasite"
                                title="Parasite"
                                artist="Bong Joon Ho"
                            />
                            <MediaItem
                                imageSrc="/about-me/movies/nemo.jpg"
                                imageAlt="Finding Nemo"
                                title="Finding Nemo"
                                artist="Andrew Stanton"
                            />
                            <MediaItem
                                imageSrc="/about-me/movies/cure.jpg"
                                imageAlt="Cure"
                                title="Cure"
                                artist="Kiyoshi Kurosawa"
                            />
                            <MediaItem
                                imageSrc="/about-me/movies/dune.jpeg"
                                imageAlt="Dune: Part Two"
                                title="Dune: Part Two"
                                artist="Denis Villeneuve"
                            />
                        </div>
                    </div>
                </div>

                {/* Camera Roll Section */}
                <div className="camera-roll-section">
                    <h4>CAMERA ROLL</h4>
                    <div className="camera-roll-container">
                        <img 
                            src="/about-me/imgs/DSCN0663.JPG" 
                            alt="Photo 1" 
                            className="camera-roll-image"
                        />
                        <img 
                            src="/about-me/imgs/IMG_0742.jpeg" 
                            alt="Photo 2" 
                            className="camera-roll-image"
                        />
                        <img 
                            src="/about-me/imgs/IMG_0747.jpeg" 
                            alt="Photo 3" 
                            className="camera-roll-image"
                        />
                        <img 
                            src="/about-me/imgs/IMG_1188_jpg.jpg" 
                            alt="Photo 4" 
                            className="camera-roll-image"
                        />
                        <img 
                            src="/about-me/imgs/IMG_3138.JPG" 
                            alt="Photo 5" 
                            className="camera-roll-image"
                        />
                        <img 
                            src="/about-me/imgs/IMG_3820.jpeg" 
                            alt="Photo 6" 
                            className="camera-roll-image"
                        />
                        <img 
                            src="/about-me/imgs/IMG_6168.jpeg" 
                            alt="Photo 7" 
                            className="camera-roll-image"
                        />
                        <img 
                            src="/about-me/imgs/IMG_8777.jpeg" 
                            alt="Photo 8" 
                            className="camera-roll-image"
                        />
                        <img 
                            src="/about-me/imgs/IMG_8946.jpeg" 
                            alt="Photo 9" 
                            className="camera-roll-image"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-footer">© 2025 Andrew Liu</div>
        </PageWrapper>
    );
}
