"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      className="relative inline-flex items-center justify-center w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-white shadow-md"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{ x: theme === "light" ? -10 : 10 }}
      />
      <Sun className="absolute left-1 w-4 h-4 text-yellow-500" />
      <Moon className="absolute right-1 w-4 h-4 text-blue-500" />
    </motion.button>
  )
}

