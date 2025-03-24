import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Wand2, Loader } from 'lucide-react';
import { BusinessInfoStep } from './forms/BusinessInfoStep';
import { OperationalPreferencesStep } from './forms/OperationalPreferencesStep';
import { AIConfigurationStep } from './forms/AIConfigurationStep';
import {
  saveUserProfile,
  saveOptionalPreferences,
  createPhoneNumber,
} from '../lib/supabase';
import type { FormData } from './forms/types';
import { createAssistant, updateAssistant } from '../lib/synthflow';
import { AssistantPropsType } from '../types';
import { generatePrompt, generateTattooShopInfoPrompt } from '../utils';
import { buyTwilioNumber } from '../lib/twilio';
import { extractTattooShopInfo } from '../lib/firecrawl';

interface CreateVoiceAgentFormProps {
  onSubmit: (data: FormData) => void;
}