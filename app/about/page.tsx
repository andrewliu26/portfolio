export default function AboutPage() {
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
            <h2 className="mb-8 text-lg font-medium tracking-tight">
                Tech Stack
            </h2>
            <div className="flex flex-wrap space-x-4 my-8">
                <i className="devicon-figma-plain text-2xl"></i>
                <i className="devicon-react-original text-2xl"></i>
                <i className="devicon-nextjs-original text-2xl"></i>
                <i className="devicon-javascript-plain text-2xl"></i>
                <i className="devicon-typescript-plain text-2xl"></i>
                <i className="devicon-tailwindcss-plain text-2xl"></i>
                <i className="devicon-java-plain text-2xl"></i>
                <i className="devicon-python-plain text-2xl"></i>
                <i className="devicon-git-plain text-2xl"></i>
                <i className="devicon-github-original text-2xl"></i>
            </div>
        </section>
    )
}
