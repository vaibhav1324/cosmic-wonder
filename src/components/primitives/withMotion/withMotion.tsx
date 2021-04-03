import React from 'react';
import { motion } from 'framer-motion';

const withMotion = (Component: React.FC): React.FC => {
  const withProps = (props: any) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <Component {...props} />
      </motion.div>
    );
  };
  return withProps;
};

export default withMotion;
