"use client";

import Explore from "@components/landing/Explore";
import Features from "@components/landing/Features";
import Hero from "@components/landing/Hero";
import HowItWorks from "@components/landing/HowItWorks";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Hero />
      <Explore />
      <Features />
      <HowItWorks />
    </section>
  );
};

export default Home;
