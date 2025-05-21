"use client";

import Image from "next/image";
import React from "react";
import styles from "../../styles/main.scss";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import OurServices from "../../sections/OurServices/OurServices";
import Intro from "../../sections/Intro/Intro";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <OurServices />
      </main>
      <Footer />
    </>
  );
}