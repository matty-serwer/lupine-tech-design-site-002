import type {Metadata} from "next"

export const metadata: Metadata = {
  title: "Vet Sweet | Lupine Tech Design",
  description: "Vet Sweet - Coming Soon",
}

export default function VetSweetPage() {
  return (
    <main>
      <div>
        <h1>Vet Sweet</h1>
        <p>Welcome to the Vet Sweet Page</p>
        <section>
          <h2>Features</h2>
          <p>This application is currently in development.</p>
        </section>
        <section>
          <h2>Documentation</h2>
          <p>Documentation and usage instructions will be available soon.</p>
        </section>
      </div>
    </main>
  )
}
