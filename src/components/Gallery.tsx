import { Camera, Utensils, Users, Award } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1748612224332-224014c0e105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwYW1iaWVudCUyMGxpZ2h0aW5nfGVufDF8fHx8MTc1ODQ0ODk4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Elegant restaurant interior with warm ambient lighting",
    category: "Ambiance",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1551982932-72b68d7a9ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbm9vZGxlJTIwc291cCUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1ODQ0ODk4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Traditional Mie Ongklok served in authentic bowl",
    category: "Signature Dishes",
    className: ""
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1722995690313-9ef561d30143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwaW5kb25lc2lhbiUyMGN1aXNpbmUlMjBwbGF0aW5nfGVufDF8fHx8MTc1ODQ0ODk5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Fine dining Indonesian cuisine with artistic plating",
    category: "Chef's Special",
    className: ""
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562693750-17a7ac007eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZG9uZXNpYW4lMjB0ZW1wZWglMjBmb29kfGVufDF8fHx8MTc1ODQ0ODk4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Crispy Tempe Kemul with traditional spices",
    category: "Traditional",
    className: "md:row-span-2"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1631161357458-d881e27a17ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwaGVyYmFsJTIwdGVhJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU4NDQ4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Purwaceng tea ceremony with traditional teapot",
    category: "Beverages",
    className: ""
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1722396594684-d15b8565ee02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZG9uZXNpYW4lMjBkZXNzZXJ0JTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc1ODQ0ODk5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Carica dessert with coconut ice cream",
    category: "Desserts",
    className: ""
  }
];

const categoryIcons = {
  "Ambiance": Users,
  "Signature Dishes": Utensils,
  "Chef's Special": Award,
  "Traditional": Utensils,
  "Beverages": Camera,
  "Desserts": Camera
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Camera className="h-8 w-8 text-amber-600" />
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium">
              Gallery
            </Badge>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 text-amber-900 font-serif">
            A Feast for
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent block">
              the Eyes
            </span>
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-light">
            Step into our world of culinary artistry and warm hospitality. Every corner tells a story, 
            every dish is a masterpiece, and every moment is crafted to create lasting memories.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {galleryImages.map((image) => {
            const IconComponent = categoryIcons[image.category as keyof typeof categoryIcons] || Camera;
            
            return (
              <div 
                key={image.id} 
                className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${image.className}`}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <Badge className="bg-white/20 text-white border border-white/30 rounded-full backdrop-blur-sm">
                        {image.category}
                      </Badge>
                    </div>
                    <p className="text-white text-sm font-light leading-relaxed">
                      {image.alt}
                    </p>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 bg-amber-600/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-4 w-4 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Utensils className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl text-amber-800 font-serif">50+</div>
              <p className="text-amber-700 font-light">Signature Dishes</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl text-amber-800 font-serif">1000+</div>
              <p className="text-amber-700 font-light">Happy Guests Monthly</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl text-amber-800 font-serif">5</div>
              <p className="text-amber-700 font-light">Culinary Awards</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Camera className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl text-amber-800 font-serif">39</div>
              <p className="text-amber-700 font-light">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Experience CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl mb-4 font-serif">
              Experience the Atmosphere
            </h3>
            <p className="text-xl mb-8 text-amber-100 font-light">
              Visit us to immerse yourself in the authentic ambiance of traditional Wonosobo dining
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-amber-700 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-medium">
                Book Your Experience
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-8 py-3 rounded-full backdrop-blur-sm transition-all font-medium">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}