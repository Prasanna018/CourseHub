"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
            <Link href="/" className="text-2xl font-bold text-primary">
              CourseHub
            </Link>
          </motion.div>
          <div className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/courses" className="text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2">
                Courses
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2"
              >
                Dashboard
              </Link>
            </motion.div>
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/signin">
                <Button variant="default" className="ml-4">
                  Sign In
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

