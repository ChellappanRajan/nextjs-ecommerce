import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <>
    <div className="p-4">
      This is a protected route
    <UserButton afterSignOutUrl="/"></UserButton>
    </div>
    </>
  )
}