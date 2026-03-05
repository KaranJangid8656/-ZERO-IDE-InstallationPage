const categories = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Monaco Editor", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Socket.IO"],
  },
  {
    title: "Database",
    items: ["MongoDB"],
  },
  {
    title: "Real-Time Sync",
    items: ["Yjs CRDT Engine"],
  },
  {
    title: "Scaling",
    items: ["Redis Pub/Sub"],
  },
]

export function TechStack() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
          Key Technologies
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          The stack powering -Zero IDE.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-foreground font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
