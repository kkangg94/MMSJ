import React from "react";
import CustomerBenner from "../components/CustomerBenner";
import CustomerIdea from "../components/CustomerIdea";
import CustomerSearch from "../components/CustomerSearch";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CustomerService() {
  return (
    <>
      <Header />
      <CustomerBenner />
      <CustomerSearch />
      <CustomerIdea />
      <Footer />
    </>
  );
}
