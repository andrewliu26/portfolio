"use client";

import { Typewriter } from 'react-simple-typewriter';
import PixelCat from "@/app/assets/cat/cat";

export default function Page() {
  return (
      <section>
          <div className="flex flex-row justify-start">
              <h1 className="mb-8 text-2xl font-semibold tracking-tight">
                  Andrew Liu
              </h1>
          </div>
          <div className={"mb-8"}>
              <Typewriter
                  words={['Software Developer', 'Software Engineer', 'UX/UI Designer']}
                  loop
                  cursor
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
              />
          </div>
          <p className="mb-4 text-neutral-600 dark:text-neutral-300 text-justify">
              {`I’m a student at Boston University and a frontend developer with a focus on building efficient 
          and visually appealing web and mobile applications. I’ve worked with technologies like 
          Next.js, Tailwind CSS, and React Native on projects ranging from multi-step 
          onboarding processes to interactive portfolios. I’m skilled in organizing code, 
          optimizing components, and creating seamless user interfaces. I’m always eager 
          to learn and push the boundaries of what’s possible in web development.`}
          </p>
          <div className="mt-10 mb-8">
              <PixelCat/>
          </div>
      </section>
  )
}