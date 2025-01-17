import React from 'react';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-100 to-transparent" />
      
      {/* Content */}
      <div className="relative py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Have a question?
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out this form and we'll get back to you with more information.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;