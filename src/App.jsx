import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainPage from "./Components/MainPage";
import Footer from "./Components/Footer";
import AboutUsPage from "./Components/AboutUsPage";
import ContactUs from "./Components/ContactUs";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Sitemap from "./Components/Sitemap";
import AsDeveloperProjects from "./Components/AsDeveloperProjects";
import AsContractorProjects from "./Components/AsContractorProjects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/developer-projects" element={<AsDeveloperProjects />} />
          <Route path="/contractor-projects" element={<AsContractorProjects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
