"use client";

import { useAuth } from "@clerk/nextjs";
import Explore from "@components/landing/Explore";
import Features from "@components/landing/Features";
import Hero from "@components/landing/Hero";
import HowItWorks from "@components/landing/HowItWorks";
import { useRouter } from "next/navigation";

const Home = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  return isSignedIn ? (
    router.push("/dashboard")
  ) : (
    <section className="w-full flex-center flex-col">
      <Hero />
      <Explore />
      <Features />
      <HowItWorks />
    </section>
  );
};

export default Home;
