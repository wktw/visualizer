# Luminous Flow

A Premium 3D Particle & Light Sculpture Sandbox built with React and Three.js.

## Prerequisites

Before running this project, you need to have **Node.js** installed on your computer.

- Download Node.js from: https://nodejs.org/ (get the LTS version)
- This will also install `npm` (Node Package Manager) which you'll need

## Local Setup Instructions

### 1. Open Your Terminal

First, you need to open a terminal (command line):

- **Windows**: Search for "Command Prompt" or "PowerShell" in the Start menu
- **Mac**: Press `Cmd + Space`, type "Terminal", and press Enter
- **Linux**: Press `Ctrl + Alt + T`

### 2. Navigate to the Project Folder

In the terminal, type the following command to navigate to this project:

```bash
cd path/to/visualizer
```

Replace `path/to/visualizer` with the actual location where you saved this project.

**Example:**
- Windows: `cd C:\Users\YourName\Documents\visualizer`
- Mac/Linux: `cd ~/Documents/visualizer`

### 3. Install Dependencies

If this is your first time running the project, install the required packages:

```bash
npm install
```

This command reads the `package.json` file and downloads all necessary libraries.

### 4. Run the Development Server

Start the local development server:

```bash
npm run dev
```

### 5. Open in Browser

After running `npm run dev`, you'll see output like:

```
  VITE v5.0.10  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your web browser and go to: **http://localhost:5173/**

The project will now be running locally on your computer!

## Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Troubleshooting

**Q: "npm: command not found"**
- Make sure Node.js is installed: run `node --version` in terminal
- If not installed, download from https://nodejs.org/

**Q: Port 5173 already in use?**
- Close any other instances of the dev server
- Or Vite will automatically use the next available port

**Q: Changes not showing up?**
- Make sure the dev server is running
- Refresh your browser (Ctrl+R or Cmd+R)
- Check the terminal for any error messages

## Tech Stack

- **React 18** - UI framework
- **Three.js** - 3D graphics library
- **Vite** - Build tool and dev server

## Need Help?

If you encounter issues:
1. Check that Node.js is installed: `node --version`
2. Check that you're in the correct directory: `pwd` (Mac/Linux) or `cd` (Windows)
3. Try deleting `node_modules` folder and running `npm install` again
