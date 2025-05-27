"use client"

import { Button } from "./ui/button";
import TableItem from "./TableItem";
import { TablePagination } from "./TablePagination";

const tableData = [
  {
    name: "0x1f20e...e2026",
    value1: "1,000.00 ",
    value2: "2,500.00 ",
    value3: "$2.50",
    value4: "$2,500.00",
    value5: "$0.05",
    value6: "1 day ago",
    icon: "/vector.png"
  },
  {
    name: "0x1f20e...e2026",
    value1: "1,000.00 ",
    value2: "2,500.00 ",
    value3: "$2.50",
    value4: "$2,500.00",
    value5: "$0.05",
    value6: "1 day ago",
    icon: "/vector.png"
  },
  {
    name: "0x1f20e...e2026",
    value1: "1,000.00 ",
    value2: "2,500.00 ",
    value3: "$2.50",
    value4: "$2,500.00",
    value5: "$0.05",
    value6: "1 day ago",
    icon: "/vector.png"
  },
  {
    name: "0x1f20e...e2026",
    value1: "1,000.00 ",
    value2: "2,500.00 ",
    value3: "$2.50",
    value4: "$2,500.00",
    value5: "$0.05",
    value6: "1 day ago",
    icon: "/vector.png"
  },
  {
    name: "0x1f20e...e2026",
    value1: "1,000.00",
    value2: "2,500.00",
    value3: "$2.50",
    value4: "$2,500.00",
    value5: "$0.05",
    value6: "1 day ago",
    icon: "/vector.png"
  },
  {
    name: "0x1f20e...e2026",
    value1: "1,000.00 ",
    value2: "2,500.00 ",
    value3: "$2.50",
    value4: "$2,500.00",
    value5: "$0.05",
    value6: "1 day ago",
    icon: "/vector.png"
  },
  {
    name: "0x1f20e...e2026",
    value1: "1,000.00 ",
    value2: "2,500.00 ",
    value3: "$2.50",
    value4: "$2,500.00",
    value5: "$0.05",
    value6: "1 day ago",
    icon: "/vector.png"
  },
  {
    name: "0x1f20e...e2026",
    value1: "1,000.00 ",
    value2: "2,500.00 ",
    value3: "$2.50",
    value4: "$2,500.00",
    value5: "$0.05",
    value6: "1 day ago",
    icon: "/vector.png"
  },
  {
    name: "0x1f20e...e2026",
    value1: "1,000.00 ",
    value2: "2,500.00 ",
    value3: "$2.50",
    value4: "$2,500.00",
    value5: "$0.05",
    value6: "1 day ago",
    icon: "/vector.png"
  },
  {
    name: "0x1f20e...e2026",
    value1: "1,000.00 ",
    value2: "2,500.00 ",
    value3: "$2.50",
    value4: "$2,500.00",
    value5: "$0.05",
    value6: "1 day ago",
    icon: "/vector.png"
  },
];

export default function Table() {
  return (
    <div className="text-white w-full px-2 sm:px-3 md:px-[20px] overflow-y-auto mt-[40px] sm:mt-[60px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
        <span className="text-[18px] sm:text-[20px] md:text-[24px] font-[500] font-geist text-white">Earnings</span>
        <div className="flex items-center rounded-xl bg-background-primary p-[4px] h-[36px] sm:h-[40px] gap-1">
          <Button
            className="w-[32px] sm:w-[36px] h-[28px] sm:h-[32px] bg-background-primary hover:bg-background-secondary/80 text-[12px] sm:text-[14px] font-[400] font-geist text-muted-foreground hover:text-white"
          >
            1D
          </Button>
          <Button
            className="w-[32px] sm:w-[36px] h-[28px] sm:h-[32px] bg-background-primary hover:bg-background-secondary/80 text-[12px] sm:text-[14px] font-[400] font-geist text-muted-foreground hover:text-white"
          >
            1W
          </Button>
          <Button
            className="w-[32px] sm:w-[36px] h-[28px] sm:h-[32px] bg-background-primary hover:bg-background-secondary/80 text-[12px] sm:text-[14px] font-[400] font-geist text-muted-foreground hover:text-white"
          >
            1M
          </Button>
          <Button
            className="w-[32px] sm:w-[36px] h-[28px] sm:h-[32px] bg-background-primary hover:bg-background-secondary/80 text-[12px] sm:text-[14px] font-[400] font-geist text-muted-foreground hover:text-white"
          >
            1Y
          </Button>
          <Button
            className="w-[32px] sm:w-[36px] h-[28px] sm:h-[32px] bg-background-primary hover:bg-background-secondary/80 text-[12px] sm:text-[14px] font-[400] font-geist text-muted-foreground hover:text-white"
          >
            ALL
          </Button>
        </div>
      </div>
      <div className="bg-background-primary rounded-xl p-2 sm:p-3 md:p-4 w-full overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Table Header */}
          <div className="grid grid-cols-12 p-3 sm:p-4 ">
            <div className="col-span-4 sm:col-span-6">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-muted-foreground ">ACCOUNT</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-muted-foreground ">AMOUNT IN</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-muted-foreground ">AMOUNT OUT</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-muted-foreground ">PRICE</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-muted-foreground ">VALUE</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-muted-foreground ">EARNED FEE</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-muted-foreground">TIME</span>
            </div>
          </div>

          {/* Table Items */}
          {tableData.map((item, index) => (
            <TableItem key={index} data={item} />
          ))}
        </div>
        <TablePagination/>
      </div>
    </div>
  );
} 