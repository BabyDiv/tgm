"use client";

import Image from "next/image";
import React from "react";
import styles from "../../styles/main.scss";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import Banner from "../../sections/Banner/Banner";
import Engineering from "../../sections/Engineering/Engineering";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Engineering />
      </main>
      <Footer />
    </>
  );
}