/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    
    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [previousPrompt, setPreviousPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const onSent = async (prompt) => {
            await run(prompt)
    }

     const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }
     
    onSent("What is react JS")
    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider