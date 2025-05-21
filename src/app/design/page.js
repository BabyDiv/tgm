"use client";

import Image from "next/image";
import React from "react";
import styles from "../../styles/main.scss";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import Design from "../../sections/Design/Design";
import Top from "../../sections/Top/Top";

export default function DesignPage() {
  return (
    <>
      <Header />
      <main>
        <Top />
        <Design />
      </main>
      <Footer />
    </>
  );
}