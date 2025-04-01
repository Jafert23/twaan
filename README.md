# How to View a React App on Your Local Machine (Beginner-Friendly)

This guide will walk you through running a React application on your computer, even if you're completely new and have no software installed.

---

## Step 1: Install Node.js

Node.js is required to run React apps. It comes with `npm` (Node Package Manager), which manages libraries needed by your React app.

- Visit the [Node.js download page](https://nodejs.org/en/download/) and download the LTS version.
- Open the installer and follow the installation instructions. Just keep clicking "Next" or "Continue" to finish installing.

---

## Step 2: Check Node.js Installation

- Open your computer’s command line:
  - **Windows**: Press `Win + R`, type `cmd`, and press Enter.
  - **Mac**: Open Spotlight (Cmd + Space), type `Terminal`, and press Enter.
- In the window, type the following and press Enter:

```
node -v
```

You should see something like this:
```
v20.11.1
```

Also, check npm:

```
npm -v
```

You should see something similar to:
```
10.2.4
```

---

## Step 3: Download the React Project

- If your React project is provided in a `.zip` file, download it and extract it somewhere easy to find (like your Desktop).
- If your React project is on GitHub:
  - Click the green "Code" button on the project's GitHub page.
  - Choose "Download ZIP," then extract it to your Desktop or desired location.

---

## Step 4: Open the Project in Your Command Line

- Open your terminal (command line) again.
- Navigate into your project folder using the `cd` command.

For example, if your folder is on the Desktop:

```bash
cd Desktop/your-react-project-name
```

Replace `your-react-project-name` with the actual name of your project folder.

---

## Step 5: Install Project Dependencies

In your terminal, type:

```
npm install
```

This command downloads and installs all the libraries needed to run your React app. Wait until the installation is complete.

---

## Step 6: Start Your React App

Now, type:

```
npm start
```

Your browser should automatically open and display your React application at:

```
http://localhost:3000
```

If your browser does not open automatically, type this URL directly into your browser.

---

## Step 7: Viewing and Stopping Your App

- Your React app is now running. You can view and interact with it in your web browser.
- To stop the app, press `Ctrl+C` in your command line.

---

## Congratulations!

You've successfully set up and run a React app on your local machine!

If you have questions, reach out for help or refer to documentation online.

