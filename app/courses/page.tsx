import CourseCard from "@/components/CourseCard"

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
  {
    id: "3",
    title: "Python for Beginners",
    description: "Start your Python journey",
    instructor: "Bob Johnson",
    price: 39.99,
  },
  {
    id: "4",
    title: "Machine Learning Fundamentals",
    description: "Explore ML concepts",
    instructor: "Alice Brown",
    price: 99.99,
  },
  {
    id: "5",
    title: "Web Design Principles",
    description: "Learn effective web design",
    instructor: "Eva Green",
    price: 59.99,
  },
  {
    id: "6",
    title: "Data Structures and Algorithms",
    description: "Master DSA concepts",
    instructor: "Mike Wilson",
    price: 89.99,
  },
  {
    id: "7",
    title: "iOS App Development",
    description: "Build iOS apps with Swift",
    instructor: "Sarah Lee",
    price: 79.99,
  },
  {
    id: "8",
    title: "Blockchain Basics",
    description: "Understand blockchain technology",
    instructor: "Tom Harris",
    price: 69.99,
  },
  {
    id: "9",
    title: "Digital Marketing Strategies",
    description: "Learn effective marketing",
    instructor: "Emily Clark",
    price: 54.99,
  },
  {
    id: "10",
    title: "Cloud Computing Essentials",
    description: "Master cloud technologies",
    instructor: "David White",
    price: 84.99,
  },
  {
    id: "11",
    title: "Cybersecurity Fundamentals",
    description: "Protect against cyber threats",
    instructor: "Lisa Black",
    price: 74.99,
  },
  {
    id: "12",
    title: "UX/UI Design Principles",
    description: "Create user-friendly designs",
    instructor: "Chris Green",
    price: 64.99,
  },
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}

