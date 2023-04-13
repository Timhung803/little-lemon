import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import BookingDetailPage from "./pages/BookingDetailPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/detail" element={<BookingDetailPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
