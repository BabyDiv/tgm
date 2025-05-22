"use client";

import Image from "next/image";
import React from "react";
import styles from "../../styles/main.scss";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import Contact from "../../sections/Contact/Contact";

export default function DesignPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}