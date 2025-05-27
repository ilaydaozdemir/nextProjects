"use client";

import { motion } from "framer-motion";

export default function Avatar() {
  const ringImages = [
    "/p.png",
    "/m.png",
    "/a.png",
    "/w.png",
    "/c.png",
    "/g.png",
    "/s.png",
    "/f.png",
  ];

  const rings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="w-full h-[320px] w-[320px] flex items-center justify-center relative mt-[40px]">
      {/* Concentric Rings */}
      {rings.map((ring, index) => (
        <motion.div
          key={`ring-${index}`}
          className="absolute rounded-full border border-[#4A90E2]"
          initial={{
            scale: 0.8,
            opacity: 0.4,
            boxShadow: "0 0 8px rgba(74, 144, 226, 0.3)",
          }}
          animate={{
            scale: 1.2,
            opacity: 0,
            boxShadow: "0 0 15px rgba(74, 144, 226, 0.5)",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          style={{
            width: `${100 + index * 15}px`,
            height: `${100 + index * 15}px`,
            zIndex: 1,
            filter: "blur(1.5px)",
            background:
              "radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0) 70%)",
          }}
        />
      ))}

      {/* Center Image */}
      <motion.img
        src="/Vector.png"
        alt="Vector"
        className="w-[84px] h-[84px] object-contain z-20"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Rotating Ring */}
      <motion.div
        className="absolute"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformOrigin: "center",
          width: "280px",
          height: "280px",
          zIndex: 10,
        }}
      >
        {ringImages.map((image, index) => {
          const totalImages = ringImages.length;
          const angleStep = 360 / totalImages;
          const angle = index * angleStep - 90;
          const radius = 110;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <img
              key={index}
              src={image}
              alt={`Ring ${index + 1}`}
              className="w-8 h-8 absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%)`,
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
