# Setting Up Development Environment

## Installing Node.js

1. Download Node.js from the official website:
   - Go to https://nodejs.org/
   - Download the LTS (Long Term Support) version

2. Run the installer:
   - Double-click the downloaded file (e.g., node-v18.x.x-x64.msi)
   - Follow the installation wizard
   - Make sure "Add to PATH" is checked during installation

3. Verify installation:
   - Close and reopen Git Bash (or any terminal)
   - Run `node -v` to check Node.js version
   - Run `npm -v` to check npm version

## Starting the Application

Once Node.js is installed:

1. Install dependencies:
   ```bash
   cd ~/desktop/coding/kacey-Staffing
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Access the application:
   - Open your browser and go to http://localhost:3000 (or whatever port Vite/React is using)

## Troubleshooting

If you see "command not found" errors:
- Make sure you've restarted your terminal after installation
- Check if Node.js is in your PATH by running `echo $PATH`
- Try using Command Prompt or PowerShell instead of Git Bash

## VS Code Terminal Issues

If npm works in Windows Command Prompt but not in VS Code's terminal:

1. Check VS Code terminal shell:
   - Open VS Code settings (Ctrl+,)
   - Search for "terminal.integrated.defaultProfile.windows"
   - Set it to "Command Prompt" or "PowerShell" instead of "Git Bash"

2. Restart VS Code:
   - Sometimes VS Code needs a complete restart to detect PATH changes

3. Manually specify the shell path:
   - Press Ctrl+Shift+P
   - Type "Terminal: Select Default Profile"
   - Choose "Command Prompt" or "PowerShell"

4. Configure shell-specific settings:
   ```json
   "terminal.integrated.profiles.windows": {
     "Command Prompt": {
       "path": "cmd.exe",
       "env": {
         "PATH": "${env:PATH};C:\\Program Files\\nodejs"
       }
     }
   }
   ```
   Add this to your VS Code settings.json file

5. Alternative approach - use NPX:
   - If npm is recognized in Command Prompt, you can open a new Command Prompt and navigate to your project:
   ```
   cd C:\Users\Administrator\desktop\coding\kacey-Staffing
   npm install
   npm run dev
   ```
