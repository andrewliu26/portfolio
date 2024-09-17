export function formatDate(date: string) {
    if (!date.includes('T')) {
        date = `${date}T00:00:00`
    }
    let targetDate = new Date(date)

    return targetDate.toLocaleString('en-us', {
        month: 'short', // Abbreviated month (e.g., "Jul")
        year: 'numeric', // Year (e.g., "2024")
    }).toUpperCase() // Convert to uppercase
}
