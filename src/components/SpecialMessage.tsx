import { MessageCircle, Heart, Star, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import foto from "../assets/7.jpg";

export default function SpecialMessage() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-purple-400 p-3 rounded-full shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-gray-700 bg-white px-4 py-2 rounded-full font-semibold shadow-md border-2 border-pink-200" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Special Message
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-800 leading-tight" style={{ fontFamily: "Dancing Script, cursive" }}>
            For My Beloved
            <span className="block text-pink-500">Sherina</span>
          </h2>
        </motion.div>

        {/* Boyfriend's Photo Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-lg opacity-30"></div>
            <img
              src={foto}
              alt="Romantic couple silhouette"
              className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-pink-400 text-white p-2 rounded-full animate-pulse">
              <Heart className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-4 text-gray-600 font-medium" style={{ fontFamily: "Quicksand, sans-serif" }}>
            With all my love ❤️
          </p>
        </motion.div>

        {/* Main Message Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          {/* Decorative background */}
          <div className="absolute -inset-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl blur-lg opacity-20"></div>
          
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-200">
            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 bg-yellow-400 p-2 rounded-full shadow-lg"
              animate={{ 
                rotate: 360,
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="h-4 w-4 text-white" />
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 bg-green-400 p-2 rounded-full shadow-lg"
              animate={{ 
                rotate: -360,
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Star className="h-4 w-4 text-white" />
            </motion.div>

            {/* Message content */}
            <div className="text-center space-y-8">
              {/* Opening */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl text-gray-700 mb-4 font-bold" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  🌟 Happy Birthday, Sherina! 🌟
                </h3>
              </motion.div>

              {/* Main message paragraphs */}
              <motion.div
                className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed"
                style={{ fontFamily: "Quicksand, sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>
                  On this special day, I want to wish you the warmest happy birthday, 
                  Sherina Salsabila. You are such a precious woman in my life, 
                  with your smile that always brightens up my darkest days.
                </p>

                <p>
                  Your cheerful personality, kind heart, and the way you always care for me 
                  makes my life so much more beautiful and meaningful. Every moment with you 
                  is always full of love, laughter and happiness that I will never forget.
                </p>

                <p>
                  I hope in this new year of your life, all your dreams and aspirations can come true. 
                  May happiness always be with you, health always be maintained, and I will always 
                  be there to support every step of your life journey, my love.
                </p>
              </motion.div>

              {/* Heart-felt wishes */}
              <motion.div
                className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-pink-400 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed font-medium" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  "Thank you for being such an amazing girlfriend, who is always there in good times and bad. 
                  Our relationship is one of the most beautiful things I have ever experienced in life. 
                  Happy birthday my darling, may your days always be filled with happiness and love!" 💖
                </p>
              </motion.div>

              {/* Birthday wishes list */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: "🎂", title: "Long Life", text: "May you live long and stay healthy with me" },
                  { icon: "✨", title: "Dreams Come True", text: "I will support all your dreams" },
                  { icon: "💕", title: "Eternal Love", text: "My love for you is forever" }
                ].map((wish, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-4 shadow-lg border border-pink-200 hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl mb-2">{wish.icon}</div>
                    <h4 className="font-semibold text-gray-700 mb-1" style={{ fontFamily: "Quicksand, sans-serif" }}>
                      {wish.title}
                    </h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                      {wish.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Closing message */}
              <motion.div
                className="mt-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-6 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-3" style={{ fontFamily: "Dancing Script, cursive" }}>
                  Love Message for Sherina 💌
                </h4>
                <p className="text-lg leading-relaxed" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  Enjoy this special day with full of happiness, my love! Celebrate every moment, 
                  create beautiful new memories with your loved ones, and don't forget to always smile. 
                  You deserve all the happiness in this world, and I will always try to make you happy. 
                  
                  <span className="block mt-4 font-medium">
                    🎉 Happy Birthday, my beloved Sherina! 🎉
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}