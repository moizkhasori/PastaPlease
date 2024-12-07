import React, { Children, createContext, useState } from 'react'
import { ContextType, QuestionAnswerType } from '../utility/types'

export const AppContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

  const [contextState, setContextState] = useState<QuestionAnswerType>({
    question: "Underscore, Pasta, When? 🍝",
    yesBtnText: "Abhi",
    noBtnText: "Kabhi Nhi",
    answer: "Chlain Phir?",
    popupState: false
  })

  return (
    <AppContext.Provider value={{contextState, setContextState}}>
      {children}
    </AppContext.Provider>
  )
}

