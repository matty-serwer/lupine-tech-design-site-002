import type {Metadata} from "next"

export const metadata: Metadata = {
  title: "About | My Website",
  description: "Learn more about us and our mission",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl">
          Welcome to our website. This is a placeholder for the about page content.
        </p>
      </div>
    </main>
  )
}