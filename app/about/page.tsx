export default function AboutPage() {
    const techStack = [
        { iconClass: "devicon-figma-plain", proficiency: "80%", current: false },
        { iconClass: "devicon-react-original", proficiency: "90%", current: true },
        { iconClass: "devicon-nextjs-original", proficiency: "85%", current: true },
        { iconClass: "devicon-javascript-plain", proficiency: "95%", current: true },
        { iconClass: "devicon-typescript-plain", proficiency: "90%", current: true },
        { iconClass: "devicon-tailwindcss-plain", proficiency: "85%", current: true },
        { iconClass: "devicon-java-plain", proficiency: "70%", current: false },
        { iconClass: "devicon-python-plain", proficiency: "75%", current: false },
        { iconClass: "devicon-git-plain", proficiency: "80%", current: true },
        { iconClass: "devicon-github-original", proficiency: "85%", current: true }
    ];

    // Sort the tech stack array by proficiency in descending order
    const sortedTechStack = techStack.sort((a, b) => {
        return parseInt(b.proficiency) - parseInt(a.proficiency);
    });

    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                About Me
            </h1>
            <p className="mb-8 text-neutral-600 dark:text-neutral-300 text-justify">
                {`I’m a student and frontend developer with a focus on building efficient 
          and visually appealing web applications. I’ve worked with technologies like 
          Next.js, Tailwind CSS, and React Native on projects ranging from multi-step 
          onboarding processes to interactive portfolios. I’m skilled in organizing code, 
          optimizing components, and creating seamless user interfaces. I’m always eager 
          to learn and push the boundaries of what’s possible in web development.`}
            </p>
            <div className="flex flex-row align-middle justify-between">
                <h2 className="text-lg font-medium tracking-tight">
                    Tech Stack
                </h2>
                <div className="flex flex-row items-center justify-end space-x-2 mb-8">
                    <div className="bg-blue-600 h-2 w-2 rounded-full"/>
                    <p className="leading-6 text-sm text-neutral-500"> Currently working on</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {sortedTechStack.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <i className={`${tech.iconClass} text-2xl`}></i>
                        <div className="w-full bg-neutral-200 rounded-full h-2 dark:bg-neutral-700">
                            <div
                                className={`h-2 rounded-full ${tech.current ? 'bg-blue-600' : 'bg-neutral-500'}`}
                                style={{width: tech.proficiency}}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
