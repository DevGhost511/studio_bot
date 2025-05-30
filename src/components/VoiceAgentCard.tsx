import { motion } from 'framer-motion';
import { Mic, Star, Settings, Trash2, BarChart2 } from 'lucide-react';

interface VoiceAgentCardProps {
  agent: {
    name: string;
    status: 'active' | 'inactive' | 'training';
    performance: number;
    callsToday: number;
    successRate: number;
    level: number;
  };
  onEdit: () => void;
  onDelete: () => void;
}
