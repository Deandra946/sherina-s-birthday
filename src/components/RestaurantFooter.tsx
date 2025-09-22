import { ChefHat, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function RestaurantFooter() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 rounded-2xl">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-serif">Rasa Wonosobo</h3>
                <p className="text-amber-200">Authentic Traditional Cuisine</p>
              </div>
            </div>
            <p className="text-amber-100 leading-relaxed font-light">
              Preserving the culinary heritage of Wonosobo since 1985. Every dish tells a story 
              of tradition, authenticity, and the rich flavors of Central Java's highlands.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm border border-white/20"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm border border-white/20"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm border border-white/20"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm border border-white/20"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl text-amber-200 font-serif">Explore</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-amber-100 hover:text-white transition-colors font-light">Home</a>
              <a href="#menu" className="text-amber-100 hover:text-white transition-colors font-light">Our Menu</a>
              <a href="#about" className="text-amber-100 hover:text-white transition-colors font-light">About Us</a>
              <a href="#gallery" className="text-amber-100 hover:text-white transition-colors font-light">Gallery</a>
              <a href="#contact" className="text-amber-100 hover:text-white transition-colors font-light">Reservations</a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors font-light">Private Events</a>
            </nav>
          </div>

          {/* Signature Dishes */}
          <div className="space-y-6">
            <h4 className="text-xl text-orange-200 font-serif">Signature Dishes</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-orange-100 hover:text-white transition-colors font-light">Mie Ongklok</a>
              <a href="#" className="text-orange-100 hover:text-white transition-colors font-light">Tempe Kemul</a>
              <a href="#" className="text-orange-100 hover:text-white transition-colors font-light">Gudeg Wonosobo</a>
              <a href="#" className="text-orange-100 hover:text-white transition-colors font-light">Sate Buntel</a>
              <a href="#" className="text-orange-100 hover:text-white transition-colors font-light">Carica Dessert</a>
              <a href="#" className="text-orange-100 hover:text-white transition-colors font-light">Purwaceng Tea</a>
            </nav>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <h4 className="text-xl text-yellow-200 font-serif">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-yellow-100 font-light">Jl. Ahmad Yani No. 123</p>
                  <p className="text-yellow-100 font-light">Wonosobo, Central Java</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                <p className="text-yellow-100 font-light">+62 286 321 234</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                <p className="text-yellow-100 font-light">hello@rasawonosobo.id</p>
              </div>
            </div>
            
            {/* Operating Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="h-5 w-5 text-yellow-300" />
                <h5 className="text-yellow-200 font-serif">Hours</h5>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-yellow-100">
                  <span>Mon - Fri</span>
                  <span>10:00 - 22:00</span>
                </div>
                <div className="flex justify-between text-yellow-100">
                  <span>Sat - Sun</span>
                  <span>09:00 - 23:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/20">
          <div className="text-center">
            <h4 className="text-xl text-amber-200 mb-4 font-serif">Stay Connected</h4>
            <p className="text-amber-100 mb-6 font-light">
              Subscribe to receive updates on seasonal menus, special events, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-amber-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-amber-200 text-center md:text-left font-light">
              © 2024 Rasa Wonosobo. Preserving culinary heritage with love and authenticity.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-amber-200 hover:text-white transition-colors text-sm font-light">Privacy Policy</a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors text-sm font-light">Terms of Service</a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors text-sm font-light">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}