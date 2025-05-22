"use client";

import Image from "next/image";
import React from "react";
import styles from "../../styles/main.scss";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import Vision from "../../sections/Vision/Vision";
import TopVision from "../../sections/TopVision/TopVision";

export default function VisionPage() {
  return (
    <>
      <Header />
      <main>
        <TopVision />
        <Vision />
      </main>
      <Footer />
    </>
  );
}