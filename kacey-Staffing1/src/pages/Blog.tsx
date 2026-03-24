import React from 'react';
import { BlogSection } from '@/components/ui/blog-section';
import SEO from '@/components/SEO';

const Blog = () => {
  return (
    <>
      <SEO
        title="Blog | Kacey Staffing Agency"
        description="Insights, guides, and success stories to help international professionals launch their careers in the USA, Australia, and beyond."
      />
      <div className="min-h-screen bg-background">
        {/* Hero Banner */}
        <div className="relative bg-[#8B1A4A] pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-5xl mx-auto text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-200 mb-3">
              Knowledge Hub
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kacey Staffing Blog
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Expert guides, success stories, and essential tips for international professionals ready to build careers abroad.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="relative flex justify-center py-8 px-4">
          <BlogSection />
        </div>
      </div>
    </>
  );
};

export default Blog;
