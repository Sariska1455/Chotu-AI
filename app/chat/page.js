"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  SendHorizontal,
  Bot,
  User,
  Sparkles,
  Mail,
  FileText,
  Calendar,
  Search,
  MessageSquare,
  Brain,
  Mic,
  Image,
  Paperclip,
  Smile,
} from "lucide-react"

const exampleQuestions = [
  {
    icon: <Mail className="h-4 w-4" />,
    text: "Write a professional email to my team about the project update",
    category: "Email",
    color: "blue",
  },
  {
    icon: <FileText className="h-4 w-4" />,
    text: "Summarize this article about AI advancements",
    category: "Summary",
    color: "purple",
  },
  {
    icon: <Calendar className="h-4 w-4" />,
    text: "Schedule a team meeting for next week",
    category: "Calendar",
    color: "pink",
  },
  {
    icon: <Search className="h-4 w-4" />,
    text: "Find relevant research papers about machine learning",
    category: "Research",
    color: "indigo",
  },
  {
    icon: <MessageSquare className="h-4 w-4" />,
    text: "Draft a social media post about our new feature",
    category: "Social",
    color: "green",
  },
  {
    icon: <Brain className="h-4 w-4" />,
    text: "Help me brainstorm ideas for the new project",
    category: "Brainstorm",
    color: "orange",
  },
]

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm Chotu-AI, your personal digital twin. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef(null)

  // Animation states
  const [showWelcome, setShowWelcome] = useState(false)
  const [showExamples, setShowExamples] = useState(false)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    // Staggered entrance animations
    setTimeout(() => setShowWelcome(true), 100)
    setTimeout(() => setShowExamples(true), 300)
    setTimeout(() => setShowChat(true), 500)

    // Scroll to bottom when messages change
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, newMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI typing
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm processing your request. Here's a simulated response to demonstrate the interface. In a real implementation, this would be connected to an AI model that provides personalized responses based on your specific query and learned preferences.",
        },
      ])
      setIsLoading(false)
    }, 2000)
  }

  const handleExampleClick = (question) => {
    setInput(question.text)
  }

  return (
    <div className="container py-8 max-w-6xl">
      <div className="grid gap-6">
        {/* Welcome Card */}
        <Card
          className={`bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-background dark:from-blue-500/20 dark:via-purple-500/20 dark:to-background rounded-xl transition-all duration-1000 transform ${
            showWelcome ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-full animate-pulse-slow">
                <Sparkles className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Welcome to Chotu-AI Chat
                </h2>
                <p className="text-muted-foreground">Your AI assistant is ready to help with any task</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example Questions */}
        <Card
          className={`rounded-xl transition-all duration-1000 transform ${
            showExamples ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Try these examples:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {exampleQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-auto p-4 rounded-xl flex items-start gap-3 hover:bg-${question.color}-500/10 border border-${question.color}-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-md`}
                  onClick={() => handleExampleClick(question)}
                >
                  <div className={`p-2 bg-${question.color}-500/10 rounded-lg`}>{question.icon}</div>
                  <div className="text-left">
                    <div className={`text-xs text-${question.color}-500 mb-1`}>{question.category}</div>
                    <div className="text-sm">{question.text}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Messages */}
        <Card
          className={`rounded-xl overflow-hidden border-2 border-blue-500/20 shadow-lg transition-all duration-1000 transform ${
            showChat ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } hover:shadow-xl hover:shadow-blue-500/10`}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-medium">Chotu-AI Assistant</span>
            </div>
          </div>

          <ScrollArea className="h-[500px] p-6" ref={scrollAreaRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 mb-6 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                } animate-in fade-in-50 slide-in-from-bottom-5 duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`p-2 rounded-xl ${
                    message.role === "user" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "bg-muted"
                  }`}
                >
                  {message.role === "user" ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                </div>
                <div
                  className={`rounded-xl p-4 max-w-[80%] ${
                    message.role === "user" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start gap-4 mb-6 animate-in fade-in-50 duration-300">
                <div className="p-2 rounded-xl bg-muted">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="rounded-xl p-4 bg-muted">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"></div>
                    <div
                      className="h-3 w-3 rounded-full bg-purple-500 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="h-3 w-3 rounded-full bg-pink-500 animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>

          {/* Input Form */}
          <CardContent className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                  className="pr-32 rounded-full h-12 pl-4 transition-all duration-300 focus:ring-2 focus:ring-blue-500/50"
                />
                <div className="absolute right-1 top-1 flex items-center gap-1">
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="h-10 w-10 rounded-full transition-all duration-300 hover:bg-blue-500/10"
                  >
                    <Paperclip className="h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="h-10 w-10 rounded-full transition-all duration-300 hover:bg-blue-500/10"
                  >
                    <Mic className="h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading}
                    className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20"
                  >
                    <SendHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground px-2">
                <div>Chotu-AI learns from your interactions to better assist you</div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 transition-all duration-300 hover:bg-blue-500/10"
                  >
                    <Image className="h-4 w-4 mr-1" /> Upload
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 transition-all duration-300 hover:bg-blue-500/10"
                  >
                    <Smile className="h-4 w-4 mr-1" /> Emoji
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

