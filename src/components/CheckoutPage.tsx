import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, CreditCard } from 'lucide-react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import {
  getPhoneNumber,
  loadUserProfile,
  saveUserProfile,
  updatePhoneNumber,
} from '../lib/supabase';
import { UserProfile } from '../types/UserProfile';
import { updateAssistant } from '../lib/synthflow';

interface CheckoutPageProps {
    planId: 'TRIAL' | 'BASIC' | 'PROFESSIONAL' | 'ENTERPRISE';
    planName: string;
    planPrice: number;
    onBack: () => void;
}