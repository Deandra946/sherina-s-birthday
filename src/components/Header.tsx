import { MapPin, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-xl">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl text-green-800">Visit Wonosobo</h1>
              <p className="text-xs text-green-600">Discover Natural Beauty</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-green-700 hover:text-green-800 transition-colors">
              Home
            </a>
            <a href="#destinations" className="text-green-700 hover:text-green-800 transition-colors">
              Destinations
            </a>
            <a href="#about" className="text-green-700 hover:text-green-800 transition-colors">
              About
            </a>
            <a href="#contact" className="text-green-700 hover:text-green-800 transition-colors">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full px-6">
              Plan Your Trip
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-green-700 hover:bg-green-50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-green-700 hover:text-green-800 px-2 py-1 rounded transition-colors">
                Home
              </a>
              <a href="#destinations" className="text-green-700 hover:text-green-800 px-2 py-1 rounded transition-colors">
                Destinations
              </a>
              <a href="#about" className="text-green-700 hover:text-green-800 px-2 py-1 rounded transition-colors">
                About
              </a>
              <a href="#contact" className="text-green-700 hover:text-green-800 px-2 py-1 rounded transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full mt-2">
                Plan Your Trip
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}