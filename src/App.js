import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Animation from "./pages/Animation";
import Home from "./pages/Home";
import Paintings from "./pages/Paintings";
import TreeD from "./pages/TreeD";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Posters from "./pages/Posters";
import Concepts from "./pages/Concepts";
import Custom from "./pages/Custom";

function App() {
  return (
    <Router>
      <AnimationApp />
      <Analytics />
      <SpeedInsights />
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
              <Route path="/posters" element={<Posters />} />
              <Route path="/3d" element={<TreeD />} />
              <Route path="/paintings" element={<Paintings />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/about" element={<About />} />
              <Route path="/concepts" element={<Concepts />} />
              <Route path="/custom" element={<Custom />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
}

export default App;
