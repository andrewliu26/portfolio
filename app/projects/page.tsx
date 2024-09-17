import { ItemList } from "@/app/components/items";

const projects = [
    {
        id: '1',
        title: 'Voyager Mobile App',
        startDate: '2023-06-01',
        endDate: '2023-08-01',
        link: '/',
        current: false,
        description: 'Worked on creating intuitive interfaces for this mobile app using React, Tailwind CSS, and Next.js. Focused on enhancing user experience during onboarding and worked closely with team members to ensure smooth functionality.'
    },
    {
        id: '2',
        title: 'Instasport Mobile App',
        startDate: '2023-10-01',
        endDate: '2023-12-01',
        link: '/',
        current: false,
        description: 'Developed and improved user-friendly mobile interfaces while optimizing the onboarding flow. Collaborated with a cross-functional team to address design and performance challenges using React, Tailwind CSS, and Next.js.'
    },
    {
        id: '3',
        title: 'Whirl Mobile App',
        startDate: '2024-07-01',
        link: '/',
        current: true,
        description: 'Ongoing work on designing and refining user-friendly interfaces for this mobile app. Leveraging React, Tailwind CSS, and Next.js to enhance performance and improve the onboarding experience, while working closely with a diverse team of developers and designers.'
    },
]

export default function ProjectsPage() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
            <div className="my-8">
                <ItemList items={projects}/>
            </div>
        </section>
    )
}