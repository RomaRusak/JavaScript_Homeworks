import { AnimatePresence, motion } from 'framer-motion';
import style from './infoPromotions.module.css';

const InfoPromotions = () => {
  return (
    <AnimatePresence>
      <motion.div
        className={style.infoPromotionsWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>Акции</h2>
      </motion.div>
    </AnimatePresence>
  );
};

export default InfoPromotions;
