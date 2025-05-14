"use client";

import Image from "next/image";
import React from "react";
import styles from "../styles/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Mission from "../components/Mission";
import Services from "../components/Services";
import Conclusion from "../components/Conclusion";

export default function HomePage() {

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Expertise />
        <Mission />
        <Services />
        <Conclusion />
      </main>

      <Footer />
    </>
  );
}
