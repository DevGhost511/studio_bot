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

export function Dashboard({ data, userProfile }: DashboardPropsType) {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [agents, setAgents] = useState<VoiceAgent[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [analysisData, setAnalysisData] = useState(data);
    const [isExpired, setIsExpired] = useState<Boolean>(false);
    const loadAgents = async () => {
      try {
        setLoading(true);
        const data = await loadVoiceAgents();
        setAgents(data);
      } catch (err) {
        console.error('Error loading voice agents:', err);
        setError('Failed to load voice agents');
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      if (userProfile) {
        if (
          getMinsRemaining(userProfile.totalUsageMinutes) <= 0 ||
          getDaysRemaining(userProfile?.planEnd) <= 0
        ) {
          setIsExpired(true);
        }
      }
    }, [userProfile]);
    useEffect(() => {
      loadAgents();
    }, []);
    useEffect(() => {
      setAnalysisData(data);
    }, [data]);
    const handleDeleteAgent = async (id: string) => {
      try {
        await deleteVoiceAgent(id);
        setAgents((prev) => prev.filter((agent) => agent.id !== id));
      } catch (err) {
        console.error('Error deleting voice agent:', err);
        setError('Failed to delete voice agent');
      }
    };
  
    
  }