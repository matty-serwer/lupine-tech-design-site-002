import type {Metadata} from "next"

export const metadata: Metadata = {
  title: "About | Lupine Tech Design",
  description: "Learn more about us and our mission",
}

export default function AboutPage() {
  return (
    <main>
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to our website. This is a placeholder for the about page content.
        </p>
      </div>
    </main>
  )
}