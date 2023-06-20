import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contato" element={<Contato/>} />

      </Routes>
    </BrowserRouter>
  );
}
