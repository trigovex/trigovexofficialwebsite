import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SuccessModal.css';

const SuccessModal = ({ isOpen, onClose, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="success-modal"
            initial={{ scale: 0.5, opacity: 0, y: '-50%', x: '-50%' }}
            animate={{ scale: 1, opacity: 1, y: '-50%', x: '-50%' }}
            exit={{ scale: 0.5, opacity: 0, y: '-50%', x: '-50%' }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <div className="modal-content">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Success!</h3>
              <p>{message}</p>
              <button 
                className="btn btn-primary"
                onClick={onClose}
                autoFocus
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal; 