import { ItemList } from "@/app/components/items";

const experience = [
    {
        id: '1',
        title: 'Frontend Engineer Intern',
        startDate: '2024-05-01',
        endDate: '2024-08-01',
        link: '/',
        current: false,
        employer: 'BU Spark!',
        description: 'Developed the mobile interface of the CoSphere app using React Native with TypeScript, optimizing the development process and collaborating with cross-functional teams to streamline workflows and ensure timely task completion.'
    },
]

export default function ExperiencePage() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tight">
                Work Experience
            </h1>
            <div className="my-8">
                <ItemList items={experience} />
            </div>
        </section>
    )
}
