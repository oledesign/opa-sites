import React from 'react';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Have a question?
          </h1>
          <p className="text-gray-600 mb-8">
            Fill out this form and we'll get back to you more information.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;