Urban Canopy NYC
Indoor Plant Ecosystems Designed for New York City Living

Urban Canopy NYC is a full indoor-plant service and digital platform designed specifically for the challenges of New York apartments—dry winter heating, low natural light, small spaces, busy lifestyles, and the need for more calm, clean air, and greenery.

This repository contains the source code for the Urban Canopy NYC website, including the plant catalog, educational wellness modules, and service offerings.

🌿 Overview

Urban Canopy NYC combines:

A curated plant catalog optimized for NYC conditions

Educational modules on air quality, humidity, and wellness

Professional home setup services including plant matching, installation, and LED optimization

Monthly plant-care subscriptions

Specialized bonsai services

Corporate packages for offices and studios

The goal is to provide New Yorkers with science-backed plant recommendations, clear care instructions, and hands-on expert support.

📁 Project Structure

This repository is organized into pages and components that make up the main platform:

/src
  /pages
    - urban_canopy_website.tsx     → Main homepage / landing experience
    - plant_catalog_page.tsx       → Searchable plant catalog with filters
    - education_wellness_page.tsx  → Science-based plant education section
  /components                     → Shared UI components (future expansion)
  /data                          → JSON plant data, service data (future)
  /styles                        → TailwindCSS configuration (future)


All files currently use React + TailwindCSS with Lucide Icons.

✨ Key Features
1. Homepage / Landing (urban_canopy_website.tsx)

Hero section describing the Urban Canopy mission

Problems we solve (dry air, low light, busy schedules)

List of services offered

NYC-friendly plant previews

Subscription plans

Consultation booking form

Fully responsive layout

2. Plant Catalog (plant_catalog_page.tsx)

Searchable & filterable catalog

Categories: Beginner, Humidity Boosters, Bonsai

Difficulty filter (Easy → Advanced)

Benefit badges

Light/water/humidity requirements

Care tips + pricing

Add-to-cart placeholder button (e-commerce ready)

3. Education & Wellness (education_wellness_page.tsx)

Air purification science

Humidity regulation

Mental health benefits of plants

Best practices:

Light

Watering

Humidity

Feeding & maintenance

NYC-specific conditions

Expandable tips (accordion-style)

🧪 Tech Stack

React

Tailwind CSS

Lucide Icons

Vite / Next.js (future migration recommended)

TypeScript (optional upgrade available)

The project is currently frontend-only, with backend integration planned for a later version.

🚀 Roadmap
Phase 1 — MVP Website

 Landing page

 Plant catalog

 Education page

 Navbar linking all pages

 Add routing via Next.js or React Router

 Replace placeholder plant images

 Add contact form backend

 Add booking system

Phase 2 — Backend Integration

 Database (Supabase or Firebase)

 User accounts

 Consultation booking storage

 Subscription management

 Admin dashboard

Phase 3 — AI Features

 Room-light analyzer (upload a photo → suggested plants)

 Plant health scanner (detect pests or issues)

 Auto-watering reminders

 Customer CRM insights

Phase 4 — Business Tools

 Inventory management

 Delivery scheduling system

 Corporate client dashboard

🛠️ Local Development

Clone the repository:

git clone https://github.com/zaxaustin/plant-home-busniess
cd plant-home-busniess


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser at:

http://localhost:5173


(If using Next.js later, this will shift to port 3000.)

📦 Deployment

You can deploy this on:

Vercel (recommended for Next.js)

Netlify

GitHub Pages

Docker container (future option)

📚 Content Credits

All plant descriptions, care tips, and benefit explanations were written specifically for NYC apartment living and are included under /src/pages/.

🤝 Contributing

Contributions are welcome!
Planned contribution areas:

Adding more plant species

Improving UI/UX components

Backend setup

CMS integration

AI feature prototypes

Open a pull request to propose changes.
