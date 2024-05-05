import  {createContext, FC, useState} from "react";
import {EditorProviderType, ValueType} from "./context.types.ts";

const EditorContext = createContext<ValueType | null>(null);




const EditorProvider:FC<EditorProviderType> = ({children}) =>{

    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

    const value = {
        html,css,js ,setHtml,setCss,setJs
    }

    return(
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    )
}

export {
    EditorProvider,
    EditorContext
}
