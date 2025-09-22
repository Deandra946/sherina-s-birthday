import { ArrowRight, Mountain, Sunrise } from "lucide-react";
import { Button } from "./ui/button";
import tuguBiawakImage from 'figma:asset/f185de7797187d9b26a812a0b512c07178811e2b.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and mountain silhouettes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-green-400">
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-orange-200/30"></div>
        {/* Mountain silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-800/40 to-transparent"></div>
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 320" preserveAspectRatio="none">
          <path 
            fill="rgba(34, 197, 94, 0.3)" 
            d="M0,320L80,290C160,260 320,200 480,180C640,160 800,180 960,200C1120,220 1280,240 1360,250L1440,260L1440,320L1360,320C1280,320 1120,320 960,320C800,320 640,320 480,320C320,320 160,320 80,320L0,320Z"
          />
          <path 
            fill="rgba(22, 163, 74, 0.4)" 
            d="M0,320L80,280C160,240 320,160 480,150C640,140 800,180 960,190C1120,200 1280,160 1360,140L1440,120L1440,320L1360,320C1280,320 1120,320 960,320C800,320 640,320 480,320C320,320 160,320 80,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Sunrise className="h-8 w-8 text-orange-300" />
              <span className="text-orange-200 bg-orange-500/20 px-3 py-1 rounded-full backdrop-blur-sm border border-orange-300/30">
                Welcome to Wonosobo
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white drop-shadow-lg">
              Discover the
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent block">
                Magic of Nature
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed drop-shadow-sm">
              Experience the breathtaking beauty of Wonosobo, home to the iconic Tugu Biawak 
              monument, mystical Dieng Plateau, and spectacular mountain sunrises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all">
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 rounded-full px-8 py-3 backdrop-blur-sm transition-all"
              >
                <Mountain className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20">
              <img
                src={tuguBiawakImage}
                alt="Tugu Biawak Monument - Iconic lizard statue in Wonosobo"
                className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-400 to-yellow-400 p-4 rounded-2xl shadow-lg">
                <div className="text-center text-white">
                  <p className="text-sm">Iconic Monument</p>
                  <p>Tugu Biawak</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-green-400/20 backdrop-blur-sm p-3 rounded-full border border-green-300/30">
              <Mountain className="h-6 w-6 text-green-200" />
            </div>
            <div className="absolute -bottom-8 left-8 bg-blue-400/20 backdrop-blur-sm p-3 rounded-full border border-blue-300/30">
              <Sunrise className="h-6 w-6 text-blue-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}