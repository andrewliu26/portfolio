import { ItemList } from "@/app/components/items";

const experience = [
    {
        id: '1',
        title: 'Frontend Engineer Intern',
        startDate: '2024-05-01',
        endDate: '2024-08-01',
        link: '/',
        current: false,
        description: 'Developed user-friendly interfaces using React, Tailwind CSS, and Next.js. Improved performance of the onboarding process and collaborated on cross-functional teams.' // Added description
    },
]

export default function ExperiencePage() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Work Experience
            </h1>
            <div className="my-8">
                <ItemList items={experience} />
            </div>
        </section>
    )
}
