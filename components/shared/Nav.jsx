"use client";

import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <nav className="flex-between w-full pt-6 mb-16">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="Brewdit Logo"
          width={30}
          height={30}
          className="object-contain w-11 rounded-full"
        />
        <p className="logo_text">Brewdit</p>
      </Link>

      <div className="flex relative">
        <SignedIn>
          <UserButton
            appearance={{
              elements: { avatarBox: "w-11 h-11" },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" className="multi_gradient hover_grow">
            Sign In
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Nav;
