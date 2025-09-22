import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-green-800 via-green-700 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-400 to-blue-400 p-3 rounded-xl">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl">Visit Wonosobo</h3>
                <p className="text-green-200">Discover Natural Beauty</p>
              </div>
            </div>
            <p className="text-green-100 leading-relaxed">
              Experience the breathtaking beauty of Wonosobo's natural wonders, from the iconic 
              Tugu Biawak monument to the mystical Dieng Plateau and colorful crater lakes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl text-green-200">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-green-100 hover:text-white transition-colors">Home</a>
              <a href="#destinations" className="text-green-100 hover:text-white transition-colors">Destinations</a>
              <a href="#about" className="text-green-100 hover:text-white transition-colors">About Wonosobo</a>
              <a href="#contact" className="text-green-100 hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">Travel Guide</a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">Photo Gallery</a>
            </nav>
          </div>

          {/* Destinations */}
          <div className="space-y-6">
            <h4 className="text-xl text-blue-200">Top Destinations</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Tugu Biawak Monument</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Dieng Plateau</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Telaga Warna</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Mount Sikunir</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Arjuna Temple</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Sikidang Crater</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl text-orange-200">Visit Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-orange-100">Wonosobo Regency</p>
                  <p className="text-orange-100">Central Java, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-300 flex-shrink-0" />
                <p className="text-orange-100">+62 286 321 234</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-300 flex-shrink-0" />
                <p className="text-orange-100">info@visitwonosobo.id</p>
              </div>
            </div>
            
            {/* Weather Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <h5 className="text-orange-200 mb-2">Current Weather</h5>
              <div className="flex justify-between items-center">
                <span className="text-2xl">15°C</span>
                <span className="text-orange-100">Cool & Fresh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-200 text-center md:text-left">
              © 2024 Visit Wonosobo. Made with ❤️ for sustainable tourism.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}