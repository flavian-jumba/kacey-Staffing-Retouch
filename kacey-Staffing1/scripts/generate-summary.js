#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Task Log Summary Generator - Creates summaries and reports
 */

function getAllLogFiles() {
    if (!fs.existsSync('./logs')) {
        return [];
    }
    
    return fs.readdirSync('./logs')
        .filter(file => file.startsWith('tasklog-') && file.endsWith('.md'))
        .sort()
        .reverse(); // Most recent first
}

function parseLogFile(filename) {
    const content = fs.readFileSync(`./logs/${filename}`, 'utf8');
    const match = filename.match(/tasklog-(\d{4})-(\d{2})\.md/);
    
    if (!match) return null;
    
    const year = parseInt(match[1]);
    const month = parseInt(match[2]);
    const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });
    
    // Count entries by category
    const categories = {
        'UI/UX Changes': (content.match(/#### 🎨 \*\*UI\/UX Changes\*\*/g) || []).length,
        'Backend/Functionality': (content.match(/#### 🔧 \*\*Backend\/Functionality\*\*/g) || []).length,
        'Bug Fixes': (content.match(/#### 🐛 \*\*Bug Fixes\*\*/g) || []).length,
        'Mobile/Responsive': (content.match(/#### 📱 \*\*Mobile\/Responsive\*\*/g) || []).length,
        'Performance': (content.match(/#### ⚡ \*\*Performance Improvements\*\*/g) || []).length,
        'Security': (content.match(/#### 🔒 \*\*Security Updates\*\*/g) || []).length,
        'Documentation': (content.match(/#### 📚 \*\*Documentation\*\*/g) || []).length,
        'Testing': (content.match(/#### 🧪 \*\*Testing\*\*/g) || []).length
    };
    
    const totalChanges = Object.values(categories).reduce((sum, count) => sum + count, 0);
    
    return {
        filename,
        year,
        month,
        monthName,
        categories,
        totalChanges,
        period: `${monthName} ${year}`
    };
}

function generateSummaryReport() {
    const logFiles = getAllLogFiles();
    
    if (logFiles.length === 0) {
        console.log('❌ No task log files found in ./logs directory');
        return;
    }
    
    console.log('📊 Kacey Staffing - Task Log Summary Report');
    console.log('='.repeat(50));
    console.log('');
    
    const logs = logFiles.map(parseLogFile).filter(Boolean);
    
    // Overall statistics
    const totalChanges = logs.reduce((sum, log) => sum + log.totalChanges, 0);
    const avgChangesPerMonth = totalChanges / logs.length;
    
    console.log(`📈 Overall Statistics:`);
    console.log(`   Total Months Tracked: ${logs.length}`);
    console.log(`   Total Changes: ${totalChanges}`);
    console.log(`   Average Changes/Month: ${avgChangesPerMonth.toFixed(1)}`);
    console.log('');
    
    // Monthly breakdown
    console.log(`📅 Monthly Breakdown:`);
    logs.forEach(log => {
        console.log(`   ${log.period}: ${log.totalChanges} changes`);
        
        Object.entries(log.categories).forEach(([category, count]) => {
            if (count > 0) {
                console.log(`     - ${category}: ${count}`);
            }
        });
        console.log('');
    });
    
    // Category totals
    const categoryTotals = {};
    logs.forEach(log => {
        Object.entries(log.categories).forEach(([category, count]) => {
            categoryTotals[category] = (categoryTotals[category] || 0) + count;
        });
    });
    
    console.log(`🏷️  Category Totals:`);
    Object.entries(categoryTotals)
        .sort(([,a], [,b]) => b - a)
        .forEach(([category, count]) => {
            if (count > 0) {
                const percentage = ((count / totalChanges) * 100).toFixed(1);
                console.log(`   ${category}: ${count} (${percentage}%)`);
            }
        });
    
    return {
        logs,
        totalChanges,
        avgChangesPerMonth,
        categoryTotals
    };
}

function generateMarkdownSummary() {
    const logFiles = getAllLogFiles();
    
    if (logFiles.length === 0) {
        console.log('❌ No task log files found');
        return;
    }
    
    const logs = logFiles.map(parseLogFile).filter(Boolean);
    const totalChanges = logs.reduce((sum, log) => sum + log.totalChanges, 0);
    const avgChangesPerMonth = totalChanges / logs.length;
    
    // Category totals
    const categoryTotals = {};
    logs.forEach(log => {
        Object.entries(log.categories).forEach(([category, count]) => {
            categoryTotals[category] = (categoryTotals[category] || 0) + count;
        });
    });
    
    const summaryContent = `# Kacey Staffing - Project Summary Report

Generated: ${new Date().toISOString().split('T')[0]}

## 📊 Overview

- **Total Months Tracked**: ${logs.length}
- **Total Changes**: ${totalChanges}
- **Average Changes/Month**: ${avgChangesPerMonth.toFixed(1)}

## 📅 Monthly Progress

${logs.map(log => `
### ${log.period}
- **Total Changes**: ${log.totalChanges}
${Object.entries(log.categories)
    .filter(([, count]) => count > 0)
    .map(([category, count]) => `- **${category}**: ${count}`)
    .join('\n')}
`).join('\n')}

## 🏷️ Category Analysis

${Object.entries(categoryTotals)
    .sort(([,a], [,b]) => b - a)
    .filter(([, count]) => count > 0)
    .map(([category, count]) => {
        const percentage = ((count / totalChanges) * 100).toFixed(1);
        return `- **${category}**: ${count} changes (${percentage}%)`;
    }).join('\n')}

## 📈 Insights

### Most Active Categories
${Object.entries(categoryTotals)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .filter(([, count]) => count > 0)
    .map(([category, count], index) => `${index + 1}. ${category} (${count} changes)`)
    .join('\n')}

### Development Trends
- **UI Focus**: ${((categoryTotals['UI/UX Changes'] || 0) / totalChanges * 100).toFixed(1)}% of changes were UI/UX related
- **Bug Fix Rate**: ${((categoryTotals['Bug Fixes'] || 0) / totalChanges * 100).toFixed(1)}% of changes were bug fixes
- **Feature Development**: ${(((categoryTotals['Backend/Functionality'] || 0) + (categoryTotals['UI/UX Changes'] || 0)) / totalChanges * 100).toFixed(1)}% of changes were new features

---

*This report was auto-generated from task log files in the ./logs directory.*
`;

    fs.writeFileSync('./PROJECT_SUMMARY.md', summaryContent);
    console.log('✅ Generated PROJECT_SUMMARY.md');
    
    return summaryContent;
}

// Command line interface
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === 'console') {
    generateSummaryReport();
} else if (args[0] === 'markdown') {
    generateMarkdownSummary();
} else if (args[0] === 'both') {
    generateSummaryReport();
    console.log('\n' + '='.repeat(50) + '\n');
    generateMarkdownSummary();
} else {
    console.log('📋 Summary Generator');
    console.log('Usage:');
    console.log('  node generate-summary.js           # Console report');
    console.log('  node generate-summary.js console   # Console report');
    console.log('  node generate-summary.js markdown  # Generate markdown file');
    console.log('  node generate-summary.js both      # Both console and markdown');
}
