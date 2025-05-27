"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface WalletAccountProps {
  onSignOut: () => void
}

export function WalletAccount({ onSignOut }: WalletAccountProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-1 bg-background-secondary text-white rounded-xl px-3 py-2 hover:bg-background-secondary/80 transition-colors">
          <img src="/group.png" alt="Group" className="w-6 h-6" />
          <span className="text-sm">@patara.sui</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-background-secondary border border-border-primary">
        <DropdownMenuItem className="text-white hover:bg-background hover:text-white cursor-pointer">
          Profil
        </DropdownMenuItem>
        <DropdownMenuItem className="text-white hover:bg-background hover:text-white cursor-pointer">
          Ayarlar
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="text-white hover:bg-background hover:text-white cursor-pointer"
          onClick={onSignOut}
        >
          Çıkış Yap
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 