"use client";

import Image from "next/image";
import React from "react";
import styles from "../../styles/main.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <h1>About Us</h1>
        <p>Информация о компании KVINT.</p>
      </main>
      <Footer />
    </>
  );
}