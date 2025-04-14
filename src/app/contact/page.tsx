"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

// Metadata is defined but not exported from client components
const pageMetadata = {
  title: 'Contact Us | GoldenVista Luxury Properties in Pilerne, Goa',
  description: 'Get in touch with us to learn more about our luxury villa and penthouse properties in Pilerne, Goa.',
};

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-gray-300 mb-2">
              Get in touch to learn more about our luxury properties in Pilerne, Goa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-accent">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-8 shadow-xl h-full">
                <h2 className="font-serif text-3xl mb-8">Our Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-1">Address</h3>
                      <p className="text-gray-600">Pilerne, North Goa, Goa, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-1">Phone</h3>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-xl mb-1">Email</h3>
                      <p className="text-gray-600">info@goldenvista.com</p>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="mt-8 h-[300px] relative rounded-lg overflow-hidden">
                  <Image 
                    src="/images/pilerne-map.jpg" 
                    alt="Map of Pilerne, Goa" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href="https://maps.google.com/?q=Pilerne+Goa" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-secondary transition-colors duration-300"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Properties
          </motion.h2>
          
          <motion.p 
            className="section-subtitle text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our exclusive luxury properties in Pilerne, Goa
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Villa Card */}
            <motion.div
              className="bg-white shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-64">
                <Image
                  src="/images/villa-pilerne/villa-1.jpg"
                  alt="Luxury Villa in Pilerne"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">Luxury Villa</h3>
                <p className="text-gray-600 mb-4">3 BHK, 2,258.27 sq ft villa with premium amenities in Pilerne, Goa.</p>
                <Link href="/villa" className="btn-primary inline-block">
                  View Details
                </Link>
              </div>
            </motion.div>
            
            {/* Penthouse Card */}
            <motion.div
              className="bg-white shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-64">
                <Image
                  src="/images/penthouse-terraces/penthouse-1.jpg"
                  alt="Luxury Penthouse in Pilerne"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">Luxury Penthouse</h3>
                <p className="text-gray-600 mb-4">3 BHK, 2,000 sq ft penthouse at The Terraces with panoramic views.</p>
                <Link href="/penthouse" className="btn-primary inline-block">
                  View Details
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 