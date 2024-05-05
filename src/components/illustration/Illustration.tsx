import React, { FC, useContext, useMemo } from "react";

import styles from "./illustration.module.css";
import { EditorContext } from "../../context/context.tsx";

const Illustration: FC = () => {
  const { html, css, js } = useContext(EditorContext)!;

  const document = useMemo(() => {
    if (!html && !css && !js) {
      return;
    }

    return `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>${css}</style>
</head>
<body>
 ${html}
 
 <script>
 ${js}
</script>
</body>
</html>
`;
  }, [html, css, js]);
  return (
    <div className={styles.content}>
      {document ? (
        <iframe title={"content"} className={styles.iframe} srcDoc={document} />
      ) : (
        <div className={styles.loading}>Your code</div>
      )}
    </div>
  );
};

export default Illustration;
