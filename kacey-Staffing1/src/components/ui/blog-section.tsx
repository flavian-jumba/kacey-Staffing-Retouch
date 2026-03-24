import React from 'react';
import { LazyImage } from './lazy-image';

const blogs = [
  {
    title: 'How to Land a Healthcare Job in the USA as an International Nurse',
    slug: '#',
    description:
      'A step-by-step guide to navigating licensure, visas, and placement opportunities for internationally trained nurses seeking US healthcare roles.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=640&h=360&fit=crop',
    createdAt: '2026-02-18',
    author: 'Kacey Staffing Team',
    readTime: '7 min read',
  },
  {
    title: 'Understanding the J-1 Exchange Visitor Program',
    slug: '#',
    description:
      'Everything you need to know about the J-1 visa, eligibility requirements, program categories, and how Kacey Staffing can help you get placed.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=640&h=360&fit=crop',
    createdAt: '2026-01-30',
    author: 'Kacey Staffing Team',
    readTime: '8 min read',
  },
  {
    title: 'Teaching Abroad: Your Guide to Classroom Opportunities in America',
    slug: '#',
    description:
      'Discover how qualified teachers from around the world are finding rewarding K-12 placements across the United States through exchange programs.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=640&h=360&fit=crop',
    createdAt: '2026-01-12',
    author: 'Kacey Staffing Team',
    readTime: '6 min read',
  },
  {
    title: 'Top 5 Hospitality Careers Available Through International Staffing',
    slug: '#',
    description:
      'From hotel management to culinary arts—explore the most sought-after hospitality roles and how to qualify for an international placement.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=640&h=360&fit=crop',
    createdAt: '2025-12-20',
    author: 'Kacey Staffing Team',
    readTime: '5 min read',
  },
  {
    title: 'Preparing Your Resume for the US Job Market',
    slug: '#',
    description:
      'Key differences between international CVs and American resumes, plus tips on how to tailor your application to stand out to US employers.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=640&h=360&fit=crop',
    createdAt: '2025-12-05',
    author: 'Kacey Staffing Team',
    readTime: '4 min read',
  },
  {
    title: 'Life After Placement: Settling Into the United States',
    slug: '#',
    description:
      'Practical advice on housing, banking, cultural adjustment, and building a community once you arrive for your international work placement.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=640&h=360&fit=crop',
    createdAt: '2025-11-18',
    author: 'Kacey Staffing Team',
    readTime: '9 min read',
  },
  {
    title: 'CNA vs RN: Which Healthcare Path Is Right for You?',
    slug: '#',
    description:
      'Comparing the certified nursing assistant and registered nurse career tracks, and how each leads to international placement opportunities.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=640&h=360&fit=crop',
    createdAt: '2025-11-02',
    author: 'Kacey Staffing Team',
    readTime: '6 min read',
  },
  {
    title: 'How We Place Professionals: The Kacey Staffing Process',
    slug: '#',
    description:
      'A transparent look at how our team matches international candidates with the right employers—from initial consultation to first day on the job.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=640&h=360&fit=crop',
    createdAt: '2025-10-15',
    author: 'Kacey Staffing Team',
    readTime: '5 min read',
  },
  {
    title: 'Australia vs USA: Where Should You Work as a Healthcare Professional?',
    slug: '#',
    description:
      'Comparing working conditions, pay scales, licensing requirements, and lifestyle considerations for nurses and caregivers in both countries.',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=640&h=360&fit=crop',
    createdAt: '2025-09-28',
    author: 'Kacey Staffing Team',
    readTime: '10 min read',
  },
  {
    title: 'Success Story: From the Philippines to a US Hospital in 6 Months',
    slug: '#',
    description:
      "One nurse's journey through the placement process—the challenges, the paperwork, and the rewarding outcome of starting a new life abroad.",
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=640&h=360&fit=crop',
    createdAt: '2025-09-10',
    author: 'Kacey Staffing Team',
    readTime: '7 min read',
  },
  {
    title: 'English Proficiency Tests: IELTS vs TOEFL for International Workers',
    slug: '#',
    description:
      'Which English test does your US employer or visa require? We break down the differences and how to prepare for each.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=640&h=360&fit=crop',
    createdAt: '2025-08-22',
    author: 'Kacey Staffing Team',
    readTime: '5 min read',
  },
  {
    title: 'Frequently Asked Questions About Working in the US on a Visa',
    slug: '#',
    description:
      'Answers to the most common questions candidates ask us about work authorization, visa types, sponsorship, and employer obligations.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=640&h=360&fit=crop',
    createdAt: '2025-08-05',
    author: 'Kacey Staffing Team',
    readTime: '8 min read',
  },
];

export function BlogSection() {
  return (
    <div className="mx-auto w-full max-w-5xl grow">
      <div className="space-y-1 px-4 py-8">
        <h1 className="font-mono text-4xl font-bold tracking-wide">
          Our Blog
        </h1>
        <p className="text-muted-foreground text-base">
          Insights, guides, and stories to help international professionals start their careers abroad.
        </p>
      </div>
      <div className="border-b border-dashed w-full" />
      <div className="grid p-4 md:grid-cols-2 lg:grid-cols-3 z-10">
        {blogs.map((blog) => (
          <a
            href={blog.slug}
            key={blog.title}
            className="group hover:bg-accent/60 active:bg-accent flex flex-col gap-2 rounded-lg p-2 duration-75"
          >
            <LazyImage
              src={blog.image}
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
                <p>{blog.createdAt}</p>
                <div className="bg-muted-foreground size-1 rounded-full" />
                <p>{blog.readTime}</p>
              </div>
              <h2 className="line-clamp-2 text-lg leading-5 font-semibold tracking-tight">
                {blog.title}
              </h2>
              <p className="text-muted-foreground line-clamp-3 text-sm">
                {blog.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
