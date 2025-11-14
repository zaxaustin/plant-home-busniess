
import React from 'react';

const BlogPlaceholderCard: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="h-48 bg-gray-300 animate-pulse"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2 animate-pulse delay-75"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse delay-150"></div>
      <div className="mt-4 h-4 bg-gray-300 rounded w-1/4 animate-pulse delay-200"></div>
    </div>
  </div>
);

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-green font-serif">From Our Journal</h2>
          <p className="text-lg text-brand-brown mt-4 max-w-3xl mx-auto">
            Coming Soon: In-depth care guides, plant stories, and tips for greening your NYC space.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogPlaceholderCard />
          <BlogPlaceholderCard />
          <BlogPlaceholderCard />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
