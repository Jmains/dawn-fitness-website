import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4  md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from members who have transformed their lives with Dawn Fitness.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex space-x-0.5">
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
              </div>
              <p className="text-muted-foreground">
                &quot;The virtual training sessions changed my life. I&apos;ve lost 50 pounds and feel better than ever.&quot;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-secondary"></div>
              <div>
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">Member for 2 years</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-2">
              <div className="flex space-x-0.5">
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
              </div>
              <p className="text-muted-foreground">
                &quot;The Dawn app keeps me accountable. The AI adjusts my workouts based on my progress.&quot;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-secondary"></div>
              <div>
                <p className="text-sm font-medium">Michael Chen</p>
                <p className="text-xs text-muted-foreground">Member for 1 year</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border bg-card p-6 shadow-sm md:col-span-2 lg:col-span-1">
            <div className="space-y-2">
              <div className="flex space-x-0.5">
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
                <Star className="h-5 w-5 fill-current text-primary" />
              </div>
              <p className="text-muted-foreground">
                &quot;In-person training at Dawn is worth every penny. The trainers are world-class.&quot;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-secondary"></div>
              <div>
                <p className="text-sm font-medium">Jessica Rodriguez</p>
                <p className="text-xs text-muted-foreground">Member for 3 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}