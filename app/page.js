async function getData() {
  const res = await fetch("https://ordep.site/api/posts", { cache: "no-store" })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  const { docs } = data

  return (
    <main>
      {docs.map((i) => (
        <h1 key={i.id}>
          {i.title} por {i.author.name}
        </h1>
      ))}
    </main>
  )
}
