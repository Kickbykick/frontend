import React, { useState } from 'react';
import { Metadata } from 'next';
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Contact | iDDt Studios',
  description:
    'From the captivating city of Calgary, Alberta, we are grateful for the opportunity to collaborate with clients from around the world.',
  keywords:"growth agency, web design, design, web development, calgary, web design calgary, web design winnipeg, web development winnipeg, winnipeg, iddtstudios, iddt, studios, web",
};

export default function Contact() {
  return (
    <ContactPage />
  )
}