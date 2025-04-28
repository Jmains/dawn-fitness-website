import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CallToActionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
      <div className="container px-4  md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Life?
              </h2>
              <p className="md:text-xl/relaxed">
                Join Dawn Fitness today and start your journey to a healthier, stronger you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Journey <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Talk to a Coach
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Not satisfied? Money back gurantee.</p>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg bg-card p-6 border border-border">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Membership Options</h3>
              <p>Choose the plan that fits your lifestyle.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-background p-4 border border-border">
                <h4 className="font-bold">App Only (Coming soon)</h4>
                <div className="mt-2 text-2xl font-bold">
                  $19.99<span className="text-sm font-normal">/month</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Full app access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Personalized workouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Nutrition tracking</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-background p-4 border border-border">
                <h4 className="font-bold">Premium</h4>
                <div className="mt-2 text-2xl font-bold">
                  $99.99<span className="text-sm font-normal">/month</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Everything in App Only</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>Unlimited virtual training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>2 in-person sessions/month</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg bg-background p-4 border border-border">
              <h4 className="font-bold">Elite</h4>
              <div className="mt-2 text-2xl font-bold">
                $299.99<span className="text-sm font-normal">/month</span>
              </div>
              <p className="mt-2 text-sm">
                Unlimited access to all Dawn Fitness services, including unlimited in-person training, priority
                booking, and exclusive events.
              </p>
              <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Contact for Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}