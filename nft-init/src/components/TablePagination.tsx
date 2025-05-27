import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function TablePagination() {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-6 flex h-16 sm:h-20 items-center justify-between ">
      <div className="flex items-center gap-2 sm:gap-4 w-auto sm:w-[190px] h-8 sm:h-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-1 bg-background-primary border border-border-primary w-[140px] h-[40px] text-white rounded-xl px-3 py-2 hover:bg-background-secondary/80 transition-colors">
              <span className="text-[14px] sm:text-[12px] font-[500] font-geist text-white">
                10 Transaction
              </span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-background-secondary border border-border-primary">
            <DropdownMenuItem className="text-white hover:bg-background hover:text-white cursor-pointer">
              10
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-background hover:text-white cursor-pointer">
              20
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-1 sm:gap-2 w-auto sm:w-[190px] h-8 sm:h-10">
        <Button
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 bg-background-primary border border-border-primary hover:bg-background-secondary rounded-xl"
        >
          1
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 bg-background-primary border border-border-primary hover:bg-background-secondary rounded-xl"
        >
          2
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 bg-background-primary border border-border-primary hover:bg-background-secondary rounded-xl"
        >
          3
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 bg-background-primary border border-border-primary hover:bg-background-secondary rounded-xl"
        >
          4
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 bg-background-primary border border-border-primary hover:bg-background-secondary rounded-xl"
        >
          5
        </Button>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <Button
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 bg-background-primary border border-border-primary hover:bg-background-secondary rounded-xl text-muted-foreground hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
        <Button
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 bg-background-primary border border-border-primary hover:bg-background-secondary rounded-xl text-muted-foreground hover:text-white"
        >
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </div>
  );
}
