#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Task Log Viewer - Browse and search task logs
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

function listAllLogs() {
    const logFiles = getAllLogFiles();
    
    if (logFiles.length === 0) {
        console.log('❌ No task log files found in ./logs directory');
        console.log('💡 Run "node create-monthly-log.js" to create your first log');
        return;
    }
    
    console.log('📋 Available Task Logs:');
    console.log('='.repeat(30));
    
    logFiles.forEach((file, index) => {
        const match = file.match(/tasklog-(\d{4})-(\d{2})\.md/);
        if (match) {
            const year = match[1];
            const month = parseInt(match[2]);
            const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });
            console.log(`${index + 1}. ${monthName} ${year} (${file})`);
        }
    });
    
    console.log('');
    console.log('💡 Usage:');
    console.log('  node view-logs.js 1              # View first log');
    console.log('  node view-logs.js current        # View current month');
    console.log('  node view-logs.js search "bug"   # Search for "bug" in all logs');
}

function viewLog(filename) {
    const filePath = `./logs/${filename}`;
    
    if (!fs.existsSync(filePath)) {
        console.log(`❌ Log file not found: ${filename}`);
        return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(content);
}

function getCurrentMonthLog() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const filename = `tasklog-${year}-${month}.md`;
    
    return filename;
}

function searchLogs(searchTerm) {
    const logFiles = getAllLogFiles();
    
    if (logFiles.length === 0) {
        console.log('❌ No task log files found');
        return;
    }
    
    console.log(`🔍 Searching for "${searchTerm}" in all logs...`);
    console.log('='.repeat(50));
    
    let foundResults = false;
    
    logFiles.forEach(filename => {
        const content = fs.readFileSync(`./logs/${filename}`, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, lineIndex) => {
            if (line.toLowerCase().includes(searchTerm.toLowerCase())) {
                if (!foundResults) {
                    foundResults = true;
                }
                
                const match = filename.match(/tasklog-(\d{4})-(\d{2})\.md/);
                const monthYear = match ? `${match[1]}-${match[2]}` : filename;
                
                console.log(`📁 ${monthYear} (Line ${lineIndex + 1}):`);
                console.log(`   ${line.trim()}`);
                console.log('');
            }
        });
    });
    
    if (!foundResults) {
        console.log(`❌ No results found for "${searchTerm}"`);
    }
}

function viewLogInteractive() {
    const logFiles = getAllLogFiles();
    
    if (logFiles.length === 0) {
        console.log('❌ No task log files found');
        return;
    }
    
    console.log('📋 Select a log to view:');
    logFiles.forEach((file, index) => {
        const match = file.match(/tasklog-(\d{4})-(\d{2})\.md/);
        if (match) {
            const year = match[1];
            const month = parseInt(match[2]);
            const monthName = new Date(year, month - 1, 1).toLocaleString('default', { month: 'long' });
            console.log(`${index + 1}. ${monthName} ${year}`);
        }
    });
    
    console.log('');
    console.log('Enter the number of the log you want to view:');
}

// Command line interface
const args = process.argv.slice(2);

if (args.length === 0) {
    listAllLogs();
} else if (args[0] === 'current') {
    const currentLog = getCurrentMonthLog();
    if (fs.existsSync(`./logs/${currentLog}`)) {
        viewLog(currentLog);
    } else {
        console.log(`❌ Current month log not found: ${currentLog}`);
        console.log('💡 Run "node create-monthly-log.js" to create it');
    }
} else if (args[0] === 'search' && args[1]) {
    searchLogs(args[1]);
} else if (args[0] === 'interactive') {
    viewLogInteractive();
} else if (!isNaN(parseInt(args[0]))) {
    const index = parseInt(args[0]) - 1;
    const logFiles = getAllLogFiles();
    
    if (index >= 0 && index < logFiles.length) {
        viewLog(logFiles[index]);
    } else {
        console.log(`❌ Invalid log number. Available: 1-${logFiles.length}`);
    }
} else {
    console.log('📋 Task Log Viewer');
    console.log('Usage:');
    console.log('  node view-logs.js                 # List all logs');
    console.log('  node view-logs.js 1               # View log by number');
    console.log('  node view-logs.js current         # View current month');
    console.log('  node view-logs.js search "term"   # Search all logs');
    console.log('  node view-logs.js interactive     # Interactive selection');
}
