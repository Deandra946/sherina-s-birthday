import { ChefHat, Phone, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export default function RestaurantHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-3 rounded-2xl shadow-lg">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl text-amber-900 font-serif">Rasa Wonosobo</h1>
              <p className="text-sm text-amber-700">Authentic Traditional Cuisine</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">
              Home
            </a>
            <a href="#menu" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">
              Menu
            </a>
            <a href="#about" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">
              About
            </a>
            <a href="#gallery" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">
              Gallery
            </a>
            <a href="#contact" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Contact Info & Reservation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-amber-700">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+62 286 321 234</span>
            </div>
            <div className="flex items-center space-x-2 text-amber-700">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Open 10:00 - 22:00</span>
            </div>
            <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full px-6 py-2 shadow-lg font-medium">
              Reserve Table
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-amber-700 hover:bg-amber-50"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="w-full h-0.5 bg-current transition-all"></span>
              <span className="w-full h-0.5 bg-current transition-all"></span>
              <span className="w-full h-0.5 bg-current transition-all"></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-100">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-amber-800 hover:text-amber-900 px-2 py-2 rounded transition-colors">
                Home
              </a>
              <a href="#menu" className="text-amber-800 hover:text-amber-900 px-2 py-2 rounded transition-colors">
                Menu
              </a>
              <a href="#about" className="text-amber-800 hover:text-amber-900 px-2 py-2 rounded transition-colors">
                About
              </a>
              <a href="#gallery" className="text-amber-800 hover:text-amber-900 px-2 py-2 rounded transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-amber-800 hover:text-amber-900 px-2 py-2 rounded transition-colors">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full mt-2">
                Reserve Table
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}