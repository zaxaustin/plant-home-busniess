
import React from 'react';
import { Plant, Service, SubscriptionPlan } from './types';

export const SERVICES_DATA: Service[] = [
  {
    icon: <LeafIcon className="h-12 w-12 text-brand-tan" />,
    title: 'Plant Matching & Home Setup',
    description: 'Virtual or in-home consult to map light, humidity, and lifestyle, ensuring the perfect plant cluster for your space.',
  },
  {
    icon: <TruckIcon className="h-12 w-12 text-brand-tan" />,
    title: 'Delivery + Installation',
    description: 'We deliver plants, pots, soil, and hardware, and set everything up for optimal growth and aesthetics.',
  },
  {
    icon: <CalendarIcon className="h-12 w-12 text-brand-tan" />,
    title: 'Care Plan Subscriptions',
    description: 'Monthly check-ups, repotting, pest inspection, soil refresh, and pruning to keep your urban canopy thriving.',
  },
  {
    icon: <BonsaiIcon className="h-12 w-12 text-brand-tan" />,
    title: 'Bonsai Specialty Tier',
    description: 'The prestige class of plant care, including wiring, seasonal trimming, LED setups, and beginner workshops.',
  },
  {
    icon: <BuildingIcon className="h-12 w-12 text-brand-tan" />,
    title: 'Corporate Packages',
    description: 'Lobby setups, office plant packages, and break room humidity gardens. We handle the green, you handle the business.',
  },
  {
    icon: <HeartIcon className="h-12 w-12 text-brand-tan" />,
    title: 'Emergency Plant Help',
    description: 'Our "plant paramedics" are on call to diagnose and revive your struggling green companions.',
  },
];

export const PLANTS_DATA: Plant[] = [
  { name: 'Snake Plant', description: 'Tolerates low light and drought. Adds great vertical structure.', category: 'low-maintenance', imageUrl: 'https://picsum.photos/seed/snakeplant/400/500', tags: ['Low Light', 'Beginner'] },
  { name: 'ZZ Plant', description: 'Indestructible and thrives in low-light apartments.', category: 'low-maintenance', imageUrl: 'https://picsum.photos/seed/zzplant/400/500', tags: ['Low Light', 'Easy Care'] },
  { name: 'Pothos', description: 'Thrives anywhere with easy trailing vines. A great room softener.', category: 'low-maintenance', imageUrl: 'https://picsum.photos/seed/pothos/400/500', tags: ['Versatile', 'Beginner'] },
  { name: 'Peace Lily', description: 'Loves humidity and purifies the air. Perfect for bathrooms.', category: 'low-maintenance', imageUrl: 'https://picsum.photos/seed/peacelily/400/500', tags: ['Air Purifying', 'Medium Light'] },
  { name: 'Calathea', description: 'Gorgeous, expressive, and a true humidity-lover.', category: 'humidity-boosting', imageUrl: 'https://picsum.photos/seed/calathea/400/500', tags: ['Humidity', 'Pet-Friendly'] },
  { name: 'Boston Fern', description: 'A big humidity engine; loves a weekly mist.', category: 'humidity-boosting', imageUrl: 'https://picsum.photos/seed/bostonfern/400/500', tags: ['Humidity', 'Lush'] },
  { name: 'Monstera Deliciosa', description: 'Iconic tropical personality that increases local moisture.', category: 'humidity-boosting', imageUrl: 'https://picsum.photos/seed/monstera/400/500', tags: ['Statement', 'Bright Light'] },
  { name: 'Ficus Bonsai', description: 'Forgiving, stable, and a great starting point for bonsai enthusiasts.', category: 'bonsai', imageUrl: 'https://picsum.photos/seed/ficusbonsai/400/500', tags: ['Bonsai', 'Beginner'] },
  { name: 'Chinese Elm Bonsai', description: 'A classic indoor bonsai that handles low humidity well.', category: 'bonsai', imageUrl: 'https://picsum.photos/seed/chineseelm/400/500', tags: ['Bonsai', 'Classic'] },
  { name: 'Dwarf Jade Bonsai', description: 'A succulent bonsai—low-maintenance and sculptural.', category: 'bonsai', imageUrl: 'https://picsum.photos/seed/dwarfjade/400/500', tags: ['Bonsai', 'Easy Care'] },
];

export const PLANS_DATA: SubscriptionPlan[] = [
  { name: 'Basic', price: '$25/mo', features: ['Monthly Plant Check-up', 'Pest Inspection', 'Watering Reminders'], tier: 'Basic' },
  { name: 'Healthy Home', price: '$50/mo', features: ['All Basic Features', 'Soil Refresh', 'Fertilization Plan', 'Pruning & Shaping'], tier: 'Healthy Home' },
  { name: 'Bonsai Guardian', price: '$75/mo', features: ['All Healthy Home Features', 'Bonsai Wiring & Styling', 'LED Light Tuning', 'Priority Support'], tier: 'Bonsai Guardian' },
  { name: 'Full Stewardship', price: 'Custom', features: ['All Bonsai Features', 'Weekly Visits', 'Plant Rotation', 'Full Corporate Care'], tier: 'Full Stewardship' },
];

// SVG Icons
function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function TruckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 17H6V6h10v4l4 4H13zM6 17H4m15 0h-2" />
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function BonsaiIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.88 7.88l.005.005M16.115 7.88l.005.005M12 4.005l.005.005" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m-9.192 0L2.1 5.636m13.463 9.192l-3.535-3.535M5.636 18.364L9.172 14.83m.005-9.192a.005.005 0 01.005-.005" />
        </svg>
    )
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5h4v5h-4z" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}
