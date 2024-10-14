import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { BarChart2, DollarSign, Mail, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Price from './pages/Price';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <BarChart2 className="mr-2" /> TradePro Indicators
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-blue-200">Home</Link>
              <Link to="/price" className="hover:text-blue-200">Pricing</Link>
              <Link to="/contact" className="hover:text-blue-200">Contact</Link>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        
        {isMenuOpen && (
          <div className="md:hidden bg-blue-500 text-white">
            <Link to="/" className="block p-4 hover:bg-blue-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/price" className="block p-4 hover:bg-blue-600" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link to="/contact" className="block p-4 hover:bg-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}

        <main className="container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white mt-12 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">TradePro Indicators</h3>
                <p>Empowering traders with advanced tools</p>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400"><DollarSign /></a>
                <a href="#" className="hover:text-blue-400"><Mail /></a>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              &copy; 2024 TradePro Indicators. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;