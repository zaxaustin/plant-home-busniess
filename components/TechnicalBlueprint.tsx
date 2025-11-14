
import React from 'react';

const BLUEPRINT_DATA = [
  {
    title: 'Technology Stack',
    icon: <StackIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Frontend: Next.js (React), TypeScript, Tailwind CSS',
      'Backend: Node.js (NestJS) or Serverless (Firebase/Supabase)',
      'Database: PostgreSQL (Relational) or Firestore (NoSQL)',
      'Payments: Stripe for robust subscription and payment processing',
      'Image Storage: Cloud Storage (AWS S3, Google Cloud Storage)',
      'Hosting: Vercel (Frontend), AWS/Google Cloud (Backend)',
    ],
  },
  {
    title: 'File Management System',
    icon: <FileIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Secure image upload endpoint for admins.',
      'Automated image resizing for different views (thumbnail, full).',
      'Integration with a Content Delivery Network (CDN) for fast global delivery.',
      'Organized storage buckets for products, blog posts, and user content.',
    ],
  },
  {
    title: 'Authentication & Authorization',
    icon: <AuthIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Role-based access control: Customer, Admin, Super Admin.',
      'JWT-based authentication for secure sessions.',
      'OAuth for social logins (Google, Facebook).',
      'Secure password storage using modern hashing algorithms.',
    ],
  },
  {
    title: 'E-Commerce Backend',
    icon: <CartIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Full product catalog management (plants, pots, tools).',
      'Real-time inventory tracking and management.',
      'Persistent shopping cart functionality.',
      'Complete order management system with status tracking.',
    ],
  },
   {
    title: 'Promotions & Deals',
    icon: <PromoIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Flexible system for creating discount codes (percentage, fixed amount).',
      'Support for flash sales and time-based promotions.',
      'Bundled deals for product combinations.',
      'Logic to apply best available promotion automatically.',
    ],
  },
  {
    title: 'Subscription System',
    icon: <SubscriptionIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Integration with Stripe Subscriptions for recurring billing.',
      'Customer portal for managing, pausing, or canceling plans.',
      'Automated notifications for upcoming payments and card expiries.',
      'Tiered access to content or services based on subscription level.',
    ],
  },
  {
    title: 'Email & Newsletter',
    icon: <EmailIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Transactional emails (order confirmation, shipping) via SendGrid/Mailgun.',
      'Newsletter and marketing campaigns via Mailchimp/ConvertKit.',
      'Email template management system.',
      'Audience segmentation for targeted marketing.',
    ],
  },
  {
    title: 'Blog & Content Management',
    icon: <BlogIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Headless CMS (Contentful, Sanity) for easy content updates.',
      'SEO-friendly article structure with tagging and categories.',
      'Rich text editor for creating engaging educational content.',
      'Scheduled publishing for content planning.',
    ],
  },
  {
    title: 'Analytics & Reporting',
    icon: <AnalyticsIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Admin dashboard with key metrics (sales, users, popular items).',
      'Integration with Google Analytics 4 for user behavior tracking.',
      'Sales and inventory reporting with data export.',
      'Subscription churn and LTV analysis.',
    ],
  },
  {
    title: 'Security Measures',
    icon: <SecurityIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'HTTPS/SSL enforced across the entire application.',
      'Input validation to prevent XSS and SQL injection.',
      'CSRF protection on all forms.',
      'Regular security audits and dependency updates.',
      'Compliance with data privacy regulations (GDPR, CCPA).',
    ],
  },
  {
    title: '24-Week Development Roadmap',
    icon: <RoadmapIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Weeks 1-4: Foundation & Auth (Setup, DB, User Roles)',
      'Weeks 5-10: Core E-Commerce (Products, Cart, Checkout)',
      'Weeks 11-16: Subscriptions & Content (Billing, CMS, Admin Panel)',
      'Weeks 17-20: Advanced Features (Promos, Analytics, Emails)',
      'Weeks 21-24: Testing, Deployment & Polish (QA, Go-live)',
    ],
  },
  {
    title: 'Cost & Maintenance',
    icon: <CostIcon className="h-10 w-10 text-brand-tan mb-4" />,
    points: [
      'Development Costs: Highly variable based on team ($50k - $150k+).',
      'Monthly Operating Costs: ~$200 - $1000+ to start (hosting, services).',
      'Maintenance: Daily order checks, weekly backups, monthly software updates.',
      'Scales with traffic and feature usage.',
    ],
  },
];

const BlueprintCard: React.FC<{ item: typeof BLUEPRINT_DATA[0] }> = ({ item }) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
    {item.icon}
    <h3 className="text-xl font-bold text-brand-green mb-3">{item.title}</h3>
    <ul className="space-y-2 text-brand-brown list-disc list-inside">
      {item.points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const TechnicalBlueprint: React.FC = () => {
  return (
    <section id="tech-blueprint" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-green font-serif">The Technical Blueprint</h2>
          <p className="text-lg text-brand-brown mt-4 max-w-3xl mx-auto">
            A strategic plan for scaling Urban Canopy NYC into a full-featured e-commerce and plant care ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLUEPRINT_DATA.map((item) => (
            <BlueprintCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};


// SVG Icons
function StackIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L12 15.25l5.571-3m-5.571 0v-4.5l5.571 3v4.5" /></svg>;
}
function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>;
}
function AuthIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
}
function CartIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.087-.835l1.853-7.412A1.5 1.5 0 0018 4.5H5.23" /></svg>;
}
function PromoIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></svg>;
}
function SubscriptionIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696L19.015 5.182a8.25 8.25 0 00-11.664 0L2.985 9.644z" /></svg>;
}
function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
}
function BlogIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>;
}
function AnalyticsIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>;
}
function SecurityIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>;
}
function RoadmapIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12.75h2.25" /></svg>;
}
function CostIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}

export default TechnicalBlueprint;
