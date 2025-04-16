import React, { createContext, useState } from 'react'
import { PopupContextType, PopupType } from '../utility/types';

export const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [popupContextState, setPopupContextState] = useState<PopupType>({
        isOpened: false,
    })

  return (
    <PopupContext.Provider value={{popupContextState, setPopupContextState}}>
        {children}
    </PopupContext.Provider>
  )
}
