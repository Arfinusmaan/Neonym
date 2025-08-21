import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Testimonials from './components/sections/Testimonials';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import CategoryView from './components/CategoryView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fffbf5]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Work />
                <Testimonials />
                <Experience />
                <Contact />
              </>
            } />
            <Route path="/work/:categoryIndex" element={<CategoryView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
