"use client"

import WalletConnect from "@/components/WalletConnect";
import Table from "@/components/Table";

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-background ">
      <div className="px-5 md:px-[20px] py-12">
        <div className="">
          <WalletConnect />
          <Table />
        </div>
      </div>
    </div>
  );
}
