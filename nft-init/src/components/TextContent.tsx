import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function TextContent() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/connect");
  };

  return (
    <div className="w-full p-6 text-center">
      <h2 className="text-[24px] font-[500] font-geist text-white mb-4">Refer friends and earn with Patara!</h2>
      <p className="text-[16px] font-[400] font-geist text-gray-400">
        Invite your friends to Patara and earn a share of<br />their on-chain rewards forever!
      </p>
      <Button 
              className="inline-flex bg-brand text-white rounded-xl px-2 py-1 sm:px-4 sm:py-4 text-xs sm:text-base whitespace-nowrap hover:bg-brand/80 transition-colors mt-[40px]"
              onClick={handleSignIn}
            >
              Connect/Sign in
            </Button>
    </div>
  );
} 