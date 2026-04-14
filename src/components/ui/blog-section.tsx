import React, { useEffect, useState } from 'react';
import { LazyImage } from './lazy-image';
import { supabase } from '@/integrations/supabase/client';
import { FileText } from 'lucide-react';

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  author: string;
  category: string;
  tags: string[];
  read_time: string;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
};

export function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    fetchBlogs();

    // Subscribe to real-time changes
    const channel = supabase
      .channel('blogs-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'blogs' },
        () => {
          fetchBlogs();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...Array.from(new Set(blogs.map((b) => b.category).filter(Boolean)))];

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  return (
    <div className="mx-auto w-full max-w-5xl grow">
      <div className="space-y-1 px-4 py-8">
        <h1 className="font-mono text-4xl font-bold tracking-wide">Our Blog</h1>
        <p className="text-muted-foreground text-base">
          Insights, guides, and stories to help international professionals start their careers
          abroad.
        </p>
      </div>

      {/* Category Filter */}
      <div className="px-4 pb-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              selectedCategory === cat
                ? 'bg-[#8B1A4A] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="border-b border-dashed w-full" />

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8B1A4A]" />
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No Blog Posts Yet</h3>
          <p className="text-gray-500 max-w-md">
            We're working on creating valuable content for you. Check back soon for insights, 
            guides, and stories about international careers and opportunities.
          </p>
        </div>
      ) : (
        <div className="grid p-4 md:grid-cols-2 lg:grid-cols-3 z-10">
          {filteredBlogs.map((blog) => (
            <a
              href={`/blog/${blog.slug}`}
              key={blog.id}
              className="group hover:bg-accent/60 active:bg-accent flex flex-col gap-2 rounded-lg p-2 duration-75"
            >
              <LazyImage
                src={blog.cover_image_url || 'https://placehold.co/640x360?text=Kacey+Staffing'}
                fallback="https://placehold.co/640x360?text=Kacey+Staffing"
                inView={true}
                alt={blog.title}
                ratio={16 / 9}
                className="transition-all duration-500 group-hover:scale-105"
              />
              <div className="space-y-2 px-2 pb-2">
                <div className="text-muted-foreground flex items-center gap-2 text-[11px] sm:text-xs">
                  <p>by {blog.author}</p>
                  <div className="bg-muted-foreground size-1 rounded-full" />
                  <p>
                    {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                  <div className="bg-muted-foreground size-1 rounded-full" />
                  <p>{blog.read_time}</p>
                </div>
                <h2 className="line-clamp-2 text-lg leading-5 font-semibold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {blog.excerpt || blog.content.substring(0, 150) + '...'}
                </p>
                {blog.category && (
                  <span className="inline-block text-[10px] font-medium text-[#8B1A4A] bg-pink-50 px-2 py-0.5 rounded-full">
                    {blog.category}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
