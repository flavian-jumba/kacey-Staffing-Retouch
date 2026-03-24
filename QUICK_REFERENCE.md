# 📋 Task Log - Quick Reference Card

## 🚀 Essential Commands

### Daily Use
```bash
# Add a change (most common)
node scripts/update-tasklog.js [category] [component] [description] [impact]

# Example
node scripts/update-tasklog.js ui "Button.tsx" "Added hover animations" "Better user interaction"
```

### Categories
- `ui` - UI/UX Changes 🎨
- `backend` - Backend/Functionality 🔧  
- `bug` - Bug Fixes 🐛
- `mobile` - Mobile/Responsive 📱
- `performance` - Performance ⚡
- `security` - Security 🔒
- `docs` - Documentation 📚
- `testing` - Testing 🧪

### Monthly Management
```bash
# Create new month log
npm run log:new

# View current month
npm run log:view current

# Generate reports
npm run log:summary
```

### Browse & Search
```bash
# List all logs
npm run log:view

# Search for term
node scripts/view-logs.js search "navigation"

# View specific log
node scripts/view-logs.js 1
```

## 📝 Example Entries

```bash
# UI Examples
node scripts/update-tasklog.js ui "HeroSlider.tsx" "Removed arrows, added zoom" "Modern clean design"
node scripts/update-tasklog.js ui "Navigation.tsx" "Added transparent background" "Professional appearance"

# Bug Examples  
node scripts/update-tasklog.js bug "Menu.tsx" "Fixed mobile dropdown" "Better mobile UX"
node scripts/update-tasklog.js bug "Form.tsx" "Fixed validation errors" "Clearer user feedback"

# Performance Examples
node scripts/update-tasklog.js performance "App.tsx" "Added lazy loading" "Faster page loads"
node scripts/update-tasklog.js performance "Images.tsx" "Optimized compression" "Reduced file sizes"
```

## 🗂️ File Structure
```
logs/
├── tasklog-2025-09.md    # September log
├── tasklog-2025-10.md    # October log
└── ...

scripts/
├── create-monthly-log.js  # Create logs
├── update-tasklog.js      # Add entries
├── generate-summary.js    # Reports
└── view-logs.js          # Browse

TASKLOG.md                # Main overview
PROJECT_SUMMARY.md        # Auto-generated report
SCRIPTS_DOCUMENTATION.md  # Full documentation
```

## ⚡ Quick Tips

1. **Quote multi-word strings**: `"Fixed mobile menu"`
2. **Be specific**: Include file names
3. **Explain impact**: Why does it matter?
4. **Use daily**: Regular small entries work best
5. **Review weekly**: Check your progress

## 🔍 Common Searches
```bash
node scripts/view-logs.js search "bug"          # All bug fixes
node scripts/view-logs.js search "navigation"   # Nav changes  
node scripts/view-logs.js search "mobile"       # Mobile work
node scripts/view-logs.js search "performance"  # Speed improvements
```

## 📊 Reports
```bash
node scripts/generate-summary.js console   # Console stats
node scripts/generate-summary.js markdown  # Creates PROJECT_SUMMARY.md
node scripts/generate-summary.js both      # Both formats
```

---
**Keep this card handy for daily development! 📌**
