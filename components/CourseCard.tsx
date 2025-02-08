"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface CourseCardProps {
  id: string
  title: string
  description: string
  instructor: string
  price: number
}

export default function CourseCard({ id, title, description, instructor, price }: CourseCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="flex flex-col h-full overflow-hidden">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{description}</p>
          <p className="mt-2 text-sm text-primary">Instructor: {instructor}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <span className="text-lg font-bold">${price}</span>
          <Link href={`/courses/${id}`}>
            <Button variant="default">Learn More</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

