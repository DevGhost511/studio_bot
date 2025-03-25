import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap, Clock } from 'lucide-react';
import { VoiceAgentCard } from './VoiceAgentCard';
import { CreateAgentModal } from './CreateAgentModal';
import { loadVoiceAgents, deleteVoiceAgent } from '../lib/supabase';
import type { VoiceAgent } from '../types/VoiceAgent';
import { UserProfile } from '../types/UserProfile';
import {
  convertSecondsToHHMMSS,
  getDaysRemaining,
  getMinsRemaining,
} from '../utils';
interface DashboardPropsType {
  data: {
    total_records: number;
    total_mins: number;
    avg_min: number;
    total_complete: number;
  };
  userProfile: UserProfile;
}

