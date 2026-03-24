# 🔍 Google Search Console Setup Guide

## Overview
This guide helps you fix Google search results showing old WordPress content and establish proper SEO for your new React application.

## Immediate Actions Required

### 1. Verify Domain in Google Search Console

1. **Go to Google Search Console**: https://search.google.com/search-console
2. **Add Property**: 
   - Click "Add Property"
   - Choose "Domain" option
   - Enter: `kaceystaffing.com`
3. **Verify Ownership**:
   - Copy the TXT record provided by Google
   - Add it to your domain's DNS settings
   - Click "Verify"

### 2. Submit Sitemap

1. In Search Console, go to **"Sitemaps"** (left sidebar)
2. Click **"Add a new sitemap"**
3. Enter: `sitemap.xml`
4. Click **"Submit"**

### 3. Request Re-indexing of Key Pages

1. Go to **"URL Inspection"** (left sidebar)
2. Enter each URL one by one:
   - `https://kaceystaffing.com/`
   - `https://kaceystaffing.com/healthcare-staffing`
   - `https://kaceystaffing.com/teaching-opportunities`
   - `https://kaceystaffing.com/hospitality-careers`
   - `https://kaceystaffing.com/about`
   - `https://kaceystaffing.com/programs`
3. For each URL, click **"Request Indexing"**

### 4. Remove Old URLs (If Visible)

1. Go to **"Removals"** (left sidebar)
2. Click **"New Request"**
3. For each old WordPress URL showing in search:
   - Enter the full URL
   - Select "Remove this URL"
   - Click "Submit"

## Files Created/Updated

### ✅ robots.txt
- **Location**: `/public/robots.txt`
- **Purpose**: Tells search engines what to crawl
- **Key Features**:
  - Allows all pages
  - Points to sitemap
  - Blocks old WordPress paths

### ✅ sitemap.xml
- **Location**: `/public/sitemap.xml`
- **Purpose**: Lists all important pages for Google
- **Contains**: All major pages with priorities and update frequencies

### ✅ SEO Component
- **Location**: `/src/components/SEO.tsx`
- **Purpose**: Manages meta tags for all pages
- **Features**:
  - Dynamic titles and descriptions
  - Open Graph tags for social sharing
  - Twitter Card support
  - Structured data

### ✅ Updated Pages
- **Home.tsx**: Main page SEO with comprehensive keywords
- **HealthcareStaffing.tsx**: Healthcare-specific meta tags
- **TeachingOpportunities.tsx**: Education-focused SEO
- **HospitalityCareers.tsx**: Hospitality industry keywords

## Expected Timeline

### Week 1
- ✅ Meta tags and files take effect immediately
- ✅ Sitemap submitted to Google
- ✅ Re-indexing requests submitted

### Week 2-3
- 🔄 Google begins re-crawling your site
- 🔄 New pages start appearing in search results
- 🔄 Old WordPress content begins to disappear

### Week 4-6
- ✅ Search results should show mostly new content
- ✅ Proper titles and descriptions display
- ✅ Old irrelevant content removed

### Month 2-3
- ✅ Complete refresh of search results
- ✅ All old WordPress content removed
- ✅ Strong SEO positioning established

## Monitoring Progress

### Check Google Search Console Weekly
1. **Performance**: Monitor clicks and impressions
2. **Coverage**: Ensure pages are indexed properly
3. **Sitemaps**: Verify sitemap is processed
4. **URL Inspection**: Check individual page status

### Search Result Checks
Regularly search for:
- "Kacey Staffing"
- "Kacey Staffing Agency"
- "Healthcare staffing international"
- "Teaching jobs USA"

## Additional SEO Improvements

### Content Updates
- Add regular blog posts
- Update page content monthly
- Include location-based keywords
- Add client testimonials

### Technical SEO
- Monitor page load speeds
- Ensure mobile responsiveness
- Add schema markup for reviews
- Implement breadcrumb navigation

### Link Building
- Partner with industry associations
- Guest post on healthcare/education blogs
- Local business directory listings
- Social media presence

## Troubleshooting

### If Old Content Still Appears
1. Use URL removal tool in Search Console
2. Check for cached versions in Google
3. Request expedited re-indexing
4. Contact Google support if persistent

### If Pages Aren't Indexing
1. Check robots.txt for blocks
2. Verify sitemap is accessible
3. Ensure pages load properly
4. Check for duplicate content issues

## Contact Information

For technical SEO support or questions about implementation:
- Review Search Console help documentation
- Monitor weekly reports
- Track ranking improvements

---

**Implementation Status**: ✅ Complete - All files created and SEO components implemented

**Next Steps**: Submit to Google Search Console and monitor progress weekly
