import { Heart, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function RestaurantAbout() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-amber-600" />
                <span className="text-amber-700 bg-amber-100 px-4 py-2 rounded-full font-medium border border-amber-200">
                  Our Heritage
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl text-amber-900 font-serif leading-tight">
                Preserving the
                <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent block">
                  Culinary Soul of Wonosobo
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-amber-800 leading-relaxed font-light">
                <p>
                  Since 1985, Rasa Wonosobo has been the guardian of authentic highland cuisine, 
                  preserving recipes that have been passed down through generations of Wonosobo families. 
                  Our story began when Grandma Sari opened a small warung serving traditional dishes 
                  to local farmers and travelers.
                </p>
                
                <p>
                  Today, we continue her legacy by sourcing the finest ingredients from local farmers 
                  in the Dieng Plateau, ensuring that every dish maintains the authentic flavors 
                  that have made Wonosobo cuisine so special. Our kitchen is a bridge between 
                  the past and present, where ancient techniques meet modern presentation.
                </p>
                
                <p>
                  Each meal at Rasa Wonosobo is not just dining—it's a cultural journey through 
                  the rich culinary heritage of Central Java's highlands, where every bite tells 
                  a story of tradition, family, and love for authentic flavors.
                </p>
              </div>
            </div>

            {/* Heritage Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="text-3xl text-amber-700 font-serif">39</div>
                <p className="text-amber-600 text-sm">Years Heritage</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl text-amber-700 font-serif">15</div>
                <p className="text-amber-600 text-sm">Traditional Recipes</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl text-amber-700 font-serif">3</div>
                <p className="text-amber-600 text-sm">Generations</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl text-amber-700 font-serif">50+</div>
                <p className="text-amber-600 text-sm">Local Farmers</p>
              </div>
            </div>
          </div>

          {/* Heritage Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="overflow-hidden rounded-2xl border-0 shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1748612224332-224014c0e105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwYW1iaWVudCUyMGxpZ2h0aW5nfGVufDF8fHx8MTc1ODQ0ODk4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Traditional Indonesian kitchen and cooking preparation"
                    className="w-full h-48 object-cover"
                  />
                </Card>
                
                <Card className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 rounded-2xl border-0 shadow-lg">
                  <Award className="h-8 w-8 mb-3" />
                  <h4 className="text-lg mb-2 font-serif">Awards & Recognition</h4>
                  <p className="text-amber-100 text-sm font-light">
                    Best Traditional Restaurant 2023, Wonosobo Tourism Excellence Award
                  </p>
                </Card>
              </div>
              
              <div className="space-y-6 pt-8">
                <Card className="bg-amber-50 border border-amber-200 p-6 rounded-2xl shadow-lg">
                  <Users className="h-8 w-8 text-amber-600 mb-3" />
                  <h4 className="text-lg text-amber-900 mb-2 font-serif">Family Tradition</h4>
                  <p className="text-amber-700 text-sm font-light">
                    Three generations of culinary expertise, preserving authentic recipes and cooking methods
                  </p>
                </Card>
                
                <Card className="overflow-hidden rounded-2xl border-0 shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1722995690313-9ef561d30143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwaW5kb25lc2lhbiUyMGN1aXNpbmUlMjBwbGF0aW5nfGVufDF8fHx8MTc1ODQ0ODk5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Fine dining Indonesian cuisine plating and presentation"
                    className="w-full h-48 object-cover"
                  />
                </Card>
              </div>
            </div>
            
            {/* Floating quote */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-amber-200 p-6 rounded-2xl shadow-xl max-w-sm">
              <div className="flex items-start space-x-3">
                <div className="bg-amber-100 p-2 rounded-full flex-shrink-0">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-amber-800 text-sm font-light italic">
                    "Every dish is prepared with the same love and care as Grandma Sari's original recipes."
                  </p>
                  <p className="text-amber-600 text-xs mt-2 font-medium">— Chef Budi, Head Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl mb-4 font-serif">Our Values</h3>
            <p className="text-xl text-amber-100 font-light">
              The principles that guide our culinary journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-serif">Authenticity</h4>
              <p className="text-amber-100 font-light">
                We preserve traditional recipes and cooking methods, ensuring every dish maintains its original character and flavor.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-serif">Community</h4>
              <p className="text-amber-100 font-light">
                We support local farmers and artisans, creating a sustainable ecosystem that benefits the entire Wonosobo community.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-serif">Excellence</h4>
              <p className="text-amber-100 font-light">
                We strive for perfection in every aspect, from ingredient selection to presentation, delivering memorable dining experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}