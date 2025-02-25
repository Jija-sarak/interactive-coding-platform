/* eslint-disable react/prop-types */
import './Toobar.css'
const Toolbar = ({ runCode, resetCode }) => {
  return (
    <div className="toolbar">
      <button className="run-btn" onClick={runCode}>Run</button>
      <button className="reset-btn" onClick={resetCode}>Reset</button>
    </div>
  );
};

export default Toolbar;
