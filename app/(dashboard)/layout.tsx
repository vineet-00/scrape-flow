import React from "react"
import { Separator } from "@/components/ui/separator";
import DesktopSidebar from "@/components/Sidebar"
import BreadcrumbHeader from "@/components/BreadcrumbHeader"
import { ModeToggle } from "@/components/ThemeModeToggle"
import { SignedIn, UserButton } from "@clerk/nextjs"

export const Layout = ({children}: {children : React.ReactNode}) => {
  
  return (
    <div className="flex h-screen">
    <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadcrumbHeader />
          <div className="gap-1 flex items-center">
            <ModeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <Separator/>
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout