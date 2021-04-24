// import Pages
import AboutUs from "./pages/AboutUs";

// Global Style
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";

// Router
import { Switch, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from 'framer-motion';



function App() {
  const location = useLocation(); 
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname} >
          <Route exact path="/" >
            <AboutUs />
          </Route>

          <Route exact path="/work">
            <OurWork />
          </Route>

          <Route path="/work/:id">
            <MovieDetail />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
