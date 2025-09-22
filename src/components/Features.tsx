import { Thermometer, Camera, TreePine, Coffee, Users, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Thermometer,
    title: "Cool Climate",
    description: "Escape the heat with refreshing mountain air at 2,000+ meters above sea level",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Camera,
    title: "Instagram-Worthy",
    description: "Capture stunning landscapes, ancient temples, and vibrant crater lakes",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: TreePine,
    title: "Rich Nature",
    description: "Explore diverse ecosystems from volcanic highlands to pristine forests",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Coffee,
    title: "Local Culture",
    description: "Taste authentic Javanese cuisine and experience warm local hospitality",
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Safe and accessible attractions suitable for all ages and fitness levels",
    color: "text-pink-500",
    bgColor: "bg-pink-50"
  },
  {
    icon: Shield,
    title: "Easy Access",
    description: "Well-maintained roads and facilities make exploring convenient and comfortable",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  }
];

export default function Features() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-gray-800">
            Why Choose
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
              Wonosobo?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes Wonosobo the perfect destination for nature lovers, 
            adventure seekers, and anyone looking to escape into Indonesia's natural beauty.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md rounded-2xl overflow-hidden hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl mb-4 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl">2,000m+</div>
              <p className="text-green-100">Elevation</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl">15°C</div>
              <p className="text-blue-100">Average Temperature</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl">10+</div>
              <p className="text-purple-100">Attractions</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl">365</div>
              <p className="text-pink-100">Days of Beauty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}