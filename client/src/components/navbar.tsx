import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "./theme-provider";
import { Menu, Settings } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about", label: "About Us", icon: "ℹ️" },
    { href: "/products", label: "Products", icon: "⚙️" },
    { href: "/gallery", label: "Gallery", icon: "🖼️" },
    { href: "/contact", label: "Contact", icon: "📧" },
  ];



  return (
    <>
      <div className="scroll-indicator" style={{ width: "0%" }} />
      <nav
        className={`glass-morphism fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src={`/logo/logo.png?t=${Date.now()}`}
                alt="GS AutoMech Logo"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  // Fallback to icon if logo doesn't exist
                  e.currentTarget.style.display = 'none';
                  const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="w-8 h-8 bg-[hsl(var(--gs-primary))] rounded-lg items-center justify-center hidden">
                <Settings className="text-white text-sm" />
              </div>
              <span className="font-bold text-foreground text-lg">Kaveri GS AutoMech</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6 ml-auto">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={location === item.href ? "default" : "ghost"}
                    className={`transition-all duration-300 ${
                      location === item.href
                        ? "bg-[hsl(var(--gs-primary))] text-white"
                        : "hover:bg-[hsl(var(--gs-glass-bg))]"
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="w-9 h-9 rounded-full hover:bg-[hsl(var(--gs-glass-bg))]"
              >
                <svg
                  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <svg
                  className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>

            <div className="flex items-center space-x-3">

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="glass-morphism p-2 md:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="glass-morphism border-none">
                  <div className="mt-6 space-y-2">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <Button
                          variant={location === item.href ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="mr-2">{item.icon}</span>
                          {item.label}
                        </Button>
                      </Link>
                    ))}
                    
                    {/* Mobile Theme Toggle */}
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                      <span className="mr-2">
                        {theme === "light" ? "🌙" : "☀️"}
                      </span>
                      {theme === "light" ? "Dark Mode" : "Light Mode"}
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
