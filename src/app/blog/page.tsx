import type {Metadata} from "next"

export const metadata: Metadata = {
  title: "Blog | Lupine Tech Design",
  description: "Read our latest blog posts and updates",
}

export default function BlogPage() {
  return (
    <main>
      <div>
        <h1>Blog</h1>
        <p>
          Welcome to our blog. This is a placeholder for the blog page content.
        </p>
      </div>
    </main>
  )
}