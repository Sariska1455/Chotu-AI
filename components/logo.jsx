import { Brain, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Logo({ size = "default" }) {
  const sizeClasses = {
    small: "h-8",
    default: "h-10",
    large: "h-14",
  }

  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div
        className={`relative ${sizeClasses[size]} aspect-square rounded-lg bg-gradient-to-r from-blue-400 via-primary to-purple-400 flex items-center justify-center`}
      >
        <div className="absolute inset-0 rounded-lg opacity-80 bg-gradient-to-br from-blue-400/80 to-purple-400/80"></div>
        <div className="relative flex items-center justify-center">
          <Brain className="text-white h-5 w-5" />
          <Sparkles className="text-white h-3 w-3 absolute -top-1 -right-1" />
        </div>
      </div>
      <span className="font-bold text-xl bg-gradient-to-r from-blue-400 via-primary to-purple-400 bg-clip-text text-transparent">
        Chotu-AI
      </span>
    </Link>
  )
}

