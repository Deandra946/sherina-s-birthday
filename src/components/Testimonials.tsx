import { Star, Quote, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    role: "Food Blogger",
    location: "Jakarta",
    rating: 5,
    text: "Rasa Wonosobo is a hidden gem that perfectly captures the essence of traditional Indonesian highland cuisine. The Mie Ongklok was absolutely divine - rich, aromatic, and deeply satisfying. The attention to authenticity is remarkable.",
    highlight: "Authentic flavors that transport you to the highlands",
    avatar: "SW"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Travel Enthusiast", 
    location: "Singapore",
    rating: 5,
    text: "As someone who travels extensively for authentic local cuisine, I can confidently say this restaurant exceeded all expectations. The Purwaceng tea was a revelation, and the ambiance made me feel like I was dining in a traditional Javanese home.",
    highlight: "Exceptional hospitality and cultural immersion",
    avatar: "DC"
  },
  {
    id: 3,
    name: "Maria Santos",
    role: "Culinary Student",
    location: "Yogyakarta",
    rating: 5,
    text: "The dedication to preserving traditional cooking methods is inspiring. Watching the chefs prepare Tempe Kemul with such precision and care was educational. This is how cultural heritage should be preserved - with love and respect.",
    highlight: "Educational experience about traditional techniques",
    avatar: "MS"
  },
  {
    id: 4,
    name: "Ahmad Rizki",
    role: "Local Food Critic",
    location: "Semarang", 
    rating: 5,
    text: "After visiting countless restaurants across Central Java, Rasa Wonosobo stands out for its unwavering commitment to authenticity. The Gudeg Wonosobo here is prepared exactly as my grandmother used to make it. Simply exceptional.",
    highlight: "Authentic taste that evokes childhood memories",
    avatar: "AR"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "International Tourist",
    location: "Australia",
    rating: 5,
    text: "This restaurant provided the most memorable dining experience of our Indonesian journey. The staff's knowledge about each dish's history and cultural significance made our meal truly special. The Carica dessert was the perfect ending.",
    highlight: "Educational and delicious cultural experience",
    avatar: "LT"
  },
  {
    id: 6,
    name: "Budi Santoso",
    role: "Wonosobo Native",
    location: "Wonosobo",
    rating: 5,
    text: "As someone born and raised in Wonosobo, I'm proud that Rasa Wonosobo represents our culinary heritage so beautifully. They've maintained the authentic flavors while presenting them with such elegance. A true treasure.",
    highlight: "Proud representation of local culinary heritage",
    avatar: "BS"
  }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating ? 'text-amber-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Heart className="h-8 w-8 text-amber-600" />
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium">
              Guest Stories
            </Badge>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 text-amber-900 font-serif">
            What Our Guests
            <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent block">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed font-light">
            Every review tells a story of authentic flavors, warm hospitality, and unforgettable 
            dining experiences that connect our guests to the heart of Wonosobo culture.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 rounded-3xl overflow-hidden relative"
            >
              {/* Elegant frame decoration */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="mb-6">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-amber-600" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  {renderStars(testimonial.rating)}
                  <Badge className="bg-amber-600 text-white border-0 rounded-full px-3 py-1">
                    Verified Guest
                  </Badge>
                </div>

                {/* Testimonial text */}
                <blockquote className="text-amber-800 mb-6 leading-relaxed font-light italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Highlight */}
                <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl">
                  <p className="text-amber-700 text-sm font-medium">
                    💫 "{testimonial.highlight}"
                  </p>
                </div>

                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-medium">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-amber-900 font-medium">
                      {testimonial.name}
                    </h4>
                    <p className="text-amber-600 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-amber-500 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Elegant corner decoration */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl mb-4 font-serif">
              Consistently Excellent
            </h3>
            <p className="text-xl text-amber-100 font-light">
              Trusted by locals and travelers alike for authentic Wonosobo cuisine
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="flex justify-center">
                {renderStars(5)}
              </div>
              <div className="text-3xl font-serif">5.0</div>
              <p className="text-amber-100 font-light">Average Rating</p>
            </div>
            
            <div className="space-y-3">
              <div className="text-3xl font-serif">200+</div>
              <p className="text-amber-100 font-light">Verified Reviews</p>
            </div>
            
            <div className="space-y-3">
              <div className="text-3xl font-serif">98%</div>
              <p className="text-amber-100 font-light">Recommend Us</p>
            </div>
            
            <div className="space-y-3">
              <div className="text-3xl font-serif">45%</div>
              <p className="text-amber-100 font-light">Return Visitors</p>
            </div>
          </div>
        </div>

        {/* Review CTA */}
        <div className="text-center mt-12">
          <p className="text-amber-800 mb-6 font-light">
            Have you dined with us? We'd love to hear about your experience!
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-medium">
            Share Your Review
          </button>
        </div>
      </div>
    </section>
  );
}