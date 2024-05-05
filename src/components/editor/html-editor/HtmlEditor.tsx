import React, { FC, useContext } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/ext-language_tools";

import { EditorContext } from "../../../context/context";

const HtmlEditor: FC = () => {
  const { html, setHtml } = useContext(EditorContext)!;

  return (
    <AceEditor
      value={html}
      onChange={(value) => setHtml(value)}
      placeholder="Enter your HTML"
      mode={"html"}
      theme={"github_dark"}
      name={"html-editor"}
      fontSize={16}
      height="100%"
      width="100%"
      showPrintMargin={false}
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

export default HtmlEditor;
