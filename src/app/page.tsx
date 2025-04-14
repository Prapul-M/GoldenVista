"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/villa-pilerne/VILLA 4-1.jpg"
            alt="Luxury Real Estate in Pilerne, Goa"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center text-white px-4 sm:px-6">
          <motion.h1 
            className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Live Where the Ocean Whispers
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Exclusive luxury properties in Pilerne, Goa. Where tranquility meets elegance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/villa" className="btn-primary w-full sm:w-auto">
              Explore Villa
            </Link>
            <Link href="/penthouse" className="btn-secondary w-full sm:w-auto">
              Explore Penthouse
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="mb-2">Scroll to Discover</p>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>
      
      {/* Property Preview Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container-custom">
          <motion.h2 
            className="section-title text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Exclusive Properties
          </motion.h2>
          
          <motion.p 
            className="section-subtitle text-center px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover elegance and comfort in these handpicked luxury properties in Pilerne, Goa.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-16 px-4 sm:px-6">
            {/* Villa Preview */}
            <motion.div
              className="relative group overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
                <Image
                  src="/images/villa-pilerne/VILLA 4-1.jpg"
                  alt="Luxury Villa in Pilerne"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white">
                  <h3 className="font-serif text-2xl sm:text-3xl mb-1 sm:mb-2">Luxury Villa</h3>
                  <p className="mb-2 sm:mb-4 text-sm sm:text-base">3 BHK, 2,258.27 sq ft, Pilerne</p>
                  <p className="text-xl sm:text-2xl text-primary font-medium">₹4.8 Cr</p>
                </div>
              </div>
              <Link 
                href="/villa" 
                className="absolute inset-0 z-10 flex items-center justify-center bg-primary/0 opacity-0 group-hover:bg-primary/80 group-hover:opacity-100 transition-all duration-300"
              >
                <span className="border-2 border-white text-white px-4 sm:px-6 py-2 font-medium">View Details</span>
              </Link>
            </motion.div>
            
            {/* Penthouse Preview */}
            <motion.div
              className="relative group overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
                <Image
                  src="/images/penthouse-terraces/1.jpg"
                  alt="Luxury Penthouse in Pilerne"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white">
                  <h3 className="font-serif text-2xl sm:text-3xl mb-1 sm:mb-2">Luxury Penthouse</h3>
                  <p className="mb-2 sm:mb-4 text-sm sm:text-base">3 BHK, 2,000 sq ft, The Terraces</p>
                  <p className="text-xl sm:text-2xl text-primary font-medium">₹4.8 Cr</p>
                </div>
              </div>
              <Link 
                href="/penthouse" 
                className="absolute inset-0 z-10 flex items-center justify-center bg-primary/0 opacity-0 group-hover:bg-primary/80 group-hover:opacity-100 transition-all duration-300"
              >
                <span className="border-2 border-white text-white px-4 sm:px-6 py-2 font-medium">View Details</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">Experience Luxury Living in Goa</h2>
              <p className="text-gray-600 mb-6">
                Located in the serene neighborhood of Pilerne, our properties offer the perfect blend of luxury and comfort with easy access to Goa's pristine beaches.
              </p>
              <p className="text-gray-600 mb-6">
                Each property is meticulously designed with premium finishes and attention to detail, providing an exclusive living experience.
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                Contact Us
              </Link>
            </motion.div>
            
            <motion.div
              className="relative h-[350px] md:h-[500px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/images/villa-pilerne/VILLA 4-3.jpg"
                alt="Luxury Interior"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-secondary text-white">
        <div className="container-custom text-center px-4 sm:px-6">
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Experience Luxury Living?
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Schedule a viewing of our exclusive properties in Pilerne, Goa today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-white hover:text-primary transition-colors duration-300">
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
} 