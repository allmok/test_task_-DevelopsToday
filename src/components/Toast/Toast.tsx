import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Toast.css';
import toastManager, { type ToastProps } from './toastManager';

const ToastItem: React.FC<ToastProps> = ({ id, message, type, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => toastManager.remove(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration]);

  const toastClassName = `toast toast-${type}`;

  return (
    <motion.div
      className={toastClassName}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2, ease: 'easeOut' } }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      layout
    >
      <p className="toast-message">{message}</p>
      <button className="toast-close-btn" onClick={() => toastManager.remove(id)}>
        &times;
      </button>
      <div className="toast-progress" style={{ animation: `progress ${duration}ms linear forwards` }} />
    </motion.div>
  );
};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    const unsubscribe = toastManager.subscribe(setToasts);
    return () => unsubscribe();
  }, []);

  return createPortal(
    <div className="toast-container">
      <AnimatePresence>
        {toasts.map((t) => (
          <ToastItem key={t.id} {...t} />
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
};
