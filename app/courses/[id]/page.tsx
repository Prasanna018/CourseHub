import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

const courses = [
  {
    id: "1",
    title: "Introduction to React",
    description: "Learn the basics of React",
    instructor: "John Doe",
    price: 49.99,
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    description: "Master JavaScript concepts",
    instructor: "Jane Smith",
    price: 79.99,
  },
  // ... (add all other courses here)
]

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id)

  if (!course) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-primary">{course.title}</h1>
      <p className="text-lg mb-4 text-muted-foreground">{course.description}</p>
      <p className="text-md mb-4">
        Instructor: <span className="font-semibold">{course.instructor}</span>
      </p>
      <p className="text-xl font-bold mb-6">Price: ${course.price}</p>
      <Button size="lg">Enroll Now</Button>
    </div>
  )
}

