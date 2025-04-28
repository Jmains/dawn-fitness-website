import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AppFeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4  md:px-6">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
              The Dawn App
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Personal Trainer in Your Pocket
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Our upcoming app uses AI to create personalized workout plans, track your nutrition, and monitor
              your progress in real-time.
            </p>
            <ul className="grid gap-4">
              <li className="flex items-center gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
                <span>Personalized AI workout plans</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
                <span>Nutrition tracking and meal plans</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
                <span>Progress tracking and analytics</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
                <span>Community challenges and support</span>
              </li>
            </ul>
            <div className="flex flex-col !mt-10 sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Coming soon...
              </Button>
              
            </div>
          </div>
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="animate-float">
            <Image
              src="/app-mock.png"
              width={300}
              height={600}
              alt="Dawn Fitness App"
              className="mx-auto rounded-xl shadow-lg"
            />
            </div>
            {/* <div className="absolute -left-4 sm:-left-8 bottom-16 w-56 sm:w-64 rounded-lg bg-card p-4 shadow-lg hidden sm:block border border-border">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">4.9 Star Rating</div>
                  <div className="text-xs text-muted-foreground">Over 400 reviews</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}