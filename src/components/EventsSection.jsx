import { motion } from 'framer-motion';

const EventsSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Eventos</h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Celebra tus momentos especiales en nuestro local</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <img
              src="/pizzafull.jpg"
              alt="Birthday party at 4Ceros"
              className="rounded-xl shadow-xl w-full h-auto transform transition duration-500 hover:scale-105"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Fiestas de Cumpleaños</h3>
            <p className="mb-6 text-gray-700 leading-relaxed text-lg">
              Transforma tu celebración en una experiencia única en 4Ceros. Contamos con el espacio ideal para organizar 
              fiestas de cumpleaños inolvidables para niños y adultos. Nuestro ambiente acogedor y deliciosa comida harán 
              que cada momento sea especial.
            </p>
            <p className="mb-8 text-gray-700 leading-relaxed text-lg">
              Ofrecemos paquetes personalizados para eventos, con opciones de menú especialmente diseñadas para los más pequeños 
              y adultos. ¡Haz realidad tu fiesta de ensueño en 4Ceros!
            </p>
            <a href="#" className="inline-block bg-black text-white px-8 py-4 rounded-md font-bold transition duration-300 tracking-wide hover:bg-gray-800">Reservar Evento</a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EventsSection;