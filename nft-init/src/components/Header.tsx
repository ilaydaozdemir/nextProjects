"use client"

import { useState } from "react"
import { Menu, Bell, Settings, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { WalletAccount } from "./WalletAccount"
import { useRouter } from "next/navigation"

export function Header() {


  const [isSignedIn, setIsSignedIn] = useState(true)
  const router = useRouter();
  const handleSignOut = () => {
    setIsSignedIn(false)
    router.push("/");
  }

  const handleSignIn = () => {
    setIsSignedIn(true)
    router.push("/connect");
  }


 

  return (
    <header className="sticky top-0 z-50 w-full  border-border-primary bg-background">
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 flex h-16 sm:h-20 items-center justify-between relative">
        {/* Left section - Hamburger menu and Logo */}
        <div className="flex items-center gap-2 sm:gap-4 w-auto sm:w-[190px] h-8 sm:h-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" className="h-8 w-8 sm:h-10 sm:w-10 bg-background text-white">
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[400px] bg-background text-white">
              <nav className="flex flex-col gap-4 m-4">
                <a href="#" className="text-sm font-medium text-white">Home</a>
                <a href="#" className="text-sm font-medium text-white">About</a>
                <a href="#" className="text-sm font-medium text-white">Services</a>
                <a href="#" className="text-sm font-medium text-white">Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2 sm:gap-4">
            <img src="/logo.png" alt="Logo" className="h-6 w-auto sm:h-10" />
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 mx-4 sm:mx-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Enter Accounts, Platforms, NFTs, Token"
              className="pl-8 pr-10 w-full bg-background-secondary text-muted-foreground border-border-primary focus:outline-none h-8 sm:h-10 text-sm rounded-xl"
            />
            <img 
              src="/key.png" 
              alt="key" 
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-6 sm:w-10 sm:h-8 p-1"
            />
          </div>
        </div>

        {/* Right section - Icons and Sign in */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Button size="icon" className="h-8 w-8 sm:h-10 sm:w-10 bg-background-secondary rounded-xl">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button size="icon" className="h-8 w-8 sm:h-10 sm:w-10 bg-background-secondary rounded-xl">
            <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          {isSignedIn ? (
            <WalletAccount onSignOut={handleSignOut} />
          ) : (
            <Button
              className="bg-brand text-white rounded-xl px-4 py-2 sm:px-4 sm:py-2 text-xs sm:text-base whitespace-nowrap hover:bg-brand/80 transition-colors"
              onClick={handleSignIn}
            >
              Connect / Sign in
            </Button>
          )}
        </div>
      </div>
    </header>
  )
} 