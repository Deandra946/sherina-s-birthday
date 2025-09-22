import { MapPin, Clock, Camera, Mountain, Waves, Sunrise } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const destinations = [
  {
    id: 1,
    name: "Dieng Plateau",
    description: "Ancient temple complex surrounded by volcanic craters and colorful lakes. A mystical highland experience at 2,000m above sea level.",
    image: "https://images.unsplash.com/photo-1644496580843-07a889de9072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWVuZyUyMHBsYXRlYXUlMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzU4NDQ4MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "Full Day",
    highlights: ["Ancient Temples", "Volcanic Craters", "Cool Climate"],
    icon: Mountain,
    gradient: "from-green-500 to-blue-600"
  },
  {
    id: 2,
    name: "Telaga Warna",
    description: "Marvel at the ever-changing colors of this magical crater lake. The sulfur content creates stunning hues from turquoise to emerald.",
    image: "https://images.unsplash.com/photo-1629767904217-7ae28b36c195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGxha2UlMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzU4NDQ4MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "Half Day",
    highlights: ["Colorful Waters", "Photography", "Nature Walk"],
    icon: Waves,
    gradient: "from-cyan-500 to-green-500"
  },
  {
    id: 3,
    name: "Mount Sikunir",
    description: "Witness the most spectacular sunrise in Central Java from this easily accessible peak. Golden hour views over the Dieng highlands await.",
    image: "https://images.unsplash.com/photo-1611656600199-4d3a8845c233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VudGFpbiUyMHN1bnJpc2UlMjBqYXZhfGVufDF8fHx8MTc1ODQ0ODE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "Early Morning",
    highlights: ["Golden Sunrise", "Mountain Views", "Easy Trek"],
    icon: Sunrise,
    gradient: "from-orange-500 to-yellow-500"
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="h-8 w-8 text-green-600" />
            <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
              Popular Destinations
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl mb-6 text-green-800">
            Explore Wonosobo's
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
              Natural Wonders
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From mystical highlands to colorful crater lakes and breathtaking sunrises, 
            discover the diverse natural beauty that makes Wonosobo a unique destination.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => {
            const IconComponent = destination.icon;
            return (
              <Card 
                key={destination.id} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${destination.gradient} p-3 rounded-full shadow-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1 text-sm text-gray-700">
                      <Clock className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 text-gray-800">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {destination.highlights.map((highlight, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-green-50 text-green-700 border border-green-200 rounded-full px-3 py-1"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${destination.gradient} hover:shadow-lg text-white rounded-full group-hover:shadow-xl transition-all`}
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    Explore {destination.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-4xl mb-4">
              Ready for an Adventure?
            </h3>
            <p className="text-lg md:text-xl mb-8 text-green-50">
              Plan your perfect trip to Wonosobo and create unforgettable memories
            </p>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-green-600 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all"
            >
              Start Planning Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}