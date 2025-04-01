import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic,
  Star,
  Settings,
  Activity,
  Clock,
  Phone,
  Calendar,
  MessageSquare,
  Zap,
  PhoneForwarded,
  Menu,
  X,
} from 'lucide-react';
import { convertSecondsToHHMMSS, isExpired } from '../utils';
import { loadUserProfile } from '../lib/supabase';
import { useUserProfile } from '../hooks/useUserProfile';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  totalMinutes?: number;
  phoneNumber?: string;
}