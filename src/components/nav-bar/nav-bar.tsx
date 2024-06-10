"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "@/assets/casey.svg";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { clsMerge } from "@/utils/cls-merge";

interface INavBarProps {}

const NavBar: React.FC<INavBarProps> = ({}) => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Container
      aria-label="navbar"
      className={clsMerge(
        "transparent z-40 mx-auto flex items-center justify-between p-[4rem]",
        "h-[80px]",
      )}
    >
      <Link className="text-base lg:text-md" href="/">
        <Image alt="logo" height={100} src={Logo} width={100} />
      </Link>
      <div className="visible flex items-center justify-end gap-[20px] lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant={"ghost"}>
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {navItems.map((item, index) => {
              return (
                <DropdownMenuItem key={index}>
                  <Link className="text-base lg:text-md" href={item.path}>
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden w-full items-center justify-end gap-[20px] lg:flex">
        {navItems.map((item, index) => {
          return (
            <Button key={index} variant={"ghost"}>
              <Link className="text-base lg:text-md" href={item.path}>
                {item.name}
              </Link>
            </Button>
          );
        })}
      </div>
    </Container>
  );
};

export default NavBar;
