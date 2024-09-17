import Link from 'next/link'
import { formatDate } from '@/app/utils'

interface Item {
    id: string
    title: string
    startDate: string
    endDate?: string
    link: string
    current?: boolean
    description: string
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
                    <Link
                        key={item.id}
                        className="flex flex-col space-y-1 mb-8"
                        href={item.link}
                    >
                        <div className="w-full flex flex-col md:flex-row">
                            <p className="font-medium text-neutral-600 dark:text-neutral-400 leading-6 w-32 md:w-40 text-xs tabular-nums">
                                {formatDate(item.startDate)} – {item.current ? 'CURRENT' : formatDate(item.endDate!)}
                            </p>
                            <div className="flex-1 md:pl-2">
                                <p className="font-medium text-neutral-900 dark:text-neutral-100 leading-6 tracking-tight mb-2">
                                    {item.title}
                                </p>
                                <p className="text-neutral-500 dark:text-neutral-300 text-justify">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    )
}
