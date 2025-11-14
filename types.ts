import React from 'react';

export interface Plant {
  name: string;
  description: string;
  category: 'low-maintenance' | 'humidity-boosting' | 'bonsai';
  imageUrl: string;
  tags: string[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SubscriptionPlan {
  name: string;
  price: string;
  features: string[];
  tier: 'Basic' | 'Healthy Home' | 'Bonsai Guardian' | 'Full Stewardship';
}
