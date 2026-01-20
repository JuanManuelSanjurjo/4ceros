import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/papayburger.jpg"
          alt="4Ceros Restaurant"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <img 
              src="/4ceros.jpg" 
              alt="4Ceros Logo" 
              className="mx-auto h-24 w-auto rounded-full border-4 border-yellow-500"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Bienvenidos a 4Ceros
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="h-1 bg-yellow-500 mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl text-white mb-10 max-w-3xl mx-auto"
          >
            Tu lugar favorito para disfrutar de deliciosas hamburguesas y eventos inolvidables
          </motion.p>
          
          <motion.a 
            href="/menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black text-white px-8 py-4 rounded-md font-bold transition duration-300 tracking-wide hover:bg-gray-800"
          >
            Ver Nuestro Menú
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;