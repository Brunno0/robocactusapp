import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HompePage from "../pages/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HompePage />} />
      </Routes>
    </BrowserRouter>
  );
}
