export const fetchHygraphQuery = async (query : string) => {
    const data = await fetch(process.env.HYGRAPH_URL!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}` 
        },
        body: JSON.stringify({ query }),
        next: {
            revalidate: 60 * 60 * 24 // 1 dia...
        }
    })
    const result = await data.json()
    return result.data
}