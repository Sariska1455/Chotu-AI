import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Calendar,
  Search,
  MessageSquare,
  FileText,
  Star,
  Sparkles,
  Brain,
  Zap,
  CheckCircle2,
  ArrowRight,
  Bot,
  Shield,
  Lightbulb,
  User,
} from "lucide-react"

const features = [
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Smart Email Replies",
    description: "AI-generated responses matching your tone and style. Never worry about email writing again.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Document Summarization",
    description: "Get concise summaries of lengthy documents in seconds. Save hours of reading time.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Calendar Management",
    description: "Let AI handle your scheduling. Smart reminders and conflict resolution included.",
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Research Assistant",
    description: "Find relevant content quickly. AI-powered search and filtering at your fingertips.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Social Media Management",
    description: "Automated responses and content filtering for all your social platforms.",
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "Learning & Adaptation",
    description: "Your AI twin learns from your behavior to provide better assistance over time.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Chotu-AI has transformed how I handle my daily tasks. The email replies are spot-on and save me hours every day!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "DevStudio",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The research assistant feature is incredible. It helps me find relevant information quickly and efficiently.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "CreativeHub",
    image: "/placeholder.svg?height=100&width=100",
    content: "Calendar management has never been easier. It's like having a personal assistant 24/7!",
    rating: 5,
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out Chotu-AI",
    features: [
      "Basic email responses",
      "Simple document summaries",
      "Calendar reminders",
      "5 AI conversations per day",
    ],
  },
  {
    name: "Pro",
    price: "$19/month",
    description: "Ideal for professionals",
    features: [
      "Advanced email management",
      "Unlimited summaries",
      "Smart calendar optimization",
      "Unlimited AI conversations",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    features: ["Custom AI training", "Team collaboration", "Advanced analytics", "API access", "Dedicated support"],
  },
]

const faqs = [
  {
    question: "How does Chotu-AI learn my style?",
    answer:
      "Chotu-AI analyzes your writing patterns, preferences, and behaviors to adapt its responses and actions to match your style perfectly.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes! We use enterprise-grade encryption and follow strict privacy protocols to ensure your data is always protected.",
  },
  {
    question: "Can I use Chotu-AI on multiple devices?",
    answer: "Chotu-AI syncs across all your devices seamlessly, providing a consistent experience everywhere.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 customer support through chat, email, and phone for our Pro and Enterprise users.",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Screen with Centered Content */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-mesh-gradient">
        {/* Particle effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle bg-primary"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                opacity: Math.random() * 0.3,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            ></div>
          ))}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-delay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 animate-in fade-in-50 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground animate-pulse-slow">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Productivity</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-primary to-purple-400 bg-clip-text text-transparent animate-gradient">
              Your Smart AI Digital Twin
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Boost your productivity with an AI assistant that learns and adapts to your style
            </p>

            <Link href="/auth">
              <Button
                size="lg"
                className="text-lg px-8 rounded-full bg-soft-gradient hover:shadow-soft-lg transition-all duration-500 hover:scale-105"
              >
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-soft-gradient-light">
        <div className="container px-4">
          <div className="text-center mb-16 animate-in fade-in-50 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-soft-gradient animate-gradient">
              How Chotu-AI Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your personal AI assistant that learns and adapts to your unique style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Bot className="h-10 w-10 text-primary" />,
                title: "1. Connect Your Accounts",
                description: "Link your email, calendar, and other productivity tools to Chotu-AI.",
              },
              {
                icon: <Brain className="h-10 w-10 text-primary" />,
                title: "2. AI Learns Your Style",
                description: "Chotu-AI analyzes your patterns and preferences to personalize its assistance.",
              },
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "3. Automate & Optimize",
                description: "Let Chotu-AI handle routine tasks while you focus on what matters most.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center animate-in fade-in-50 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-6 glass-effect rounded-2xl shadow-soft mb-6 transform transition-all duration-500 hover:scale-110 group">
                  <div className="transition-transform duration-500 group-hover:rotate-12">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16 animate-in fade-in-50 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-soft-gradient animate-gradient">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to boost your productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group card-hover-effect border-border hover:border-primary/30 animate-in fade-in-50 duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-soft-gradient-light">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in slide-in-from-left duration-1000">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-soft-gradient animate-gradient">
                Why Choose Chotu-AI?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our AI assistant is designed to make your life easier and more productive.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="h-6 w-6 text-primary" />,
                    title: "Privacy-Focused",
                    description: "Your data is encrypted and never shared with third parties.",
                  },
                  {
                    icon: <Zap className="h-6 w-6 text-primary" />,
                    title: "Lightning Fast",
                    description: "Get instant responses and automation with our optimized AI.",
                  },
                  {
                    icon: <Lightbulb className="h-6 w-6 text-primary" />,
                    title: "Continuous Learning",
                    description: "Chotu-AI gets smarter the more you use it, adapting to your needs.",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex gap-4 animate-in fade-in-50 duration-1000 transform transition-all hover:translate-x-1"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="p-3 glass-effect rounded-lg shadow-soft">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-in slide-in-from-right duration-1000">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float-delay"></div>

              {/* Chat bubbles */}
              <div className="relative z-10 glass-effect rounded-2xl p-6 shadow-soft-lg transform transition-all duration-500 hover:scale-[1.02]">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3 animate-in fade-in-50 duration-500">
                    <div className="p-2 bg-soft-gradient rounded-full">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-background p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                      <p className="text-sm">Hello! I'm Chotu-AI. How can I help you today?</p>
                    </div>
                  </div>

                  <div
                    className="flex gap-3 justify-end animate-in fade-in-50 duration-500"
                    style={{ animationDelay: "300ms" }}
                  >
                    <div className="bg-soft-gradient p-3 rounded-2xl rounded-tr-none max-w-[80%]">
                      <p className="text-sm text-white">Can you draft an email to my team about the project update?</p>
                    </div>
                    <div className="p-2 bg-muted rounded-full">
                      <User className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex gap-3 animate-in fade-in-50 duration-500" style={{ animationDelay: "600ms" }}>
                    <div className="p-2 bg-soft-gradient rounded-full">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-background p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                      <p className="text-sm">I've drafted an email in your style. Here it is:</p>
                      <div className="mt-2 p-2 bg-card rounded-lg text-xs">
                        <p className="font-semibold text-primary">Subject: Project Update - Week 12</p>
                        <p className="mt-1">Hi Team,</p>
                        <p className="mt-1">I wanted to share our progress on the project...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16 animate-in fade-in-50 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-soft-gradient animate-gradient">Loved by Users</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">See what others are saying about Chotu-AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="card-hover-effect border-border hover:border-primary/30 animate-in fade-in-50 duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="rounded-full w-16 h-16 border-2 border-primary/20"
                    />
                    <div>
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                      <CardDescription>
                        {testimonial.role} at {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-soft-gradient-light">
        <div className="container px-4">
          <div className="text-center mb-16 animate-in fade-in-50 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-soft-gradient animate-gradient">Simple Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Choose the plan that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`hover:shadow-soft-lg transition-all duration-500 animate-in fade-in-50 duration-1000 ${
                  plan.popular
                    ? "border-primary border-2 scale-105 hover:scale-110"
                    : "border-border hover:scale-[1.02]"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="space-y-4">
                  {plan.popular && (
                    <div className="px-4 py-1 bg-soft-gradient text-white rounded-full w-fit text-sm">Most Popular</div>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div>
                    <span className="text-4xl font-bold text-soft-gradient">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-full mt-6 bg-soft-gradient hover:shadow-soft-lg transition-all duration-300">
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container px-4">
          <div className="text-center mb-16 animate-in fade-in-50 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-soft-gradient animate-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Got questions? We've got answers.</p>
          </div>

          <div className="grid gap-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="hover:shadow-soft transition-all duration-500 border-border hover:border-primary/30 animate-in fade-in-50 duration-1000 hover:scale-[1.01]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-soft-gradient-light">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto animate-in fade-in-50 duration-1000">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-soft-gradient animate-gradient">
              Ready to Transform Your Productivity?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who are already experiencing the power of AI-assisted productivity.
            </p>
            <Link href="/auth">
              <Button
                size="lg"
                className="text-lg px-8 rounded-full bg-soft-gradient hover:shadow-soft-lg transition-all duration-500 hover:scale-105 animate-pulse-slow"
              >
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

