import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Send } from 'lucide-react';
import { HologramButton } from './buttons/ButtonEffects';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}