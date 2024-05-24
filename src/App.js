import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Animation from "./pages/Animation";
import Home from "./pages/Home";
import Paintings from "./pages/Paintings";
import TreeD from "./pages/TreeD";

function App() {
  return (
    <Router>
      <AnimationApp />
    </Router>
  );
}

function AnimationApp() {
  let location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={500}
          >
            <Routes location={location}>
              <Route exact path="/" element={<Home />} />
              <Route path="/3d" element={<TreeD />} />
              <Route path="/paintings" element={<Paintings />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
}

export default App;
