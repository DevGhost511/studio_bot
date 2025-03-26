import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Send } from 'lucide-react';
import { HologramButton } from './buttons/ButtonEffects';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "How Long Does It Take?",
    answer: "The setup is quick and easy! Our team will guide you through every step to make sure Roxy integrates smoothly with your scheduling tools.",
    category: "Setup"
  },
  {
    question: "How Secure Is My Data with Blackwork?",
    answer: "Your data security is our top priority. Blackwork.ai uses advanced encryption to protect your information. Roxy only accesses the data she needs, ensuring your clients' privacy and your studio's confidentiality remain safe.",
    category: "Security"
  },
  {
    question: "How Much Does It Cost?",
    answer: "We offer flexible pricing to fit studios of all sizes. The first 200 tattoo shops can claim Roxy for free. For additional features and larger studios, we have various pricing tiers. Contact us for more details tailored to your needs.",
    category: "Pricing"
  },
  {
    question: "Is Roxy easy to set up and use?",
    answer: "Roxy is user-friendly and easy to set up. Our team will guide you through the installation, and she integrates smoothly with your current scheduling tools. No tech skills needed!",
    category: "Setup"
  },
  {
    question: "How does the AI voice agent handle complex tattoo inquiries?",
    answer: "Our AI is specifically trained on tattoo industry terminology and can handle detailed questions about styles, techniques, and pricing. It provides accurate information while knowing when to escalate complex queries to human staff.",
    category: "Technology"
  },
  {
    question: "What booking features are included?",
    answer: "The system handles appointment scheduling, rescheduling, cancellations, and waitlist management. It automatically sends confirmation emails and reminder notifications to reduce no-shows.",
    category: "Features"
  },
  {
    question: "Is the AI voice agent available 24/7?",
    answer: "Yes, our AI assistant operates round-the-clock, ensuring your studio never misses a booking opportunity and clients can get information anytime.",
    category: "Service"
  },
  {
    question: "How does the system handle multiple artists' schedules?",
    answer: "Each artist can maintain their own calendar, availability, and booking preferences. The AI intelligently manages scheduling conflicts and distributes bookings based on artist specialties.",
    category: "Features"
  },
  {
    question: "What languages are supported?",
    answer: "Currently, our AI assistant is fluent in English, Spanish, and French, with more languages being added regularly to serve diverse client bases.",
    category: "Service"
  }
];