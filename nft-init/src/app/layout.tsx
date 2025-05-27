"use client"

import { Header } from "@/components/Header"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <Header/>
        <main className="h-[calc(100%-80px)] overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
