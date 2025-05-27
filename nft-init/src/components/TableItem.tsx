"use client"

interface TableItemProps {
  data: {
    name: string;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    value6: string;
    icon: string;
  };
}

export default function TableItem({ data }: TableItemProps) {
  return (
    <div className="text-white w-full  overflow-y-auto  ">
      <div className="bg-background-primary rounded-xl  w-full overflow-x-auto">
        <div className="min-w-[800px]">

          <div className="grid grid-cols-12 p-3 sm:p-4 rounded-xl   h-[72px] bg-background-secondary mb-2">
            <div className="col-span-4 sm:col-span-6 flex items-center gap-2">
              <span> <img src={data.icon} alt="Activity Icon" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" /></span>
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-white ">{data.name}</span>

            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-white ">{data.value1}</span><span className="text-[12px] sm:text-[14px] font-[500] font-geist text-muted-foreground ">SUI</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-white ">{data.value2}</span><span className="text-[12px] sm:text-[14px] font-[500] font-geist text-muted-foreground ">USDC</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-white ">{data.value3}</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-white ">{data.value4}</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-white ">{data.value5}</span>
            </div>
            <div className="col-span-1.4">
              <span className="text-[12px] sm:text-[14px] font-[500] font-geist text-white">{data.value6}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 