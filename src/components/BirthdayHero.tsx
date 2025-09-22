import { Heart, Gift, Cake } from "lucide-react";
import { motion } from "motion/react";
import exampleImage from 'figma:asset/7ccfdccb875ad85cae9a5adc86ce76eb19557d20.png';

// Floating balloons animation
const balloons = [
  { id: 1, delay: 0, x: "10%", color: "bg-pink-400" },
  { id: 2, delay: 0.5, x: "20%", color: "bg-purple-400" },
  { id: 3, delay: 1, x: "80%", color: "bg-blue-400" },
  { id: 4, delay: 1.5, x: "90%", color: "bg-yellow-400" },
  { id: 5, delay: 2, x: "70%", color: "bg-green-400" },
];

// Confetti particles
const confetti = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 3 + Math.random() * 2,
  color: ['bg-pink-400', 'bg-purple-400', 'bg-blue-400', 'bg-yellow-400', 'bg-green-400'][Math.floor(Math.random() * 5)]
}));

export default function BirthdayHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300/30 via-purple-300/30 to-blue-300/30 animate-pulse"></div>
      
      {/* Floating balloons */}
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className={`absolute bottom-0 w-8 h-12 ${balloon.color} rounded-full opacity-70`}
          style={{ left: balloon.x }}
          initial={{ y: "100vh", rotate: 0 }}
          animate={{ 
            y: "-20vh", 
            rotate: [0, 10, -10, 0],
            x: [0, 20, -20, 0]
          }}
          transition={{
            duration: 8,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-8 bg-current rounded-full"></div>
          <div className="w-0.5 h-4 bg-gray-400 mx-auto"></div>
        </motion.div>
      ))}

      {/* Falling confetti */}
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute top-0 w-2 h-2 ${piece.color} rounded-sm`}
          style={{ left: `${piece.left}%` }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{ 
            y: "100vh", 
            rotate: 360,
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Decorative icons */}
            <motion.div 
              className="flex justify-center space-x-4 mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            >
              <div className="bg-pink-400 p-3 rounded-full shadow-lg">
                <Cake className="h-6 w-6 text-white" />
              </div>
              <div className="bg-purple-400 p-3 rounded-full shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="bg-blue-400 p-3 rounded-full shadow-lg">
                <Gift className="h-6 w-6 text-white" />
              </div>
            </motion.div>

            {/* Main title */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight"
              style={{ fontFamily: "Dancing Script, cursive" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1, type: "spring" }}
            >
              Happy Birthday,
              <span className="block text-pink-500">Sherina Salsabila!</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "Quicksand, sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              May your special day be filled with happiness and love 💖
            </motion.p>

            {/* Birthday message */}
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-pink-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "Quicksand, sans-serif" }}>
                🎉 Today is your special day, my love! I hope this new year brings you happiness, 
                health, and all your dreams come true. Thank you for being such an amazing 
                woman in my life! 🌟
              </p>
            </motion.div>

            {/* Animated age or celebration text */}
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <motion.div
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-semibold" style={{ fontFamily: "Quicksand, sans-serif" }}>🎂 Another Year Wiser! 🎂</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              
              {/* Main photo */}
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img
                  src={exampleImage}
                  alt="Sherina Salsabila"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                
                {/* Photo overlay effects */}
                <div className="absolute top-6 right-6 bg-pink-400 text-white p-2 rounded-full animate-bounce">
                  <Heart className="h-4 w-4" />
                </div>
                <div className="absolute bottom-6 left-6 bg-purple-400 text-white p-2 rounded-full animate-pulse">
                  <Cake className="h-4 w-4" />
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -left-4 bg-yellow-400 w-8 h-8 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-green-400 w-6 h-6 rounded-full"
                animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Birthday wishes from boyfriend */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <p className="text-2xl font-semibold text-gray-700 mb-4" style={{ fontFamily: "Quicksand, sans-serif" }}>
            🎈 Happy Birthday My Darling! 🎈
          </p>
          <div className="flex justify-center space-x-2">
            {['🎉', '💖', '🎂', '🌟', '🎁', '🎊'].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-4xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}