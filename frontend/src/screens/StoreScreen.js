import React from "react";
import Header from "../components/Header";
import Store from "../components/Store";
import Footer from "../components/Footer";
import StoreBenner from "../components/StoreBenner";
import { Avatar } from "@mui/material";

export default function Item() {
  return (
    <>
      <Header />
      <StoreBenner />
      <Avatar />
      <Store />
      <Footer />
    </>
  );
}
