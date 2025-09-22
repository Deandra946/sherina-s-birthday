import { Utensils, Leaf, Flame, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const menuItems = [
  {
    id: 1,
    name: "Mie Ongklok",
    category: "Main Course",
    description: "Traditional Wonosobo noodle soup with rich coconut broth, bean sprouts, and aromatic spices. A comfort food that warms the soul.",
    price: "35,000",
    image: "https://images.unsplash.com/photo-1551982932-72b68d7a9ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbm9vZGxlJTIwc291cCUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1ODQ0ODk4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Signature", "Traditional"],
    prepTime: "15 min",
    spiceLevel: 2,
    icon: Utensils
  },
  {
    id: 2,
    name: "Tempe Kemul",
    category: "Appetizer",
    description: "Crispy fermented soybean fritters with traditional spices, served with fresh vegetables and spicy sambal. A perfect starter.",
    price: "25,000",
    image: "https://images.unsplash.com/photo-1562693750-17a7ac007eb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZG9uZXNpYW4lMjB0ZW1wZWglMjBmb29kfGVufDF8fHx8MTc1ODQ0ODk4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Vegetarian", "Crispy"],
    prepTime: "10 min",
    spiceLevel: 3,
    icon: Leaf
  },
  {
    id: 3,
    name: "Carica Dessert",
    category: "Dessert",
    description: "Sweet candied papaya from Dieng highlands, served with coconut ice cream and palm sugar syrup. A refreshing end to your meal.",
    price: "20,000",
    image: "https://images.unsplash.com/photo-1722396594684-d15b8565ee02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZG9uZXNpYW4lMjBkZXNzZXJ0JTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc1ODQ0ODk5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Local Specialty", "Sweet"],
    prepTime: "5 min",
    spiceLevel: 0,
    icon: Leaf
  },
  {
    id: 4,
    name: "Purwaceng Tea",
    category: "Beverage",
    description: "Premium herbal tea from Wonosobo highlands, known for its energizing properties and earthy flavor. Served hot with local honey.",
    price: "18,000",
    image: "https://images.unsplash.com/photo-1631161357458-d881e27a17ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwaGVyYmFsJTIwdGVhJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU4NDQ4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Herbal", "Energizing"],
    prepTime: "8 min",
    spiceLevel: 0,
    icon: Leaf
  },
  {
    id: 5,
    name: "Gudeg Wonosobo",
    category: "Main Course",
    description: "Slow-cooked jackfruit in coconut milk and palm sugar, served with rice, chicken, and traditional crackers. A royal feast.",
    price: "42,000",
    image: "https://images.unsplash.com/photo-1722995690313-9ef561d30143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwaW5kb25lc2lhbiUyMGN1aXNpbmUlMjBwbGF0aW5nfGVufDF8fHx8MTc1ODQ0ODk5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Chef's Special", "Traditional"],
    prepTime: "25 min",
    spiceLevel: 1,
    icon: Flame
  },
  {
    id: 6,
    name: "Sate Buntel",
    category: "Main Course",
    description: "Grilled minced lamb skewers wrapped in lamb fat, served with sweet soy sauce and rice cakes. A highland specialty.",
    price: "45,000",
    image: "https://images.unsplash.com/photo-1551982932-72b68d7a9ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbm9vZGxlJTIwc291cCUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1ODQ0ODk4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Grilled", "Protein"],
    prepTime: "20 min",
    spiceLevel: 2,
    icon: Flame
  }
];

export default function FeaturedMenu() {
  const renderSpiceLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3].map((i) => (
          <Flame
            key={i}
            className={`h-3 w-3 ${
              i <= level ? 'text-red-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Utensils className="h-8 w-8 text-amber-600" />
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium">
              Featured Menu
            </Badge>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 text-amber-900 font-serif">
            Culinary
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent block">
              Heritage
            </span>
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-light">
            Discover the authentic flavors of Wonosobo through our carefully curated selection 
            of traditional dishes, each prepared with recipes passed down through generations.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={item.id} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <IconComponent className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full shadow-lg">
                    <span className="text-sm font-medium">{item.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      {item.tags.map((tag, idx) => (
                        <Badge 
                          key={idx} 
                          className="bg-white/90 text-amber-800 border border-amber-200 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl text-amber-900 font-serif">
                      {item.name}
                    </h3>
                    <span className="text-xl text-amber-700 font-medium">
                      Rp {item.price}
                    </span>
                  </div>
                  
                  <p className="text-amber-700 mb-4 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Menu Item Details */}
                  <div className="flex justify-between items-center mb-6 text-sm text-amber-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{item.prepTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>Spice:</span>
                      {renderSpiceLevel(item.spiceLevel)}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full group-hover:shadow-xl transition-all font-medium"
                  >
                    Add to Order
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Menu CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl mb-4 font-serif">
              Complete Menu Available
            </h3>
            <p className="text-xl mb-8 text-amber-100 font-light">
              Explore our full selection of traditional dishes, seasonal specialties, and beverages
            </p>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-amber-700 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all font-medium"
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}