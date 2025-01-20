import React from 'react';
import { useForm } from 'react-hook-form';
import { apartmentOptions } from '../../data/apartments';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormTextarea from './FormTextarea';
import GradientButton from '../ui/GradientButton';

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const numbers = value.replace(/\D/g, '');
    
    // Format the number as (XXX) XXX-XXXX
    if (numbers.length >= 10) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
    }
    return numbers;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue('phone', formatted);
  };

  const onSubmit = (data: FormData) => {
    // Create mailto link with form data
    const subject = encodeURIComponent(`Question about ${data.subject}`);
    const body = encodeURIComponent(`
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Question About: ${data.subject}

Message:
${data.message}
    `);
    
    window.location.href = `mailto:vvaldez@pmrcompanies.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Name"
        placeholder="Please enter your name"
        {...register('name', { required: 'Name is required' })}
        error={errors.name?.message}
      />

      <FormInput
        label="Phone Number"
        placeholder="(XXX) XXX-XXXX"
        {...register('phone', { 
          required: 'Phone number is required',
          onChange: handlePhoneChange,
          validate: value => {
            // Ensure at least 10 digits
            const digits = value.replace(/\D/g, '');
            return digits.length >= 10 || 'Please enter a valid phone number';
          }
        })}
        error={errors.phone?.message}
      />

      <FormInput
        label="Email"
        type="email"
        placeholder="Please type your email address"
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Please enter a valid email address'
          }
        })}
        error={errors.email?.message}
      />

      <FormSelect
        label="I Have Questions About"
        options={apartmentOptions}
        {...register('subject', { required: 'Please select a subject' })}
        error={errors.subject?.message}
      />

      <FormTextarea
        label="Message"
        placeholder="Please add any details you think would be useful for us to help get you the best information"
        {...register('message', { required: 'Message is required' })}
        error={errors.message?.message}
      />

      <div>
        <GradientButton type="submit">
          Get Answers!
        </GradientButton>
      </div>
    </form>
  );
};

export default ContactForm;
