# How to View a React App on Your Local Machine (Beginner-Friendly)

This guide will walk you through running a React application on your computer, even if you're completely new and have no software installed.

---

## Step 1: Install Node.js

Node.js is required to run React apps. It comes with `npm` (Node Package Manager), which manages libraries needed by your React app.

- Visit the [Node.js download page](https://nodejs.org/en/download/) and download the LTS version.
- Open the installer and follow the installation instructions. Just keep clicking "Next" or "Continue" to finish installing.

---

## Step 2: Check Node.js Installation

- Open your computer's command line:
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

## Updating Staff Information

To add a new staff member to the "Meet the Team" section on the About page:

1.  **Open the data file:** `twaan/src/staffData.js`
2.  **Locate the `staffMembers` array:** This array contains objects, each representing a staff member.
3.  **Add a new staff object:** Copy the structure of an existing staff member object within the array and add a new one, ensuring you update the details. Assign a unique `id`.

    Example object structure:
    ```javascript
    {
      id: 3, // Make sure this ID is unique
      name: "New Staff Member",
      title: "Their Job Title",
      description: "A brief description about the staff member.",
      imageUrl: "path/to/their/image.jpg" // IMPORTANT: Replace placeholder/copy with the actual image URL or imported image variable
    },
    ```
4.  **Update the `imageUrl`:** Replace the placeholder or copied image path with the actual path or URL for the new staff member's photo. You can use an external URL or import an image locally within the `About.js` file.
5.  **Save the file.** The About page will automatically update to include the new staff member.

