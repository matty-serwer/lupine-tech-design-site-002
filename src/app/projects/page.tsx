import type {Metadata} from "next"

export const metadata: Metadata = {
  title: "Projects | My Website",
  description: "Check out our latest projects and work",
}

interface Project {
  title: string
  description: string
  slug: string
  date: string
}

export default function ProjectsPage() {
  // TODO: Implement MDX loading logic
  const projects: Project[] = [
    {
      title: "Example Project",
      description: "This is a placeholder project description",
      slug: "example-project",
      date: "2025-10-31",
    },
  ]

  return (
    <main>
      <div>
        <h1>Projects</h1>
        <div>
          {projects.map((project) => (
            <div key={project.slug}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>{project.date}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}