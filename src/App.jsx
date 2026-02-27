import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import {
  About,
  Certifications,
  Contact,
  Experience,
  Home,
  Links,
  NotFound,
  Projects,
} from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/certifications"
            element={
              <>
                <Navbar />
                <Certifications />
                <Footer />
              </>
            }
          />
          <Route
            path="/experience"
            element={
              <>
                <Navbar />
                <Experience />
                <Footer />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Navbar />
                <Projects />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
