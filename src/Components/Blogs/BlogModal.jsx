import React from "react";
import { motion } from "framer-motion";
import "./BlogModal.css";

const BlogModal = ({ isOpen, onClose, blog }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={blog.image} alt={blog.title} className="modal-image" />
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default BlogModal;
