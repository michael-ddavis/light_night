import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BeliefsPage from './pages/BeliefsPage';
import VisionPage from './pages/VisionPage';
import EncountersPage from './pages/EncountersPage';
import GivingPage from './pages/GivingPage';
import TeamPage from './pages/TeamPage';
import ScrollToTop from './scrollToTop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="bg-white">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route path="/vision">
              <VisionPage />
            </Route>
            <Route path="/beliefs">
              <BeliefsPage />
            </Route>
            <Route path="/team">
              <TeamPage />
            </Route>
            <Route path="/encounters">
              <EncountersPage />
            </Route>
            <Route path="/giving">
              <GivingPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
