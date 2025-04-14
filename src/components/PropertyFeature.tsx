"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface PropertyFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PropertyFeature = ({ icon, title, description }: PropertyFeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6 bg-white shadow-lg"
    >
      <div className="text-primary mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default PropertyFeature; 