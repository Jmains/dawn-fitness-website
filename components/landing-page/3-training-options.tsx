import { Users, Smartphone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrainingOptionsSection() {
  return (
    <section className="w-full py-12 md:py-24 2xl:py-32 bg-background">
      <div className="container px-4  md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
              Three Ways to Train
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Fitness, Your Way</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose how you want to transform your body with our flexible training options.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">In-Person Training</h3>
              <p className="text-muted-foreground">
                Work with elite trainers at our premium facilities. Personalized programs for maximum results.
              </p>
            </div>
            <Button variant="outline" className="mt-auto border-primary text-primary hover:bg-primary/10">
              Find a Location <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Virtual Training</h3>
              <p className="text-muted-foreground">
                Live sessions with top coaches from anywhere. Real-time feedback and motivation.
              </p>
            </div>
            <Button variant="outline" className="mt-auto border-primary text-primary hover:bg-primary/10">
              Book a Session <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-card p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Fitness App </h3>
              <p className="text-muted-foreground">
                AI-powered workouts, nutrition tracking, and progress monitoring in your pocket.
              </p>
            </div>
            <Button variant="outline" className="mt-auto border-primary text-primary hover:bg-primary/10">
             Coming soon... 
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}