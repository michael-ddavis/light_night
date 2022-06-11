import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BeliefsPage from "./pages/BeliefsPage";
import VisionPage from "./pages/VisionPage";
import EncountersPage from "./pages/encounters/EncountersPage";
import GivingPage from "./pages/GivingPage";
import TeamPage from "./pages/TeamPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import EncounterDetailPage from "./pages/encounters/EncounterDetailPage";
import BlogsPage from "./pages/blog/BlogsPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Router>
      <Wrapper>
        <div className="bg-white flex flex-col">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/vision" element={<VisionPage />} />
            <Route exact path="/beliefs" element={<BeliefsPage />} />
            <Route exact path="/team" element={<TeamPage />} />
            <Route exact path="/encounters" element={<EncountersPage />} />
            <Route exact path="/encounter" element={<EncounterDetailPage />} />
            <Route exact path="/blogs" element={<BlogsPage />} />
            <Route exact path="/blog-detail" element={<BlogDetailPage />} />
            <Route exact path="/giving" element={<GivingPage />} />
          </Routes>
          <Footer />
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
