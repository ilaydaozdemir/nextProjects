"use client"

import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="h-full w-full relative">
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center z-0"
      >
        <div 
          className="w-[90%] h-[90%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/avatar_black.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <Card />
      </div>
    </main>
  )
}
