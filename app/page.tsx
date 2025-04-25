"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
  Droplet,
  Zap,
  Snowflake,
  BatteryCharging,
  Star,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollAnimation } from "@/components/scroll-animation"
import ScrollAnimations from "./scroll-animations"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-6 md:px-16 lg:px-[100px] flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="h-6 w-6 text-[#4C9EEB]" />
            <span className="font-bold text-xl">EverCool</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-[#4C9EEB] transition-colors">
              Features
            </Link>
            <Link href="#product-selector" className="text-sm font-medium hover:text-[#4C9EEB] transition-colors">
              Shop
            </Link>
            <Link href="#reviews" className="text-sm font-medium hover:text-[#4C9EEB] transition-colors">
              Reviews
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-[#4C9EEB] transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-[#4C9EEB] hover:bg-[#4C9EEB]/90">Buy Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <ScrollAnimations />
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-[#F7FAFC] to-[#EDF2F7] dark:from-gray-900 dark:to-gray-800">
          <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-[#38C6A2] text-white mb-2">New Release</Badge>
                  <ScrollAnimation>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Reminds you to hydrate. Because health is more than hustle.
                    </h1>
                  </ScrollAnimation>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Stay energized, focused, and refreshed — with EverCool's smart hydration alerts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#4C9EEB] hover:bg-[#4C9EEB]/90 text-white" asChild>
                    <a href="#product-selector">Choose Your Color</a>
                  </Button>
                </div>
                <p className="text-sm text-red-500 font-medium">Limited drop — Only 500 bottles in this color.</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[350px] md:h-[550px] md:w-[450px] lg:h-[600px] lg:w-[500px] transform rotate-[-5deg] transition-all duration-500 hover:rotate-0 hover:scale-105 overflow-visible">
                  <Image
                    src="/images/hero-bottle.png"
                    alt="EverCool Bottle"
                    width={500}
                    height={600}
                    className="object-contain mix-blend-multiply dark:mix-blend-normal"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#4C9EEB]/10 dark:bg-[#4C9EEB]/20 rounded-full blur-3xl -z-10 bottle-glow"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Benefit Section */}
        <section className="py-24 bg-white dark:bg-gray-950">
          <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex justify-center">
                <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Person ignoring water"
                    width={500}
                    height={400}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Life moves fast — and water isn't always top of mind.
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Dehydration can lead to fatigue, headaches, and decreased cognitive performance. Yet most of us
                    forget to drink enough water throughout the day.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#4C9EEB]">The Solution</h3>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    EverCool tracks your hydration rhythm and gives you gentle reminders before burnout hits. Our smart
                    bottle learns your habits and helps you stay consistently hydrated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section id="features" className="py-24 bg-[#F7FAFC] dark:bg-gray-900">
          <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <ScrollAnimation>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Smart Features for Smarter Hydration
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    EverCool combines cutting-edge technology with elegant design to keep you hydrated throughout your
                    day.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
              <ScrollAnimation delay={100}>
                <Card className="flex flex-col items-center p-6 text-center shadow-sm transition-all duration-200 hover:shadow-lg hover:translate-y-[-5px] dark:bg-gray-800 dark:border-gray-700">
                  <Droplet className="h-12 w-12 text-[#4C9EEB] mb-4" />
                  <h3 className="text-xl font-bold">Hydration Tracker</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Built-in sensors monitor your water intake and sync with our app.
                  </p>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation delay={200}>
                <Card className="flex flex-col items-center p-6 text-center shadow-sm transition-all duration-200 hover:shadow-lg hover:translate-y-[-5px] dark:bg-gray-800 dark:border-gray-700">
                  <Zap className="h-12 w-12 text-[#38C6A2] mb-4" />
                  <h3 className="text-xl font-bold">Glow Alerts</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Customizable LED reminders that gently prompt you to hydrate.
                  </p>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation delay={300}>
                <Card className="flex flex-col items-center p-6 text-center shadow-sm transition-all duration-200 hover:shadow-lg hover:translate-y-[-5px] dark:bg-gray-800 dark:border-gray-700">
                  <Snowflake className="h-12 w-12 text-[#4C9EEB] mb-4" />
                  <h3 className="text-xl font-bold">24-Hour Cold</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Double-wall vacuum insulation keeps drinks cold for a full day.
                  </p>
                </Card>
              </ScrollAnimation>
              <ScrollAnimation delay={400}>
                <Card className="flex flex-col items-center p-6 text-center shadow-sm transition-all duration-200 hover:shadow-lg hover:translate-y-[-5px] dark:bg-gray-800 dark:border-gray-700">
                  <BatteryCharging className="h-12 w-12 text-[#38C6A2] mb-4" />
                  <h3 className="text-xl font-bold">USB-C Charging</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Fast charging technology with 30-day battery life.
                  </p>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Product Demo Section */}
        <section className="py-24 bg-white dark:bg-gray-950">
          <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See EverCool in Action</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore every angle of our smart water bottle design.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-[#F7FAFC] dark:bg-gray-800 flex items-center justify-center group">
                <div className="relative h-[300px] w-[200px] max-h-full transition-all duration-500 group-hover:scale-110">
                  <Image
                    src="/placeholder.svg?height=300&width=200"
                    alt="EverCool Bottle 360 View"
                    width={200}
                    height={300}
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-[#4C9EEB]/10 rounded-full blur-3xl -z-10"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" className="bg-white/80 dark:bg-black/50">
                    View 360°
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                Tap and drag to rotate the bottle and explore all features
              </p>
            </div>
          </div>
        </section>

        {/* Color & Purchase Selector */}
        <section id="product-selector" className="py-24 bg-[#F7FAFC] dark:bg-gray-900">
          <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Choose Your EverCool</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Select your favorite color and customize your bottle.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ProductSelector />
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section id="reviews" className="py-24 bg-white dark:bg-gray-950">
          <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <div className="flex items-center justify-center gap-0.5 mt-2">
                  <Star className="h-5 w-5 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-5 w-5 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-5 w-5 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-5 w-5 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-5 w-5 fill-[#4C9EEB] text-[#4C9EEB]" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">4.9/5 average rating from 1,200+ customers</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <div className="flex items-center gap-0.5 mb-4">
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                </div>
                <blockquote className="text-gray-500 dark:text-gray-400 mb-4">
                  "The EverCool bottle has completely changed my hydration habits. The reminders are subtle but
                  effective, and I love how it keeps my water cold all day long."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <p className="font-medium">Sarah K.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fitness Instructor</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-0.5 mb-4">
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                </div>
                <blockquote className="text-gray-500 dark:text-gray-400 mb-4">
                  "As someone who's always on the go, I appreciate how the EverCool bottle reminds me to stay hydrated.
                  The app integration is seamless, and the battery life is impressive!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <p className="font-medium">Michael T.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Software Developer</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-0.5 mb-4">
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                  <Star className="h-4 w-4 fill-[#4C9EEB] text-[#4C9EEB]" />
                </div>
                <blockquote className="text-gray-500 dark:text-gray-400 mb-4">
                  "I bought this for my hiking trips and couldn't be happier. The insulation keeps my water cold for
                  hours, even in hot weather, and the smart features are a game-changer."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <p className="font-medium">Jessica R.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Outdoor Enthusiast</p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <div className="h-20 w-20 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Customer using EverCool Bottle"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="h-20 w-20 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Customer using EverCool Bottle outdoors"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="h-20 w-20 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="EverCool Bottle at the gym"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="h-20 w-20 overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="EverCool Bottle on desk"
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expert Validation Section */}
        <section className="py-24 bg-[#F7FAFC] dark:bg-gray-900">
          <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">As Featured In</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>
            <div className="mt-16 mx-auto max-w-3xl">
              <Card className="p-8">
                <blockquote className="text-xl italic text-center mb-6">
                  "EverCool is the smartest bottle I've used in years. The hydration tracking actually works, and the
                  design is both beautiful and functional."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <p className="font-bold">Dr. Emma Richards</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Wellness Expert, Hydration Today</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What's in the Box */}
        <section className="py-24 bg-white dark:bg-gray-950">
          <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex justify-center">
                <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="What's in the Box"
                    width={500}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What's in the Box</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#4C9EEB] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">EverCool Bottle</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        500ml capacity with smart hydration tracking
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#4C9EEB] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">USB-C Charger</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Fast-charging cable with magnetic connector
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#4C9EEB] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Quick-start Guide</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Simple instructions to get you started</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-[#4C9EEB] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Free Sticker Pack</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Personalize your bottle with our exclusive stickers
                      </p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-[#4C9EEB] hover:bg-[#4C9EEB]/90 text-white w-full md:w-auto mt-4">
                  Get Your EverCool Bottle
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-[#F7FAFC] dark:bg-gray-900">
          <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to know about the EverCool Bottle.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does the battery last?</AccordionTrigger>
                  <AccordionContent>
                    The EverCool Bottle's battery lasts up to 30 days on a single charge with normal usage. The battery
                    life may vary depending on how frequently the glow alerts are activated. A full charge takes
                    approximately 2 hours using the included USB-C charger.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is the bottle BPA-free?</AccordionTrigger>
                  <AccordionContent>
                    Yes, the EverCool Bottle is made from 100% BPA-free materials. We use food-grade stainless steel for
                    the inner wall and high-quality, non-toxic materials for all other components. The bottle is also
                    free from phthalates, lead, and other harmful chemicals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I turn off the glow alerts?</AccordionTrigger>
                  <AccordionContent>
                    The EverCool app allows you to fully customize your hydration reminders. You can turn the glow
                    alerts on or off, adjust their frequency, change the color, or set specific times when you don't
                    want to be disturbed. The bottle also has a manual override button to disable alerts temporarily.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is the bottle dishwasher safe?</AccordionTrigger>
                  <AccordionContent>
                    The main body of the EverCool Bottle is not dishwasher safe due to the electronic components.
                    However, the lid and mouthpiece can be safely cleaned in the dishwasher. For the bottle itself, we
                    recommend hand washing with warm, soapy water and the included cleaning brush.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your EverCool
                    Bottle, you can return it within 30 days of receipt for a full refund or exchange. The bottle must
                    be in its original condition with all accessories. Shipping costs for returns are the responsibility
                    of the customer unless the product is defective.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA & Scarcity */}
        <section className="py-24 bg-[#4C9EEB] text-white dark:bg-[#1E3A8A]">
          <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
            <ScrollAnimation>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hydration that hustles with you.</h2>
                  <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Don't miss out on the limited edition colors. Order yours today.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-4 mt-6">
                  <div className="text-center mb-4">
                    <p className="text-lg font-bold">Only 142 left in Blue Frost</p>
                    <div className="w-full bg-white/20 h-2 rounded-full mt-2">
                      <div className="bg-white h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-white text-[#4C9EEB] hover:bg-white/90 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 transition-transform hover:scale-105"
                  >
                    Get My EverCool Bottle
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Exit Intent Modal (Placeholder) */}
        <div className="hidden">
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Wait! Don't Go!</h3>
                <p className="mb-4">Get 10% off if you complete your order in the next 10 mins.</p>
                <div className="flex flex-col space-y-2">
                  <Input placeholder="Enter your email" />
                  <Button className="bg-[#4C9EEB]">Claim My 10% Discount</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <div className="md:hidden fixed bottom-0 left-0 right-0 px-6 py-4 bg-white dark:bg-gray-950 border-t z-40">
        <Button className="w-full bg-[#4C9EEB] hover:bg-[#4C9EEB]/90">Add to Cart - $39.99</Button>
      </div>

      <footer className="bg-[#1A202C] text-white dark:bg-black py-12">
        <div className="container px-6 md:px-16 lg:px-[100px] mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Droplet className="h-6 w-6 text-[#4C9EEB]" />
                <span className="font-bold text-xl">EverCool</span>
              </div>
              <p className="text-gray-400 text-sm">Smart hydration for a healthier life.</p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Stay Connected</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <Input placeholder="Email" className="bg-gray-800 border-gray-700" />
                  <Button variant="outline" className="border-[#4C9EEB] text-[#4C9EEB]">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} EverCool. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Client component for product pricing with quantity selection
function ProductPricing({ selectedColor, onColorChange }) {
  "use client"

  const [quantity, setQuantity] = useState("1")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const basePrice = 39.99
  const quantityNum = Number.parseInt(quantity)

  // Calculate total price based on quantity and apply discount if applicable
  const calculatePrice = () => {
    let total = basePrice * quantityNum

    // Apply 10% discount if buying 2 or more
    if (quantityNum >= 2) {
      total = total * 0.9 // 10% off
    }

    return total.toFixed(2)
  }

  return (
    <div className="flex flex-col justify-center space-y-8">
      <Tabs defaultValue="blue" value={selectedColor} onValueChange={onColorChange} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="blue" className="data-[state=active]:bg-[#4C9EEB] data-[state=active]:text-white">
            Blue
          </TabsTrigger>
          <TabsTrigger value="mint" className="data-[state=active]:bg-[#38C6A2] data-[state=active]:text-white">
            Mint
          </TabsTrigger>
          <TabsTrigger value="black" className="data-[state=active]:bg-gray-800 data-[state=active]:text-white">
            Black
          </TabsTrigger>
          <TabsTrigger
            value="white"
            className="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-800 border"
          >
            White
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">${calculatePrice()}</span>
          <Badge className="bg-green-500">Free Shipping</Badge>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {quantityNum >= 2 ? (
            <span className="text-green-600 font-medium">10% discount applied!</span>
          ) : (
            <>
              Buy 2, Save 10% — Use code <span className="font-bold">HYDRATE10</span> at checkout
            </>
          )}
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <Label htmlFor="quantity" className="text-sm font-medium">
          Quantity
        </Label>
        <Select defaultValue="1" value={quantity} onValueChange={(value) => setQuantity(value)}>
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Qty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        size="lg"
        className="bg-[#4C9EEB] hover:bg-[#4C9EEB]/90 text-white w-full md:w-auto transition-transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        Add to Cart
      </Button>

      <div className="flex items-center space-x-2 text-sm">
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
        <span>In stock - Ships within 24 hours</span>
      </div>

      {/* Add to Cart Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Added to Cart!</DialogTitle>
            <DialogDescription>
              Your EverCool Bottle in {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)} has been added to
              your cart.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center py-4">
            <div className="relative h-[150px] w-[100px]">
              <Image
                src={`/images/bottle-${selectedColor}.png`}
                alt={`EverCool Bottle ${selectedColor}`}
                width={100}
                height={150}
                className="object-contain"
              />
            </div>
            <div className="ml-4">
              <h4 className="font-bold">EverCool Smart Bottle</h4>
              <p className="text-sm text-gray-500">
                Color: {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
              </p>
              <p className="text-sm text-gray-500">Quantity: {quantity}</p>
              <p className="font-bold mt-2">${calculatePrice()}</p>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)} className="sm:w-auto w-full">
              Continue Shopping
            </Button>
            <Button className="bg-[#4C9EEB] hover:bg-[#4C9EEB]/90 sm:w-auto w-full">View Cart & Checkout</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Client component for product selection with color options
function ProductSelector() {
  "use client"

  const [selectedColor, setSelectedColor] = useState("blue")

  const bottleImages = {
    blue: "/images/bottle-blue.png",
    mint: "/images/bottle-mint.png",
    black: "/images/bottle-black.png",
    white: "/images/bottle-white.png",
  }

  const glowColors = {
    blue: "bg-[#4C9EEB]/10",
    mint: "bg-[#38C6A2]/10",
    black: "bg-[#333333]/10",
    white: "bg-[#EEEEEE]/10",
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden flex items-center justify-center">
          <Image
            src={bottleImages[selectedColor] || "/placeholder.svg"}
            alt={`EverCool Bottle ${selectedColor} Color Preview`}
            width={300}
            height={400}
            className="object-contain h-full"
          />
          <div className={`absolute inset-0 ${glowColors[selectedColor]} rounded-full blur-3xl -z-10`}></div>
        </div>
      </div>
      <ProductPricing selectedColor={selectedColor} onColorChange={setSelectedColor} />
    </>
  )
}
