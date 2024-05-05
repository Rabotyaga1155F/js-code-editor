import React, { FC, useContext } from "react";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";
import AceEditor from "react-ace";

import { EditorContext } from "../../../context/context.tsx";

const JsEditor: FC = () => {
  const { js, setJs } = useContext(EditorContext)!;
  return (
    <AceEditor
      value={js}
      onChange={(value) => setJs(value)}
      placeholder="Enter your JavaScript"
      mode={"javascript"}
      theme={"github_dark"}
      name={"js-editor"}
      fontSize={16}
      height="100%"
      width="100%"
      showPrintMargin={true}
      showGutter={false}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        maxLines: 1000,
        tabSize: 2,
      }}
    />
  );
};

export default JsEditor;
