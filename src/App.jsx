import { useState } from "react";
import Editor from "./components/Editor";
import Output from "./components/Output";
import Toolbar from "./components/Toolbar";
import './App.css'

const App = () => {
  const [code, setCode] = useState("// Write JavaScript here...");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      let logs = [];

      // Capture console.log output
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(" "));
      };

      // Execute the user code
      eval(code);

      // Restore original console.log
      console.log = originalConsoleLog;

      // Only show console.log() outputs, ignore eval() return values
      setOutput(logs.length > 0 ? logs.join("\n") : "");  
      
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const resetCode = () => {
    setCode("// Write JavaScript here...");
    setOutput("");
  };

  return (
    <div className="main-container">
      <h1 >Interactive Coding Platform</h1>
      <Editor code={code} setCode={setCode} />
      <Output output={output} />
      <Toolbar runCode={runCode} resetCode={resetCode} />
    </div>
  );
};

export default App;
