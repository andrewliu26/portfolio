import { ItemList } from "@/app/components/items";

const projects = [
    {
        id: '1',
        title: 'Voyager Mobile App',
        startDate: '2023-06',
        endDate: '2023-08',
        link: '/',
        present: false,
        description: 'Worked on creating intuitive interfaces for this mobile app using React, Tailwind CSS, and Next.js. Focused on enhancing user experience during onboarding and worked closely with team members to ensure smooth functionality.',
        github_link: 'https://github.com/andrewliu26/Voyager',
        figma_link: 'https://www.figma.com/design/rKVSw2WUCjljTbcPHD2WTN/Voyager-UI?m=auto&t=mS2Pmk1CErHoEg6z-6',
        tags: ['JavaScript', 'React Native', 'Node.js'],
    },
    {
        id: '2',
        title: 'Instasport Mobile App',
        startDate: '2023-10',
        endDate: '2023-12',
        link: '/',
        present: false,
        description: 'Developed and improved user-friendly mobile interfaces while optimizing the onboarding flow. Collaborated with a cross-functional team to address design and performance challenges using React, Tailwind CSS, and Next.js.',
        github_link: 'https://github.com/mustafataibah/InstaSport',
        figma_link: 'https://www.figma.com/design/HALIHpPKsoZahVtXkxJn14/InstaSportLoFi',
        tags: ['Kotlin', 'Jetpack Compose', 'XML'],
    },
    {
        id: '3',
        title: 'Whirl Mobile App',
        startDate: '2024-07',
        link: '/',
        present: true,
        description: 'Ongoing work on designing and refining user-friendly interfaces for this mobile app. Leveraging React, Tailwind CSS, and Next.js to enhance performance and improve the onboarding experience, while working closely with a diverse team of developers and designers.',
        tags: ['TypeScript', 'React Native', 'Node.js'],
    },
    /*
    {
        id: '4',
        title: 'MacOS Clipboard App',
        startDate: '2024-09',
        link: '/',
        present: true,
        description: 'Ongoing work on designing and refining user-friendly interfaces for this mobile app. Leveraging React, Tailwind CSS, and Next.js to enhance performance and improve the onboarding experience, while working closely with a diverse team of developers and designers.',
        tags: ['XCode', 'Swift'],
    },
    */
    {
        id: '5',
        title: 'Predictify',
        startDate: '2024-09',
        link: '/',
        present: true,
        description: 'Web app that uses machine learning to recommend songs based on Spotify listening history. By clustering users with similar music tastes and applying collaborative and content-based filtering, the app provides personalized song suggestions. The system\'s performance is evaluated with metrics like MAP and RMSE, and results are displayed through an interactive dashboard.',
        tags: ['Angular', 'TypeScript', 'CSS', 'Python', 'Matplotlib'],
    },
]

export default function ProjectsPage() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tight">
                Projects
            </h1>
            <div className="my-8">
                <ItemList items={projects}/>
            </div>
        </section>
    )
}