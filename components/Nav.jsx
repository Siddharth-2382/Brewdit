"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggleDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        // Clicked outside of the dropdown, so close it
        setToggleDropdown(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [toggleDropdown]);

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

      {/* Mobile Navigation  */}
      <div className="flex md:hidden relative">
        {session?.user ? (
          <div className="flex" ref={dropdownRef}>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full w-11"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href={"/profile/" + session?.user.name}
                  className="dropdown_link text-center"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="multi_gradient"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="md:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <button
              type="button"
              onClick={signOut}
              className="white_btn uppercase"
            >
              Sign Out
            </button>

            <Link href={"/profile/" + session?.user.name}>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {!providers ? (
              <button
                type="button"
                className="multi_gradient hover_grow"
                disabled
              >
                Sign in
              </button>
            ) : (
              providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="multi_gradient hover_grow"
                >
                  Sign in
                </button>
              ))
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
