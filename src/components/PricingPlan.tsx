import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowLeft } from 'lucide-react';
import { ElegantButton } from './buttons/ButtonEffects';
import { CheckoutPage } from './CheckoutPage';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
