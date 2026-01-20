import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900">
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <img
              src="/4ceros.jpg"
              alt="4Ceros Logo"
              className="mx-auto h-24 w-auto rounded-full border-4 border-yellow-500"
            />
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Bienvenidos a 4Ceros
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            transition={{ delay: 0.6 }}
            className="h-1 bg-yellow-500 mx-auto mb-6"
            style={{ width: 0 }}
            animate={{ width: 80 }}
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            transition={{ delay: 0.8 }}
            className="text-xl text-white mb-10 max-w-3xl mx-auto"
          >
            Tu lugar favorito para disfrutar de deliciosas hamburguesas y eventos inolvidables
          </motion.p>
          
          <motion.a 
            href="/menu"
            variants={itemVariants}
            transition={{ delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black text-white px-8 py-4 rounded-md font-bold transition duration-300 tracking-wide hover:bg-gray-800"
          >
            Ver Nuestro Menú
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;