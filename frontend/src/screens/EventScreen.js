import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EventrBenner from "../components/EventBenner";
import EventCard from "../components/EventCard";

export default function EventScreen() {
  const [addEvent, setAddEvent] = useState(true);
  return (
    <>
      <Header />
      <EventrBenner />
      <EventCard />
      {/* 관리자한테만 보이는 버튼 */}
      <Link to="add">
        <button>등록하기</button>
      </Link>
      <div className="Container"></div>
      <Footer />
    </>
  );
}
