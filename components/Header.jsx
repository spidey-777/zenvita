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
import { userCheck } from "@/lib/userCheck";
import { Calendar, ShieldCheck, Stethoscope, User } from "lucide-react";

async function Header() {
  const user = await userCheck();
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
          <SignInButton>
            <div>
              {
              user?.role ==="ADMIN" && (
                <Link href='/admin'>
                  <Button
                  variant={'outline'}
                  className='hidden md:inline-flex items-center gap-2'>
                    <ShieldCheck className="h-4 w-4"/>
                    Admin
                  </Button>
                  <Button className='md:hidden w-10 h-10 p-0' variant={'ghost'}>
                    <ShieldCheck className="w-4 h-4"/>
                  </Button>
                </Link>
              )
            }
              {
              user?.role ==="DOCTOR" && (
                <Link href='/doctor'>
                  <Button
                  variant={'outline'}
                  className='hidden md:inline-flex items-center gap-2'>
                    <Stethoscope className="h-4 w-4"/>
                    Doctor Deshboard
                  </Button>
                  <Button className='md:hidden w-10 h-10 p-0' variant={'ghost'}>
                    <Stethoscope className="w-4 h-4"/>
                  </Button>
                </Link>
              )
            }
            {
              user?.role ==="PATIENT" && (
                <Link href='/appointments'>
                  <Button
                  variant={'outline'}
                  className='hidden md:inline-flex items-center gap-2'>
                    <Calendar className="h-4 w-4"/>
                    MY Appointments
                  </Button>
                  <Button className='md:hidden w-10 h-10 p-0' variant={'ghost'}>
                    <Calendar className="w-4 h-4"/>
                  </Button>
                </Link>
              )
            }
            {
              user?.role ==="UNASSIGNED"&&(
                <Link href='/onbording'>
                  <Button
                  variant={'outline'}
                  className='hidden md:inline-flex items-center gap-2 cursor-pointer '>
                    <User className="h-4 w-4 "/>
                    Complate Profile
                  </Button>
                  <Button variant={'ghost'} className='md:hidden w-10 h-10 p-0'>
                    <User className="h-4 w-4"/>
                  </Button>
                </Link>
              ) 
            }
            </div>
          </SignInButton>
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
