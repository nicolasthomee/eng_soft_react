import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import About from "./Produtos";
import Contact from "./Dados";
import Login from "./Login";
import Register from "./Registro";
import Clima from "./Clima";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Sidebar from "../components/Sidebar"
import ThemeToggle from "../components/Toogle";

export default function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
 
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950 dark:bg-slate-100">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

        <main className="flex-1 p-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/clima" element={<Clima />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
