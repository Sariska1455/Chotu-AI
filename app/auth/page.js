"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { User, Mail, Lock, Briefcase, Globe, Phone } from "lucide-react"
import Logo from "@/components/logo"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("login")
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Success!",
        description: "Welcome to Chotu-AI",
      })
      router.push("/chat")
    }, 1500)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-mesh-gradient p-4">
      <Card className="w-full max-w-lg shadow-lg border-primary/20">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <Logo size="large" />
          </div>
          <CardTitle className="text-3xl text-soft-gradient">Welcome to Chotu-AI</CardTitle>
          <CardDescription className="text-lg">Your personal AI assistant awaits</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <Tabs defaultValue="login" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 rounded-full h-12 p-1 bg-primary/10">
              <TabsTrigger
                value="login"
                className={`rounded-full text-lg transition-all duration-300 ${
                  activeTab === "login" ? "bg-soft-gradient text-white shadow-sm" : "text-foreground hover:bg-primary/5"
                }`}
              >
                Login...
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className={`rounded-full text-lg transition-all duration-300 ${
                  activeTab === "register"
                    ? "bg-soft-gradient text-white shadow-sm"
                    : "text-foreground hover:bg-primary/5"
                }`}
              >
                Register
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Email"
                      type="email"
                      className="pl-10 rounded-full h-12 border-primary/20"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Password"
                      type="password"
                      className="pl-10 rounded-full h-12 border-primary/20"
                      required
                    />
                  </div>
                </div>

                <Button className="w-full rounded-full h-12 text-lg bg-soft-gradient" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>Logging in...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="First Name" className="pl-10 rounded-full h-12 border-primary/20" required />
                  </div>

                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Last Name" className="pl-10 rounded-full h-12 border-primary/20" required />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Email"
                    type="email"
                    className="pl-10 rounded-full h-12 border-primary/20"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="pl-10 rounded-full h-12 border-primary/20"
                    required
                  />
                </div>

                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Company (Optional)" className="pl-10 rounded-full h-12 border-primary/20" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Country" className="pl-10 rounded-full h-12 border-primary/20" required />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Phone"
                      type="tel"
                      className="pl-10 rounded-full h-12 border-primary/20"
                      required
                    />
                  </div>
                </div>

                <Button className="w-full rounded-full h-12 text-lg bg-soft-gradient" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>Creating account...</span>
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

