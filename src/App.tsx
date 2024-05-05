import { EditorProvider } from "./context/context.tsx";

import CodeBar from "./components/code-bar/CodeBar.tsx";

import styles from "./App.module.css";
import Header from "./components/header/Header.tsx";
import Illustration from "./components/illustration/Illustration.tsx";

function App() {
  return (
    <EditorProvider>
      <CodeBar />

      <main className={styles.main}>
        <Header />
        <Illustration />
      </main>
    </EditorProvider>
  );
}

export default App;
