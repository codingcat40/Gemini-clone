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

            setResultData("")
            setLoading(true)
            setShowResult(true)
            let response
            if(prompt !== undefined){
              response = await run(prompt)
            setRecentPrompt(prompt)
            }
            else{
                setPreviousPrompt((prev)=>[...prev, input])
                setRecentPrompt(input)
                response = await run(input)
            }            
            let responseArray = response.split("**")
            let newResponse= ""
            for(let i = 0; i <responseArray.length; i++){
                if(i % 2 == 0){
                    newResponse += responseArray[i]
                }
                else{
                    newResponse += "<b>"+responseArray[i]+"</b>"
                }

            }
            let newResponse2 = newResponse.split("*").join("</br>")
            setResultData(newResponse2)
            setLoading(false)
            setInput("")

        }

     const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider