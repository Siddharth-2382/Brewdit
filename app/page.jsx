"use client";

import Explore from "@components/Explore";
import Features from "@components/Features";
import Hero from "@components/Hero";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Hero />
      <Explore />
      <Features />
    </section>
  );
};

export default Home;
