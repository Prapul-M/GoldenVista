"use client";

import Link from 'next/link';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/ImageGallery';
import PropertyFeature from '@/components/PropertyFeature';
import ContactForm from '@/components/ContactForm';
import { penthouseImages, penthouseDetails } from '@/data/propertyData';
import { Metadata } from 'next';

// Metadata is defined but not exported from client components
const pageMetadata = {
  title: 'Luxury Penthouse – The Terraces by Anokha Estates | GoldenVista',
  description: 'Indulge in unparalleled luxury with this stunning 3 BHK penthouse at The Terraces, offering panoramic views of Goa\'s picturesque landscape.',
};

export default function PenthousePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-white hover:text-primary transition-colors mb-4 inline-block">
              &larr; Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif text-white font-medium mb-4">
              {penthouseDetails.title}
            </h1>
            <p className="text-gray-300 mb-2">
              Pilerne, Goa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery & Details Section */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Gallery - Takes up 2/3 on large screens */}
            <div className="lg:col-span-2">
              <ImageGallery images={penthouseImages} />
            </div>

            {/* Property Details - Takes up 1/3 on large screens */}
            <motion.div
              className="bg-white p-8 shadow-lg h-fit sticky top-32"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl mb-6">Property Details</h2>
              <div className="flex justify-between mb-6">
                <div className="text-center">
                  <FaBed className="text-primary text-3xl mx-auto mb-2" />
                  <p className="text-gray-500">Bedrooms</p>
                  <p className="text-xl font-medium">{penthouseDetails.bedrooms}</p>
                </div>
                <div className="text-center">
                  <FaBath className="text-primary text-3xl mx-auto mb-2" />
                  <p className="text-gray-500">Bathrooms</p>
                  <p className="text-xl font-medium">{penthouseDetails.bathrooms}</p>
                </div>
                <div className="text-center">
                  <FaRulerCombined className="text-primary text-3xl mx-auto mb-2" />
                  <p className="text-gray-500">Area</p>
                  <p className="text-xl font-medium">{penthouseDetails.size}</p>
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="text-2xl text-primary font-bold">{penthouseDetails.price}</span>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="btn-primary w-full text-center block mb-4"
              >
                Request Information
              </Link>
              
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center text-primary hover:text-secondary transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp: +91 9876543210
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Property Description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="section-title text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About This Property
            </motion.h2>
            
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                {penthouseDetails.description}
              </p>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                This penthouse at The Terraces is a masterpiece of luxury design, featuring floor-to-ceiling windows that frame the stunning Goan landscape. The open-concept layout creates an airy, light-filled space that flows seamlessly from the living areas to the private terrace.
              </p>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                The exclusive Terraces complex offers residents a sanctuary of comfort and convenience, with premium amenities and exceptional security in one of Goa's most prestigious neighborhoods.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Property Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {penthouseDetails.features.map((feature, index) => (
              <PropertyFeature
                key={index}
                icon={<span>{feature.icon}</span>}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Amenities
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {penthouseDetails.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
} 