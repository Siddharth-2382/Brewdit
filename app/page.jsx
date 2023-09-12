"use client";

import Explore from "@components/Explore";
import Features from "@components/Features";
import Hero from "@components/Hero";
import HowItWorks from "@components/HowItWorks";

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
