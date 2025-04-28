import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenuToggle } from "@/components/mobile-menu-toggle"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4  flex h-[80px] items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="Dawn Fitness Logo"
                width={115}
                height={40}
                className="object-cover object-center"
                priority
              />
            </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            In-Person Training
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Virtual Training
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          {/* <Link href="/meet-the-team" className="text-sm font-medium transition-colors hover:text-primary">
            Meet The Team
          </Link> */}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link href="#contact">Get Started</Link>
          </Button>
          <MobileMenuToggle />
        </div>
      </div>
    </header>
  )
}