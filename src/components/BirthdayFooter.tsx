import { Heart, Users, Gift, Cake } from "lucide-react";
import { motion } from "motion/react";

export default function BirthdayFooter() {
  return (
    <footer className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 text-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 bg-white/10 w-20 h-20 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            rotate: 360
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 right-20 bg-white/10 w-16 h-16 rounded-full"
          animate={{ 
            y: [0, -15, 0],
            rotate: -360
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 bg-white/10 w-12 h-12 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 text-center">
          {/* Icons row */}
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { Icon: Heart, color: "bg-pink-400", delay: 0 },
              { Icon: Cake, color: "bg-purple-400", delay: 0.2 },
              { Icon: Gift, color: "bg-blue-400", delay: 0.4 },
              { Icon: Users, color: "bg-green-400", delay: 0.6 }
            ].map(({ Icon, color, delay }, index) => (
              <motion.div
                key={index}
                className={`${color} p-4 rounded-full shadow-lg`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: delay,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <Icon className="h-8 w-8 text-white" />
              </motion.div>
            ))}
          </motion.div>

          {/* Main message */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold" style={{ fontFamily: "Dancing Script, cursive" }}>
              With All My Love,
            </h2>
            <p className="text-2xl md:text-3xl text-pink-200 font-semibold" style={{ fontFamily: "Quicksand, sans-serif" }}>
              from your boyfriend 💕
            </p>
          </motion.div>

          {/* Heartfelt message */}
          <motion.div
            className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: "Quicksand, sans-serif" }}>
              I hope this simple birthday website can be a sweet little surprise for you, my darling. 
              I hope your special day is filled with laughter, happiness, and beautiful moments 
              that we will always remember together. You are the most beautiful gift in my life! ✨
            </p>
          </motion.div>

          {/* Love messages */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {[
              { title: "First Love", message: "You are my first and last love 💖" },
              { title: "Life Together", message: "I hope we can be together forever, darling 🌟" },
              { title: "Our Future", message: "I want to build a beautiful future with you 🤲" }
            ].map((love, index) => (
              <motion.div
                key={index}
                className="bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="font-semibold text-pink-200 mb-2" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  {love.title}
                </h4>
                <p className="text-sm text-white/90 italic" style={{ fontFamily: "Inter, sans-serif" }}>
                  "{love.message}"
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Birthday stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            {[
              { number: "∞", label: "Love For You" },
              { number: "100%", label: "Commitment" },
              { number: "365", label: "Days of Love" },
              { number: "1", label: "My Beloved Sherina" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.9 + (index * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1" style={{ fontFamily: "Quicksand, sans-serif" }}>
                  {stat.number}
                </div>
                <p className="text-sm text-pink-200" style={{ fontFamily: "Inter, sans-serif" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Final emoji celebration */}
          <motion.div
            className="flex justify-center space-x-2 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            viewport={{ once: true }}
          >
            {['🎉', '🎂', '💖', '🌟', '🎈', '🎊', '🥳', '💕'].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-2xl md:text-3xl"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-white/20 text-center">
          <motion.p 
            className="text-pink-200" 
            style={{ fontFamily: "Quicksand, sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            viewport={{ once: true }}
          >
            Made with 💖 for my beloved girlfriend Sherina Salsabila | Birthday 2025 ✨
          </motion.p>
        </div>
      </div>
    </footer>
  );
}