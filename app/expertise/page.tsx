import { Metadata } from 'next';
import React from 'react'
import ExpertisePage from './ExpertisePage';

export const metadata: Metadata = {
  title: 'Expertise | iDDt Studios',
  description:
    'iDDt Studios is a Development and Design Company.',
  keywords:"growth agency, web design, design, web development, calgary, web design calgary",
};

export default function Expertise() {
  return (
    <ExpertisePage />
  )
}