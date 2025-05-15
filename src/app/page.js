"use client";

import Image from "next/image";
import React from "react";
import styles from "../styles/main.scss";
import Header from "../sections/Header/Header";
import Footer from "../sections/Footer/Footer";
import Hero from "../sections/Hero/Hero";
import Expertise from "../sections/Expertise";
import Mission from "../sections/Mission";
import Services from "../sections/Services";
import Conclusion from "../sections/Conclusion";

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
