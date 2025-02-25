/* eslint-disable react/prop-types */
const Output = ({ output }) => {
  return (
    <div className="panel-container output-container"> {/* Shared class */}
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Output;
