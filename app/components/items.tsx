import { formatDate } from '@/app/utils'

interface Item {
    id: string
    title: string
    startDate: string
    endDate?: string
    current?: boolean
    employer?: string
    description: string
    github_link?: string
    figma_link?: string
    web_link?: string
}

interface ItemListProps {
    items: Item[]
}

{/*
function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    )
}
*/}

export function ItemList({ items }: ItemListProps) {
    return (
        <div>
            {items
                .sort((a: Item, b: Item) => {
                    if (new Date(a.startDate) > new Date(b.startDate)) {
                        return -1
                    }
                    return 1
                })
                .map((item: Item) => (
                    <div key={item.id} className="flex flex-col space-y-1 mb-8 rounded-lg hover:scale-[102%] transition-all">
                        <div className="w-full flex flex-col md:flex-row">
                            <p className="font-medium text-neutral-600 dark:text-neutral-400 leading-6 text-xs tabular-nums"
                               style={{ minWidth: '140px' }}>
                                {formatDate(item.startDate)} – {item.current ? "CURRENT" : formatDate(item.endDate!)}
                            </p>
                            <div className="flex-1 md:pl-6">
                                <p className="font-medium text-neutral-900 dark:text-neutral-100 leading-6 mb-2">
                                    {item.title} {item.employer ? " • " + item.employer : ""}
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-300 text-justify">
                                    {item.description}
                                </p>
                                {/* Render links below the description */}
                                <div className="flex space-x-4 mt-4">
                                    {item.github_link && (
                                        <a
                                            href={item.github_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-700"
                                        >
                                            github repo
                                        </a>
                                    )}
                                    {item.figma_link && (
                                        <a
                                            href={item.figma_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-700"
                                        >
                                            figma
                                        </a>
                                    )}
                                    {item.web_link && (
                                        <a
                                            href={item.web_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-700"
                                        >
                                            more
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
