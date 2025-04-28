import Image from "next/image"
import { ChevronRight, Play, Users, Smartphone, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="container relative">
        <div className="grid gap-4 items-center lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_950px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in-up">
                Transform Your Body, Transform Your Life
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in-up-delay-1">
                Join hundreds who have changed their lives with Dawn Fitness. In-person training, virtual coaching,
                and upcoming fitness app.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20"
              >
                Start Your Journey <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:translate-y-[-2px]"
              >
                Watch Success Stories <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm animate-fade-in-up-delay-3">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center">
                  <Users className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div className="h-8 w-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center">
                  <Smartphone className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div className="h-8 w-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-secondary-foreground" />
                </div>
              </div>
              <div className="text-muted-foreground">
                Join <span className="font-medium text-foreground">100+</span> members worldwide
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:block">
            <div className="animate-float">
              <Image
                src="/chevy.jpeg"
                width={550}
                height={600}
                alt="Dawn Fitness Training"
                className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover max-w-full shadow-xl transition-all duration-500"
              />
            </div>
            <div className="absolute -left-4 sm:-left-8 bottom-16 w-56 sm:w-64 rounded-lg bg-card p-4 shadow-lg hidden sm:block animate-fade-in-right">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Trusted by athletes</div>
                  <div className="text-xs text-muted-foreground">Professional endorsements</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 sm:-right-8 top-16 w-56 sm:w-64 rounded-lg bg-card p-4 shadow-lg hidden sm:block animate-fade-in-left">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Community driven</div>
                  <div className="text-xs text-muted-foreground">Join global fitness events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}