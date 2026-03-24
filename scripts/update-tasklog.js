#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Task Log Updater - Quick add changes to current month's log
 */

function getCurrentDate() {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        day: now.getDate(),
        formatted: now.toISOString().split('T')[0]
    };
}

function findCurrentMonthLog() {
    const date = getCurrentDate();
    const filename = `./logs/tasklog-${date.year}-${String(date.month).padStart(2, '0')}.md`;
    
    if (!fs.existsSync(filename)) {
        console.log(`📋 No log found for current month. Creating: ${filename}`);
        // Note: You would need to run create-monthly-log.js separately
        return filename;
    }
    
    return filename;
}

function addChangeEntry(category, component, description, impact) {
    const date = getCurrentDate();
    const logFile = findCurrentMonthLog();
    
    const categoryEmojis = {
        'ui': '🎨',
        'backend': '🔧',
        'bug': '🐛',
        'mobile': '📱',
        'performance': '⚡',
        'security': '🔒',
        'docs': '📚',
        'testing': '🧪'
    };
    
    const categoryNames = {
        'ui': 'UI/UX Changes',
        'backend': 'Backend/Functionality',
        'bug': 'Bug Fixes',
        'mobile': 'Mobile/Responsive',
        'performance': 'Performance Improvements',
        'security': 'Security Updates',
        'docs': 'Documentation',
        'testing': 'Testing'
    };
    
    const emoji = categoryEmojis[category] || '🔧';
    const categoryName = categoryNames[category] || 'Backend/Functionality';
    
    const entry = `
#### ${emoji} **${categoryName}**
- **Date**: ${date.formatted}
- **Component**: ${component}
- **Changes**:
  - ${description}
- **Impact**: ${impact}
`;

    let content = fs.readFileSync(logFile, 'utf8');
    
    // Find the current week section
    const weekRegex = /### Week \d+ \([^)]+\)/g;
    const weeks = content.match(weekRegex);
    
    if (weeks && weeks.length > 0) {
        const lastWeek = weeks[weeks.length - 1];
        const lastWeekIndex = content.lastIndexOf(lastWeek);
        
        // Find the next section or end of week
        const nextSectionIndex = content.indexOf('---', lastWeekIndex);
        
        if (nextSectionIndex !== -1) {
            // Insert before the next section
            content = content.slice(0, nextSectionIndex) + entry + '\n' + content.slice(nextSectionIndex);
        } else {
            // Append to end
            content += entry;
        }
    } else {
        // Append to end if no weeks found
        content += entry;
    }
    
    fs.writeFileSync(logFile, content);
    
    console.log(`✅ Added ${categoryName} entry to ${logFile}`);
    console.log(`📅 Date: ${date.formatted}`);
    console.log(`🔧 Component: ${component}`);
    console.log(`📝 Description: ${description}`);
    
    return logFile;
}

function showQuickAddMenu() {
    console.log('📋 Quick Add Menu');
    console.log('Usage: node update-tasklog.js [category] [component] [description] [impact]');
    console.log('');
    console.log('Categories:');
    console.log('  ui         - UI/UX Changes');
    console.log('  backend    - Backend/Functionality');
    console.log('  bug        - Bug Fixes');
    console.log('  mobile     - Mobile/Responsive');
    console.log('  performance- Performance Improvements');
    console.log('  security   - Security Updates');
    console.log('  docs       - Documentation');
    console.log('  testing    - Testing');
    console.log('');
    console.log('Example:');
    console.log('  node update-tasklog.js ui "HeroSlider.tsx" "Removed navigation arrows" "Improved modern appearance"');
}

// Command line interface
const args = process.argv.slice(2);

if (args.length === 0) {
    showQuickAddMenu();
} else if (args.length === 4) {
    const [category, component, description, impact] = args;
    addChangeEntry(category, component, description, impact);
} else {
    console.error('❌ Invalid arguments. Expected 4 arguments.');
    showQuickAddMenu();
}
