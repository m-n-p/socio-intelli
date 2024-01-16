"use client";

import React, { useEffect, useState } from "react";

import Footer from "./Footer";
import "./Main.css";
import Image from "next/image";
import Link from "next/link";
import { useWindowDimensions } from "../../../hooks/useWindowDimension";

function Home() {
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setLoading(true);
    }
  }, []);

  return (
    <div className="main-container">
      <div className="name-logo flex text-white flex-col items-center">
        <h1 className="adventfont text-7xl tracking-wide  ">
          Market Universe <sup>TM</sup>
        </h1>
        <div className="flex items-center space-y-2">
          <h3 className="adventfont text-7xl tracking-wide  ">by</h3>
          <Image
            width={400}
            height={400}
            src="/MUlogo.png"
            alt="Market Unwinded Logo"
          />
        </div>
      </div>

      <div className="options">
        <Link href="/login" className="option bg-[#1B68DC]">
          Log In
        </Link>
        <Link href="/signup" className="option bg-[#696969]">
          Sign Up
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
