import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "src/pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RegisterPage />} />
        <Route path="posts" element={<div />} />
        <Route path="posts/:id" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
