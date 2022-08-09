import {motion, AnimatePresence} from 'framer-motion';

const variants = {
  hidden: {opacity: 0, x: 0, y: 20},
  enter: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: 0, y: -20},
};

const Message = ({isVisible, children}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{duration: 0.4, type: 'easeInOut'}}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export {Message};
