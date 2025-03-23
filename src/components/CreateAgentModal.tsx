import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Mic, Wand2 } from 'lucide-react';

interface CreateAgentModalProps {
  onClose: () => void;
  onCreate: (data: any) => void;
}

export function CreateAgentModal({ onClose, onCreate }: CreateAgentModalProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      
    });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onCreate(formData);
    };
  
  }