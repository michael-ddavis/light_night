import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Beliefs from './Beliefs';
import Events from './Events';
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
              <Home />
            </Route>
            <Route path="/beliefs">
              <Beliefs />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/giving"></Route>
          </Switch>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
