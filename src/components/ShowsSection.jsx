import { motion } from 'framer-motion';

const ShowsSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shows</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Disfruta de presentaciones en vivo en nuestro local</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg transform transition duration-500 hover:shadow-xl"
          >
            <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-yellow-600">🎤</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Presentaciones en Vivo</h3>
            <p className="text-gray-600 text-center">
              Disfruta de música en vivo con artistas locales y nacionales en nuestro escenario exclusivo.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg transform transition duration-500 hover:shadow-xl"
          >
            <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-yellow-600">🎵</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Diversidad Musical</h3>
            <p className="text-gray-600 text-center">
              Desde rock y pop hasta jazz y folk, ofrecemos una variedad de géneros musicales.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg transform transition duration-500 hover:shadow-xl"
          >
            <div className="bg-yellow-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-yellow-600">🎉</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Ambiente Único</h3>
            <p className="text-gray-600 text-center">
              Combina buena música con nuestra deliciosa comida en un ambiente cálido y acogedor.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="#" 
            className="inline-block bg-black text-white px-8 py-4 rounded-md font-bold transition duration-300 tracking-wide hover:bg-gray-800"
          >
            Consultar Próximos Shows
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ShowsSection;