import React, {useContext, useState} from "react"


export const TextTest = React.createContext();

export function useText() {
    return useContext(TextTest)
};


export function TextProvider ({children} ) {



    const testText = "this is the text from the app.js page" 

    return (
        <>
        <TextTest.Provider value={testText}>
            {children}
        </TextTest.Provider>  
        
        
        </>
    )
}