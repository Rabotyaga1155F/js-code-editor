

export type EditorProviderType = {
    children: React.ReactNode;
}

export type ValueType = {
    html: string;
    css: string;
    js: string;
    setHtml: React.Dispatch<React.SetStateAction<string>>;
    setCss: React.Dispatch<React.SetStateAction<string>>;
    setJs: React.Dispatch<React.SetStateAction<string>>;
}
