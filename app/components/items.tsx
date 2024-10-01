import { formatDate } from '@/app/utils'

interface Item {
    id: string
    title: string
    startDate: string
    endDate?: string
    present?: boolean
    employer?: string
    description: string
    github_link?: string
    figma_link?: string
    web_link?: string
    tags?: string[]
}

interface ItemListProps {
    items: Item[]
}

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
                    <div key={item.id} className="flex flex-col space-y-1 mb-10 rounded-lg hover:scale-[102%] transition-all">
                        <div className="w-full flex flex-col md:flex-row">
                            <p className="font-medium text-neutral-600 dark:text-neutral-400 leading-6 text-xs tabular-nums"
                               style={{ minWidth: '140px' }}>
                                {formatDate(item.startDate)} – {item.present ? "PRESENT" : formatDate(item.endDate!)}
                            </p>
                            <div className="flex-1 md:pl-6">
                                <p className="font-medium text-neutral-900 dark:text-neutral-100 leading-6 mb-2">
                                    {item.title} {item.employer ? " • " + item.employer : ""}
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-300 text-justify mb-4">
                                    {item.description}
                                </p>

                                {/* Render tags below the description */}
                                {item.tags && item.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="bg-neutral-200 text-neutral-900 px-[0.6rem] py-1 rounded-xl text-xs">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
