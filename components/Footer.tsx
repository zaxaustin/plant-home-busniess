
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-green text-brand-beige">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">Urban Canopy NYC</h3>
            <p className="text-brand-beige/70">Bringing green architecture into apartments, offices, and studios—not as decoration, but as life support.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-brand-tan">Services</a></li>
              <li><a href="#plants" className="hover:text-brand-tan">Plants</a></li>
              <li><a href="#pricing" className="hover:text-brand-tan">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>hello@urbancanopynyc.com</p>
            <p>(555) 123-4567</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" aria-label="Instagram" className="hover:text-brand-tan"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path></svg></a>
              <a href="#" aria-label="TikTok" className="hover:text-brand-tan"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.88-.36-7.02-1.88-1.81-1.26-3.15-3.06-3.86-5.03-.23-.62-.4-1.27-.54-1.94-.02-.12-.03-.24-.05-.37h4.03c.14.61.33 1.21.57 1.78.96 2.28 3.68 3.72 6.02 2.86 1.25-.46 2.1-1.75 2.18-3.21.02-3.41-.01-6.82.01-10.23h-4.54v-3.92h4.54V.02z"></path></svg></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-beige/20 text-center text-sm text-brand-beige/70">
          <p>&copy; {new Date().getFullYear()} Urban Canopy NYC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
