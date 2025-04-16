import React, { createContext, useState } from "react";
import { themes } from "../themes/themes";
import { PastaOptions } from "../utility/types";


interface PastaContextType{
    pastaContextState: PastaOptions,
    setPastaContextState: React.Dispatch<React.SetStateAction<PastaOptions>>
}

export const PastaContext = createContext<PastaContextType | undefined>(undefined);

export const PastaContextProvider:React.FC<{children: React.ReactNode}> = ({children}) => {

    const [pastaContextState, setPastaContextState] = useState<PastaOptions>({
        question: themes[0].question,
        answer: themes[0].answer,
        yesButtonText: themes[0].yesButtonText,
        noButtonText: themes[0].noButtonText,
        themeValue: themes[0].themeValue,
        themeModified: false,
        themeBgColor: themes[0].themeBgColor,
        themeQuestionAnswerColor: themes[0].themeQuestionAnswerColor,
        themeButtonColor: themes[0].themeButtonColor,
        themeButtonHoverColor: themes[0].themeButtonHoverColor
    })

    return (
        <PastaContext.Provider value={{pastaContextState, setPastaContextState}}>
            {children}
        </PastaContext.Provider>
    )
}