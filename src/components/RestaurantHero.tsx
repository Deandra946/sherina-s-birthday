import { Utensils, Star, Award } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function RestaurantHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with elegant patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        {/* Subtle mountain silhouettes */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1200 320" preserveAspectRatio="none">
            <path 
              fill="currentColor" 
              className="text-amber-800"
              d="M0,320L80,290C160,260 320,200 480,180C640,160 800,180 960,200C1120,220 1280,240 1360,250L1440,260L1440,320L1360,320C1280,320 1120,320 960,320C800,320 640,320 480,320C320,320 160,320 80,320L0,320Z"
            />
          </svg>
        </div>
        
        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-20 left-20 w-32 h-32 border border-amber-200 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-amber-200 rounded-full"></div>
          <div className="absolute bottom-40 left-32 w-20 h-20 border border-amber-200 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
              <Award className="h-8 w-8 text-amber-600" />
              <span className="text-amber-700 bg-amber-100 px-4 py-2 rounded-full font-medium border border-amber-200">
                Established 1985
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-amber-900 font-serif leading-tight">
              Authentic Taste
              <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent block">
                of Wonosobo
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-amber-800 mb-10 leading-relaxed font-light">
              Experience the rich heritage of traditional Wonosobo cuisine, where every dish 
              tells a story of generations-old recipes and authentic flavors from the highlands.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 mb-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-amber-500 fill-current" />
              ))}
              <span className="text-amber-700 font-medium">5.0 • 200+ Reviews</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all font-medium"
              >
                <Utensils className="mr-2 h-5 w-5" />
                View Our Menu
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/80 hover:bg-white text-amber-800 border-amber-300 hover:border-amber-400 rounded-full px-8 py-4 backdrop-blur-sm transition-all font-medium"
              >
                Book a Table
              </Button>
            </div>
          </div>

          {/* Featured Dishes Showcase */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-100">
              <h3 className="text-2xl text-amber-900 mb-6 font-serif text-center">Signature Dishes</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="relative group">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1551982932-72b68d7a9ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbm9vZGxlJTIwc291cCUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1ODQ0ODk4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Mie Ongklok - Traditional Wonosobo noodle soup"
                      className="w-full h-32 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-3 font-medium">Mie Ongklok</p>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1562693750-17a7ac007eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZG9uZXNpYW4lMjB0ZW1wZWglMjBmb29kfGVufDF8fHx8MTc1ODQ0ODk4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Tempe Kemul - Traditional fermented soybean dish"
                      className="w-full h-32 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-3 font-medium">Tempe Kemul</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative group">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1722396594684-d15b8565ee02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZG9uZXNpYW4lMjBkZXNzZXJ0JTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc1ODQ0ODk5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Carica - Traditional Wonosobo candied papaya"
                      className="w-full h-32 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-3 font-medium">Carica</p>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1631161357458-d881e27a17ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwaGVyYmFsJTIwdGVhJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU4NDQ4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Purwaceng Tea - Traditional herbal tea from Wonosobo highlands"
                      className="w-full h-32 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-3 font-medium">Purwaceng Tea</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-amber-700 font-medium">Traditional recipes passed down through generations</p>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -left-6 bg-amber-100 p-4 rounded-full border border-amber-200 shadow-lg">
              <Utensils className="h-6 w-6 text-amber-600" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-100 p-4 rounded-full border border-amber-200 shadow-lg">
              <Star className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}