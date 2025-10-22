"use client";

import BackButton from "@/components/BackButton";
import PrimaryButton from "@/components/PrimaryButton";
import PageWrapper from "@/components/PageWrapper";
import ThemeImage from "@/components/ThemeImage";

export default function AdaptxPage() {
    const imageUrls = [
        "/adaptx/adaptx-hifi.png",
        "/adaptx/adaptx-lofi.png", 
        "/adaptx/adaptx-mockup.png",
        "/adaptx/adaptx-persona.png",
        "/adaptx/adaptx-thumbnail.png",
        "/icons/left-arrow.svg"
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
                        <h1>AdaptX</h1>
                        <h2>A mobile app that connects impaired athletes with support partners to make fitness more accessible, inclusive, and rewarding.</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <p><span style={{ fontWeight: 600 }}>Role:</span> UI/UX Designer</p>
                        <p><span style={{ fontWeight: 600 }}>Scope:</span> 4 months (January 2025 – May 2025)</p>
                        <p><span style={{ fontWeight: 600 }}>Tools:</span> Figma, Notion, Miro, Pen & Paper</p>
                        <p><span style={{ fontWeight: 600 }}>Team Size:</span> 4</p>
                    </div>
                    <div className="buttons-container" style={{ display: "flex", gap: "10px" }}>
                        <a href="https://www.figma.com/proto/8ZHYALbBjaqk0l1YGsYxUL/AdaptX-Project-Deliverables?node-id=2518-689&p=f&t=aciuc2wAoH49RueT-8&scaling=scale-down&content-scaling=fixed&page-id=2178%3A116&starting-point-node-id=2518%3A689&show-proto-sidebar=1&hide-ui=1" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <PrimaryButton>
                                View Prototype
                            </PrimaryButton>
                        </a>
                    </div>
                </div>
                <p>© 2025 Andrew Liu</p>
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
                <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <h4>OVERVIEW</h4>
                        <p style={{ fontSize: "0.938rem" }}>
                            Athletes with impairments often struggle to find compatible guides and accessible events, while volunteers and organizers lack an easy way to connect. Our goal with this project was to create a location-based app that links impaired athletes with nearby guides, makes volunteering simple, and helps organizers manage inclusive events.
                        </p>
                    </div>
                    <ThemeImage 
                        src={"/adaptx/adaptx-mockup.png"}
                        alt={"AdaptX iPhone mockup"}
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                        }}
                    />
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <h4>RESEARCH</h4>
                        <p style={{ fontSize: "0.938rem" }}>
                            To gather more information about the app's potential user base, particularly their accessibility needs and pain points they experienced with other fitness apps they had used before, our team designed a survey containing a mix of open-ended and multiple-choice questions and sent it out to a group of volunteers.
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            This is where we encountered our first challenge – we had sent the survey to an email list of 25 volunteers, and thus were expecting at least 10-15 responses. However, we ultimately closed out our research phase with only three responses.
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            While we were able to gain some valuable insights from our participants' answers, our team chose to continue our research through the beginning of the design phase by conducting user interviews over Zoom. I delegated this task to two of my teammates who were less comfortable designing in Figma to maximize our team's efficiency.
                        </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <h4>DESIGN</h4>
                        <p style={{ fontSize: "0.938rem", textDecoration: "underline" }}>
                            User Personas:
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            Our design process began with creating user personas and journey maps based on the research we had done. This step was crucial in determining the direction we would go with the app and helped us consolidate our work in the prior phase to be more digestible and tangible. Below is a persona our team created for the primary user type, adaptive athletes:
                        </p>
                        <ThemeImage 
                            src={"/adaptx/adaptx-persona.png"}
                            alt={"AdaptX user persona"}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}
                        />
                        <p style={{ fontSize: "0.938rem", textDecoration: "underline" }}>
                            User Flows:
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            We followed up on our work with the personas and journey maps by translating the user stories we had created for each primary user type into detailed user flows. We used the requirements that our client gave us as a baseline for screens and features we needed to have (such as having a search and filter option to locate nearby athletes and organizations). From there, we added items like login, register, and onboarding, as well as key app features like the dashboard and settings screens.
                        </p>
                        <p style={{ fontSize: "0.938rem", textDecoration: "underline" }}>
                            Lo-fi Wireframes:
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            Once we shared our work on the user flows with our project manager and client, we moved on to designing basic wireframes. Our first step during this part of the design phase was to meet up as a team and sketch ideas on a whiteboard for each of the screens present in the user flow graph. By collaborating in person, we were able to give feedback to each other in real time and thus expedited our work significantly.
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            Following this, we translated our hand-drawn designs into Figma as lo-fi wireframes. During this portion, we focused only on copying what we had worked on on the whiteboard, using basic shapes and text boxes to outline where headings, buttons, images, etc. would go. With this done, we were able to determine how each screen should look, which set us up nicely to move on to hi-fi wireframes.
                        </p>
                        <ThemeImage 
                            src={"/adaptx/adaptx-lofi.png"}
                            alt={"AdaptX lofi wireframes"}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}
                        />
                        <p style={{ fontSize: "0.938rem", textDecoration: "underline" }}>
                            Hi-fi Wireframes:
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            The last month of the project was spent between fleshing out our hi-fi wireframes and prototyping. We took an iterative approach with designing the hi-fi screens, initially copying over the lo-fi designs and doing some basic styling (adding color, updating fonts, choosing iconography). From there, I created a library of custom components in Figma to ensure consistent design language across the app. This included buttons, cards, etc., all of which I created multiple variants of for different states (default, pressed, inactive) to make the user experience more tactile and reactive. At the end of the design phase, we had the final hi-fi wireframes you see below.
                        </p>
                        <ThemeImage 
                            src={"/adaptx/adaptx-hifi.png"}
                            alt={"AdaptX hifi wireframes"}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "10px",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }}
                        />
                        <p style={{ fontSize: "0.938rem", textDecoration: "underline" }}>
                            Prototype:
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            As my team and I were designing and improving the hi-fi wireframes, I began prototyping the various screens we finished, starting with basic navigation: tapping the 'Register' button would take you to the Register screen, and tapping the 'Back' button would… well, you get the idea. I set up some interactions between the states of the components I had designed, too, making it so tapping a button would change it to the 'pressed' variant. Finally, I included some basic gestures; swiping right on a nested screen would act as a back button and bring you back to the previous screen you were on, and dragging your finger would pan the map around like you would find on Google Maps.
                        </p>
                        <p style={{ fontSize: "0.938rem", textDecoration: "underline" }}>
                            Testing:
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            We concluded the project by conducting a 30-minute user test over Zoom, in which two of my teammates interviewed a participant – a digital accessibility expert who was completely blind – and walked them through our prototype. We received the following feedback:
                        </p>
                        <ul>
                            <li>Keep all font sizes at least 14 px or more.</li>
                            <li>Flag purely decorative icons so screen readers don't try to read them.</li>
                            <li>Icons are helpful for people with cognitive disabilities to navigate easier.</li>
                            <li>Generally, prototype and wireframes need to be more accessible.</li>
                        </ul>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <h4>PROJECT TAKEAWAYS</h4>
                        <p style={{ fontSize: "0.938rem" }}>
                            This project was an incredibly fun and valuable experience. It gave me my first experience working in a team environment as a UI/UX designer, which brought up a range of different challenges that I got to navigate and solve. It was also the first time I got to play more of a leadership role – being the member of the team with the most prior experience with design and Figma – which brought with it its own challenges and rewards.
                        </p>
                        <p style={{ fontSize: "0.938rem" }}>
                            One of the biggest lessons I took away from this experience is that the degree to which a product is accessible can make or break the user experience. This was the first time I had ever worked on an app whose primary user base consisted of individuals with physical and visual impairments. As such, my perception of "good UI" was challenged deeply throughout the four months my team and I worked on this project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </PageWrapper>
    );
}


