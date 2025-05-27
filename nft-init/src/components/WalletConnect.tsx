"use client"

import Avatar from "./Avatar";
import { Button } from "./ui/button";
import ActivityList from "./ActivityList";

const activities = [
  {
    id: "1",
    icon: "/icon1.png",
    text: "Total Earned Fee",
    buttonText: "Claim",
    wage: "$1,000.00"
  },
  {
    id: "2",
    icon: "/icon2.png",
    text: "Unclaimed Fee",
    buttonText: "Claim",
    wage: "$500.00"
  },
  {
    id: "3",
    icon: "/icon3.png",
    text: "Total Referral Points",
    buttonText: "Claim",
    wage: "1289"
  },
  {
    id: "4",
    icon: "/icon4.png",
    text: "Referrals",
    buttonText: "Claim",
    wage: "34"
  }
];

export default function WalletConnect() {
  return (
    <div className="w-full  px-3 md:px-[20px] overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-4">
        <div className="lg:col-span-9 space-y-4 bg-background-primary rounded-xl p-3 sm:p-4 md:p-6 h-auto min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 h-full">
            <div className="bg-background-primary rounded-xl p-3 sm:p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-[20px] sm:text-[24px] md:text-[32px] font-[500] font-inter text-white mb-2 md:mb-4">Refer and Earn</h2>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] font-[400] font-geist text-muted-foreground">
                   Invite your friends to Patara and earn a share of<br className="hidden md:block" />their on-chain rewards forever!
                </p>
              </div>
              <div className="bg-background-secondary rounded-xl mt-3 sm:mt-4 md:mt-[40px] p-3 sm:p-4 md:p-[24px]">
                <h6 className="text-[12px] sm:text-[14px] font-[400] font-geist text-muted-foreground mb-2 md:mb-4">Your Referral Link</h6>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] font-[500] font-geist text-white break-all">
                  0x0e0Fcb520F76f3eAC0Aa764De4B97C53Eb36615
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                <Button 
                  className="w-full h-[36px] sm:h-[40px] md:h-[48px] bg-brand text-white rounded-xl px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm hover:bg-brand/80 transition-colors flex items-center justify-center gap-2"
                >
                  Copy Link
                </Button>
                <Button 
                  className="w-full h-[36px] sm:h-[40px] md:h-[48px] bg-[#383838] text-[10px] sm:text-[12px] md:text-[14px] font-[400] font-geist text-muted-foreground rounded-xl px-2 md:px-4 py-2 md:py-3 hover:bg-[#383838]/80 transition-colors flex items-center justify-center gap-2"
                >
                  <img src="/Regular.png" alt="Share" className="w-3 h-3 md:w-4 md:h-4" />
                  Share
                </Button>
              </div>
            </div>

            <div className="bg-background-primary rounded-xl flex flex-col justify-between">
              <Avatar />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 h-auto min-h-[400px]">
          <ActivityList activities={activities} />
        </div>
      </div>
    </div>
  );
} 