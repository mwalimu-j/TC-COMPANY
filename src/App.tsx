import { Routes, Route } from "react-router-dom"; 
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import ExploreCost from "./pages/ExploreCost"; // ✅ Import ExploreCost
import ExploreMore from "./pages/ExploreMore";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/explore-cost" element={<ExploreCost />} /> {/* ✅ Add ExploreCost route */}
          <Route path="/explore-more" element={<ExploreMore />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
