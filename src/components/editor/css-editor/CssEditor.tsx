import React, { FC, useContext } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";

import { EditorContext } from "../../../context/context.tsx";

const CssEditor: FC = () => {
  const { css, setCss } = useContext(EditorContext)!;
  return (
    <AceEditor
      value={css}
      onChange={(value) => setCss(value)}
      placeholder="Enter your CSS"
      mode={"css"}
      theme={"github_dark"}
      name={"css-editor"}
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

export default CssEditor;
