// import Pages
import AboutUs from "./pages/AboutUs";

// Global Style
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

// Router
import { Switch, Route } from 'react-router-dom';
import Nav from "./components/Nav";



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route exact path="/" >
          <AboutUs />
        </Route>

        <Route exact path="/work">
          <OurWork />
        </Route>

        <Route exact path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
