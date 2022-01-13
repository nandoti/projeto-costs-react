import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Páginas
import Home from "./compenents/pages/Home";
import Company from "./compenents/pages/Company";
import Contact from "./compenents/pages/Contact";
import NewProject from "./compenents/pages/NewProject";
import Projects from "./compenents/pages/Projects";

import Container from "./compenents/layout/Container";
import NavBar from "./compenents/layout/NavBar";
import Footer from "./compenents/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/newproject">
            <NewProject />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
