# Interactive Coding Platform

## Project Overview

This is an Interactive Coding Platform built with React, CodeMirror, and TailwindCSS. Users can write, edit, and execute JavaScript code in real-time with a built-in output console.

## Features

- Live Code Editor using CodeMirror
- Syntax Highlighting for JavaScript
- Real-Time Output Display
- Custom Scrollbars and Styling
- Run & Reset Buttons for execution control

## Tech Stack

- Frontend: React, CodeMirror
- State Management: React Hooks

## Project Structure

```bash
/interactive-coding-platform
│── /src
│   │── /components
│   │   ├── Editor.jsx  (Code Editor Component)
│   │   ├── Output.jsx  (Output Display Component)
│   │   ├── Toolbar.css  (css for Run & Reset Buttons)
│   │   ├── Toolbar.jsx (Run & Reset Buttons)
│   │── App.js (Main Application)
│   │── index.js (Entry Point)
│── package.json (Dependencies & Scripts)
│── README.md (Project Documentation)

```

## Installation & Setup

1. Clone the repository:
   ```bash
    git clone https://github.com/yourusername/interactive-coding-platform.git
    cd interactive-coding-platform
   ```
2. Install dependencies:
   ```bash
      npm install
      npm install @codemirror/lang-javascript
      npm install @codemirror/theme-one-dark
   ```
3. Run the development server:
   ```bash
      npm run dev
   ```
4. Open http://localhost:5173 in your browser.


## How to Use

1. Type your JavaScript code in the editor.

2. Click the "Run" button to execute the code.

3. View results in the Output Panel.

4. Click "Reset" to clear the editor.

## Future Enhancements

1. Multi-Language Support (Python, C++, etc.)

2. Real-Time Collaboration with WebSockets

3. User Authentication & Code Saving

4. AI Code Assistance


## Contributing

Feel free to fork, contribute, or suggest features! Open an issue or a pull request.

## License

This project is licensed under the MIT License.
