import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Kacey Staffing Agency - International Career Opportunities",
  description = "Kacey Staffing connects international professionals with U.S. employers in healthcare, teaching, and hospitality. Expert J1 visa support and career placement services.",
  keywords = "international staffing, healthcare staffing, teaching jobs, hospitality careers, J1 visa, work visa USA, international recruitment",
  image = "https://kaceystaffing.com/kacey-logo.jpeg",
  url = "https://kaceystaffing.com",
  type = "website"
}) => {
  const fullTitle = title.includes('Kacey Staffing') 
    ? title 
    : `${title} | Kacey Staffing Agency`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Kacey Staffing Agency" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
    </Helmet>
  );
};

export default SEO;
