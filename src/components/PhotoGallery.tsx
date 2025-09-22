import { Camera, Heart, Star } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import image1 from "../assets/1.JPG";
import image2 from "../assets/2.JPG";
import image3 from "../assets/3.JPG";
import image4 from "../assets/4.JPG";

const galleryImages = [
  {
    id: 1,
    src: image1,
    alt: "Your beautiful smile every day",
    caption: "Beautiful Smile"
  },
  {
    id: 2,
    src: image2,
    alt: "Every happy moment we share together",
    caption: "Happy Moments Together"
  },
  {
    id: 3,
    src: image3,
    alt: "Graduation day celebration",
    caption: "Graduation day"
  },
  {
    id: 4,
    src: image4,
    alt: "Anniversary celebration with love",
    caption: "Anniversary Celebration"
  }
];

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-pink-400 p-3 rounded-full shadow-lg">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <span className="text-gray-700 bg-white px-4 py-2 rounded-full font-semibold shadow-md border-2 border-pink-200" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Memory Gallery
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 leading-tight" style={{ fontFamily: "Dancing Script, cursive" }}>
            Beautiful Moments
            <span className="block text-pink-500">For Sherina</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "Quicksand, sans-serif" }}>
            A collection of special photos that capture the happiness and warmth 
            of our beautiful moments together ✨
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Main Image */}
              <div className="relative aspect-square">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium text-lg mb-2" style={{ fontFamily: "Quicksand, sans-serif" }}>
                      {image.caption}
                    </p>
                    <p className="text-white/80 text-sm">
                      {image.alt}
                    </p>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-pink-500/80 backdrop-blur-sm p-2 rounded-full">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Animated border frame */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-pink-400 rounded-3xl transition-all duration-300"></div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-2 -left-2 bg-yellow-400 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatDelay: 1 
                }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 bg-purple-400 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100"
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 0.5 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Gallery Stats */}
        <motion.div
          className="mt-16 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div 
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-pink-200 transition-colors">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <div className="text-3xl text-pink-500 font-bold" style={{ fontFamily: "Quicksand, sans-serif" }}>∞</div>
              <p className="text-gray-700 font-medium" style={{ fontFamily: "Inter, sans-serif" }}>Memories Together</p>
            </motion.div>
            
            <motion.div 
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-200 transition-colors">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl text-purple-500 font-bold" style={{ fontFamily: "Quicksand, sans-serif" }}>100%</div>
              <p className="text-gray-700 font-medium" style={{ fontFamily: "Inter, sans-serif" }}>Happiness</p>
            </motion.div>
            
            <motion.div 
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl text-blue-500 font-bold" style={{ fontFamily: "Quicksand, sans-serif" }}>24/7</div>
              <p className="text-gray-700 font-medium" style={{ fontFamily: "Inter, sans-serif" }}>Bright Smiles</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Memory Message */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl mb-4 font-bold" style={{ fontFamily: "Dancing Script, cursive" }}>
              Every Photo Has A Story 📸
            </h3>
            <p className="text-lg text-pink-100 max-w-2xl mx-auto" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Each of these images represents the happy moments we've shared together, my darling. 
              I hope this special day adds to our collection of beautiful memories as a loving couple! 💕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}