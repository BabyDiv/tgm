"use client";

import Image from "next/image";
import React from "react";
import styles from "../../styles/main.scss";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import Management from "../../sections/Management/Management";
import Top from "../../sections/Top/Top";
import Advantages from "../../sections/Advantages/Advantages";
import Summary from "../../sections/Summary/Summary";
import TopManagement from "../../sections/TopManagement/TopManagment";

export default function ManagementPage() {
  return (
    <>
      <Header />
      <main>
        <TopManagement />
        <Management />
        <Advantages />
        <Summary />
      </main>
      <Footer />
    </>
  );
}