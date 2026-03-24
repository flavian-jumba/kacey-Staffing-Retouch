#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Task Log Manager - Creates new monthly task logs
 */

const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'tasklog.config.json'), 'utf8'));

function getCurrentDate() {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        monthName: now.toLocaleString('default', { month: 'long' }),
        day: now.getDate()
    };
}

function getMonthDateRange(year, month) {
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    
    const formatDate = (date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };
    
    return {
        start: formatDate(firstDay),
        end: formatDate(lastDay)
    };
}

function getWeekRanges(year, month) {
    const weeks = [];
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    
    let currentWeekStart = new Date(firstDay);
    let weekNumber = 1;
    
    while (currentWeekStart <= lastDay) {
        let currentWeekEnd = new Date(currentWeekStart);
        currentWeekEnd.setDate(currentWeekEnd.getDate() + 6);
        
        if (currentWeekEnd > lastDay) {
            currentWeekEnd = new Date(lastDay);
        }
        
        weeks.push({
            number: weekNumber,
            start: currentWeekStart.toISOString().split('T')[0],
            end: currentWeekEnd.toISOString().split('T')[0]
        });
        
        currentWeekStart.setDate(currentWeekStart.getDate() + 7);
        weekNumber++;
    }
    
    return weeks;
}

function createMonthlyLog(year, month) {
    const date = getCurrentDate();
    const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });
    const weeks = getWeekRanges(year, month);
    const monthRange = getMonthDateRange(year, month);
    
    const template = `# Kacey Staffing - Task Log - ${monthName} ${year}

## Overview
Monthly task log for ${monthName} ${year} tracking all changes, modifications, and improvements made to the Kacey Staffing website system.

**Period**: ${monthRange.start} to ${monthRange.end}

---

${weeks.map(week => `
### Week ${week.number} (${week.start} to ${week.end})

#### 🎨 **UI/UX Changes**
- **Date**: 
- **Component**: 
- **Changes**:
  - 
- **Impact**: 

#### 🔧 **Backend/Functionality**
- **Date**: 
- **Component**: 
- **Changes**:
  - 
- **Impact**: 

#### 🐛 **Bug Fixes**
- **Date**: 
- **Component**: 
- **Issue**: 
- **Solution**: 
- **Impact**: 

#### 📱 **Mobile/Responsive**
- **Date**: 
- **Component**: 
- **Changes**:
  - 
- **Impact**: 

#### ⚡ **Performance Improvements**
- **Date**: 
- **Component**: 
- **Changes**:
  - 
- **Impact**: 

#### 🔒 **Security Updates**
- **Date**: 
- **Component**: 
- **Changes**:
  - 
- **Impact**: 

#### 📚 **Documentation**
- **Date**: 
- **Files**: 
- **Changes**:
  - 
- **Impact**: 

#### 🧪 **Testing**
- **Date**: 
- **Component**: 
- **Tests Added**: 
- **Coverage**: 
- **Impact**: 
`).join('\n')}

---

## Monthly Summary

### Components Modified: 
- 

### Key Features Added:
1. ✅ 
2. ✅ 
3. ✅ 

### Technical Improvements:
- 
- 

### Bug Fixes:
- 
- 

### Performance Metrics:
- **Load Time**: 
- **Bundle Size**: 
- **Lighthouse Score**: 

---

## Quality Metrics

### Code Quality:
- **Components Updated**: 0
- **New Features**: 0
- **Bug Fixes**: 0
- **Performance Improvements**: 0
- **Security Updates**: 0

### User Experience:
- **Navigation Improvements**: 
- **Visual Enhancements**: 
- **Responsiveness**: 
- **Accessibility**: 

### Development:
- **Code Coverage**: 
- **Documentation Updates**: 
- **Refactoring**: 

---

## Next Month Planning

### Planned Enhancements:
- [ ] 
- [ ] 
- [ ] 

### Technical Debt:
- [ ] 
- [ ] 

### User Feedback Items:
- [ ] 
- [ ] 

### Security Reviews:
- [ ] 
- [ ] 

---

**Month Started**: ${monthRange.start}  
**Month Completed**: ${monthRange.end}  
**Next Review**: ${new Date(year, month, 1).toISOString().split('T')[0]}

---

## Quick Add Template

### Change Entry Template:
\`\`\`
#### 🎨 **[Category]**
- **Date**: YYYY-MM-DD
- **Component**: path/to/component
- **Changes**:
  - Brief description
- **Impact**: User/system impact
\`\`\`

### Categories:
- 🎨 UI/UX Changes
- 🔧 Backend/Functionality  
- 🐛 Bug Fixes
- 📱 Mobile/Responsive
- ⚡ Performance Improvements
- 🔒 Security Updates
- 📚 Documentation
- 🧪 Testing
`;

    if (!fs.existsSync('./logs')) {
        fs.mkdirSync('./logs');
    }
    
    const filename = `./logs/tasklog-${year}-${String(month).padStart(2, '0')}.md`;
    fs.writeFileSync(filename, template);
    
    console.log(`✅ Created monthly task log: ${filename}`);
    console.log(`📅 Period: ${monthRange.start} to ${monthRange.end}`);
    console.log(`🗓️  Weeks: ${weeks.length} weeks planned`);
    
    return filename;
}

// Command line interface
const args = process.argv.slice(2);

if (args.length === 0) {
    // Create log for current month
    const date = getCurrentDate();
    createMonthlyLog(date.year, date.month);
} else if (args.length === 2) {
    // Create log for specific month/year
    const year = parseInt(args[0]);
    const month = parseInt(args[1]);
    
    if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        console.error('❌ Invalid year or month. Usage: node create-monthly-log.js [YEAR] [MONTH]');
        process.exit(1);
    }
    
    createMonthlyLog(year, month);
} else {
    console.log('📋 Task Log Creator');
    console.log('Usage:');
    console.log('  node create-monthly-log.js              # Create log for current month');
    console.log('  node create-monthly-log.js 2025 10      # Create log for October 2025');
}
