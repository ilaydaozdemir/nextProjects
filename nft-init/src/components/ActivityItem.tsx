"use client"

import { Button } from "./ui/button";

interface ActivityItemProps {
  icon: string;
  text: string;
  buttonText: string;
  wage: string;
  onButtonClick: () => void;
}

export default function ActivityItem({ icon, text, buttonText, onButtonClick, wage }: ActivityItemProps) {
  return (
    <div className="group w-full flex items-center justify-between p-2 sm:p-3 bg-background-primary rounded-xl hover:bg-background-primary/80 transition-colors">
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <img src={icon} alt="Activity Icon" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0" />
        <div className="flex flex-col min-w-0">
          <span className="text-[12px] sm:text-[14px] font-[400] font-geist text-muted-foreground truncate">{text}</span>
          <span className="text-[18px] sm:text-[20px] md:text-[24px] font-[500] font-geist text-white truncate">{wage}</span>
        </div>
      </div>
      <Button 
        className="opacity-0 group-hover:opacity-100 transition-opacity bg-brand text-white rounded-xl px-2 sm:px-3 py-[14px] sm:py-[18px] text-xs sm:text-sm hover:bg-brand/80 flex-shrink-0 ml-2 sm:ml-4"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
} 