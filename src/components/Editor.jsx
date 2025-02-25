/* eslint-disable react/prop-types */
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const Editor = ({ code, setCode }) => {
  return (
    <div className="panel-container"> {/* Shared class for styling */}
      <CodeMirror
        value={code}
        height="100%"
        theme={oneDark}
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
        className="editor"
      />
    </div>
  );
};

export default Editor;
