import "./App.css";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BookingDetail from "./pages/BookingDetail";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/detail" element={<BookingDetail />}></Route>
        <Route path="/confirmation" element={<Confirmation />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
