// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Plots from './pages/Plots';
import PgCo from './pages/pg-co';
import Signup from './pages/Signup';
import './App.css';

function App() {
  // You can add global state here if needed
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/plots" element={<Plots />} />
            <Route path="/pg-co" element={<PgCo />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;