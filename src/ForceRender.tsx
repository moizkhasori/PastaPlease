import React, { useContext, useState } from 'react'
import Question from './pages/question/Question'
import { PopupContext } from './context/PopupContextProvider'

const ForceRender = () => {

  const {popupContextState, setPopupContextState} = useContext(PopupContext)!;

  return (
    
    <Question key={popupContextState.renderKey} />
  )
}

export default ForceRender