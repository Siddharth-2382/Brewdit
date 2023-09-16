"use client";

import Pricings from "@components/Pricings";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Pricing = () => {
  return (
    <>
      <Pricings />
    </>
  );
};

export default Pricing;
