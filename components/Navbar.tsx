import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/Mobile-sidebar";

function Navbar() {
  return (
    <div className="flex items-center p-[16px]">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;
