import React, { FC, useState } from "react";
import styles from "./code-bar.module.css";
import HtmlEditor from "../editor/html-editor/HtmlEditor.tsx";
import CssEditor from "../editor/css-editor/CssEditor.tsx";
import JsEditor from "../editor/js-editor/JsEditor.tsx";

const CodeBar: FC = () => {
  const [activeTab, setActiveTab] = useState("html");
  return (
    <div className={styles.codebar}>
      <nav className={styles.tab}>
        <button
          onClick={() => setActiveTab("html")}
          className={`${styles.item} ${activeTab === "html" && styles.activeTab}`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab("css")}
          className={`${styles.item} ${activeTab === "css" && styles.activeTab}`}
        >
          CSS
        </button>
        <button
          onClick={() => setActiveTab("js")}
          className={`${styles.item} ${activeTab === "js" && styles.activeTab}`}
        >
          JS
        </button>
      </nav>
      <div className={styles.editor}>
        {(activeTab === "html" && <HtmlEditor />) ||
          (activeTab === "css" && <CssEditor />) ||
          (activeTab === "js" && <JsEditor />)}
      </div>
    </div>
  );
};

export default CodeBar;
