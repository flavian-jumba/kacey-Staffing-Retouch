# WordPress Self-Hosted Blog Setup Guide

## 🚀 **Quick Setup Overview**

This guide will help you set up a WordPress blog that integrates seamlessly with your React application through the WordPress REST API.

## 💰 **Cost Options**

### **Budget Option ($3-5/month)**
- **Shared Hosting**: Bluehost, SiteGround, Hostinger
- **Features**: WordPress auto-install, SSL, basic support
- **Perfect for**: Getting started quickly

### **Premium Option ($8-15/month)**
- **Managed WordPress**: WP Engine, Kinsta (starter plans)
- **Features**: Auto-updates, enhanced security, better performance
- **Perfect for**: Professional sites with growth plans

## 📋 **Step-by-Step Setup**

### **1. Choose Your Hosting Provider**

#### **Recommended Budget Hosts:**
- **Bluehost** - $2.95/month (WordPress recommended)
- **SiteGround** - $3.99/month (Excellent support)
- **Hostinger** - $2.99/month (Great value)

#### **Recommended Premium Hosts:**
- **WP Engine** - $20/month (Professional)
- **Kinsta** - $35/month (Premium performance)

### **2. Domain Setup**

#### **Option A: Subdomain (Free)**
- Use: `blog.kaceystaffing.com`
- Setup: Create subdomain in your hosting control panel
- Point subdomain to WordPress installation

#### **Option B: Separate Domain ($10-15/year)**
- Use: `kaceystaffingblog.com` or similar
- Purchase through your hosting provider

### **3. WordPress Installation**

#### **Most hosts offer 1-click WordPress install:**

1. **Login to your hosting control panel**
2. **Find "WordPress" or "1-Click Install"**
3. **Choose your domain/subdomain**
4. **Set admin credentials:**
   - Username: `admin` (or your preferred username)
   - Password: Use a strong password
   - Email: Your business email

### **4. WordPress Configuration**

#### **A. Login to WordPress Admin**
- Go to: `https://your-domain.com/wp-admin`
- Login with your credentials

#### **B. Install Essential Plugins**

```bash
# Required Plugins (Free):
1. Yoast SEO - For better SEO optimization
2. Classic Editor - If you prefer the classic editor
3. Wordfence Security - For security
4. UpdraftPlus - For backups

# Optional Plugins:
5. Contact Form 7 - For contact forms
6. WP Super Cache - For performance
```

#### **C. Choose a Theme**

**Recommended Free Themes:**
- **Astra** - Fast and customizable
- **GeneratePress** - Lightweight and SEO-friendly
- **OceanWP** - Feature-rich

**Setup Steps:**
1. Go to `Appearance > Themes`
2. Click `Add New`
3. Search for recommended theme
4. Install and activate

### **5. Create Content Structure**

#### **A. Create Categories**
1. Go to `Posts > Categories`
2. Create these categories:
   - **Visa Guides** - Information about visas and immigration
   - **Career Tips** - Professional advice and tips
   - **Success Stories** - Client testimonials and case studies
   - **Industry News** - Updates about healthcare, teaching, hospitality
   - **Location Guides** - Information about US states and cities

#### **B. Create Sample Posts**
Create 3-5 sample posts to test the integration:

1. **"Complete J1 Visa Guide for International Professionals"**
   - Category: Visa Guides
   - Mark as "Sticky" (featured)

2. **"Top 10 States for Healthcare Professionals in 2025"**
   - Category: Career Tips

3. **"Success Story: From Kenya to New York - A Nurse's Journey"**
   - Category: Success Stories

### **6. Configure REST API**

#### **A. Verify REST API is Working**
- Visit: `https://your-domain.com/wp-json/wp/v2/posts`
- You should see JSON data with your posts

#### **B. Enable CORS (if needed)**
Add to your WordPress theme's `functions.php`:

```php
// Enable CORS for REST API
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: https://kaceystaffing.com');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
}, 15);
```

### **7. Connect to Your React App**

#### **A. Update Environment Variables**
```bash
# In your .env file:
VITE_WORDPRESS_API_URL=https://your-domain.com/wp-json/wp/v2
```

#### **B. Test the Connection**
1. Start your React app: `npm run dev`
2. Navigate to `/blog`
3. You should see your WordPress posts

## 🎨 **WordPress Customization**

### **A. Customize Admin**
1. **Settings > General**:
   - Site Title: "Kacey Staffing Blog"
   - Tagline: "Career Insights & Industry News"

2. **Settings > Reading**:
   - Set posts per page: 10-12
   - Disable search engine visibility (until ready)

### **B. SEO Optimization (Yoast SEO)**
1. **SEO > General**: Complete configuration wizard
2. **SEO > Social**: Add social media accounts
3. **SEO > Advanced**: Enable REST API head

### **C. User Management**
1. **Users > Add New**: Add team members who will write posts
2. **Assign Roles**: Editor, Author, or Contributor based on needs

## 🔒 **Security Setup**

### **A. Strong Security Measures**
1. **Change default "admin" username**
2. **Use strong passwords**
3. **Enable two-factor authentication**
4. **Install Wordfence Security plugin**
5. **Regular backups with UpdraftPlus**

### **B. Hide WordPress Admin**
- Install "WPS Hide Login" plugin
- Change login URL from `/wp-admin` to something custom

## 📊 **Content Strategy**

### **A. Content Calendar**
```bash
Week 1: Visa guide (J1, work permits)
Week 2: Career tips (resume, interviews)
Week 3: Success story (client testimonial)
Week 4: Industry news (healthcare/teaching updates)
```

### **B. SEO Best Practices**
1. **Target Keywords**: Use tools like Google Keyword Planner
2. **Featured Images**: Always add high-quality images
3. **Internal Linking**: Link between related posts
4. **Meta Descriptions**: Write compelling descriptions

## 🚀 **Going Live Checklist**

### **Before Launch:**
- [ ] WordPress installed and configured
- [ ] Theme installed and customized
- [ ] Essential plugins installed
- [ ] Sample content created
- [ ] REST API tested
- [ ] React app connected
- [ ] Security measures implemented
- [ ] Backups configured

### **After Launch:**
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Enable search engine visibility
- [ ] Create editorial calendar
- [ ] Train content creators

## 🆘 **Troubleshooting**

### **Common Issues:**

#### **1. REST API Not Working**
- Check permalink structure: `Settings > Permalinks` > Save
- Verify REST API URL in browser
- Check hosting provider REST API restrictions

#### **2. CORS Errors**
- Add CORS headers (see step 6B above)
- Check hosting provider CORS policies
- Use hosting provider support

#### **3. Images Not Loading**
- Check image URLs in API response
- Verify image upload permissions
- Ensure SSL certificates are valid

#### **4. React App Can't Connect**
- Verify environment variable spelling
- Check network connectivity
- Test API endpoint in browser

## 📞 **Getting Help**

### **Hosting Support:**
- Most hosting providers offer 24/7 WordPress support
- Use live chat or ticket system

### **WordPress Community:**
- WordPress.org forums
- WordPress Facebook groups
- YouTube tutorials

### **Developer Resources:**
- WordPress REST API documentation
- WordPress Codex
- Stack Overflow

## 💡 **Next Steps**

1. **Choose your hosting provider**
2. **Set up WordPress installation**
3. **Configure the basic settings**
4. **Create your first blog posts**
5. **Test the React integration**
6. **Start creating content!**

## 🎯 **Estimated Setup Time**

- **WordPress Installation**: 30 minutes
- **Theme & Plugin Setup**: 1 hour
- **Content Creation**: 2-3 hours
- **React Integration**: 30 minutes
- **Testing & Optimization**: 1 hour

**Total**: 4-6 hours for complete setup

---

**Ready to get started?** Choose your hosting provider and follow this guide step by step. The WordPress REST API integration is already built into your React app and ready to go!
