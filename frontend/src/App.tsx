import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "src/pages/RegisterPage";
import ArticleListPage from "src/pages/ArticleListPage";
import ArticleDetailPage from "src/pages/ArticleDetailPage";
import MainPage from "src/pages/MainPage";
import ArticleWritePage from "src/pages/ArticleWritePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/posts" element={<ArticleListPage />} />
        <Route path="/posts/:id" element={<ArticleDetailPage />} />
        <Route path="/posts/write" element={<ArticleWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
