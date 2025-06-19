import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-neutral-900 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-neutral-900">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between w-full">
        <Link href="/">
          <div className="flex items-center space-x-1">
            <h1 className="text-4xl leading-none text-emerald-600">𝓩</h1>
            <span className="text-xl font-semibold text-emerald-500 translate-y-[1px]">
              𝓮𝓷𝓿𝓲𝓽𝓪
            </span>
          </div>
        </Link>
        <div className="ml-auto flex items-center space-x-2">
          <SignedOut>
            <SignInButton>
              <Button variant={"secondary"}>sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12 ring-0.5 ring-green-100",
                  avatarImage: "rounded-full shadow-lg",
                  userButtonPopoverCard: "text-black shadow-2xl",
                  userPreviewMainIdentifier: "text-blue-500 font-bold",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
