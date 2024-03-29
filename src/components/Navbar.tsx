'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 select-none", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">

        </MenuItem>
        </Link>

        <MenuItem 
        setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/webdev">Web Development</HoveredLink>
            <HoveredLink href="/datascience">Data Science</HoveredLink>
            <HoveredLink href="/dsacourses">DSA Courses</HoveredLink>
            <HoveredLink href="/machinelearning">Machine Learning</HoveredLink>
            </div>
        </MenuItem>

        <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact">
                
            </MenuItem>
        </Link>

        <Link href={"/login"}>
          <MenuItem setActive={setActive} active={active} item="Login">

          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
