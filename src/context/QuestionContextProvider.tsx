import React, { createContext, useState } from 'react'
import { QuestionAnswerType, QuestionContextType } from '../utility/types';
import { themes } from '../themes/themes';

export const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export const QuestionContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

  const [questionContextState, setQuestionContextState] = useState<QuestionAnswerType>({
    question: themes[0].question,
    answer: themes[0].answer,
    yesBtnText: themes[0].yesBtnText,
    noBtnText: themes[0].noBtnText,
    themeNo: themes[0].themeNo
  })

  return (
    <QuestionContext.Provider value={{questionContextState, setQuestionContextState}}>
      {children}
    </QuestionContext.Provider>
  )
}
