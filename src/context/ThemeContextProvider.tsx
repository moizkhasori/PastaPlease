import React, { createContext, useState } from 'react'
import { ThemeContextType, ThemeType } from '../utility/types';


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeContextProvider:React.FC<{children: React.ReactNode}> = ({children}) => {

  const [themeContextState, setThemeContextState] = useState<ThemeType>({
    backgroundColor: "#ede0d4",
    questionAnswerColor: "#111",
    buttonColor:"#9c6644",
    buttonHoverColor: "#7f5539",
  })

  return (
    <ThemeContext.Provider value={{themeContextState, setThemeContextState}}>
      {children}
    </ThemeContext.Provider>
  )
}


// import React, { createContext, useState } from 'react'
// import { PopupContextType, PopupType } from '../utility/types';

// export const PopupContext = createContext<PopupContextType | undefined>(undefined);

// export const PopupContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

//     const [popupContextState, setPopupContextState] = useState<PopupType>({
//         isOpened: false,
//         renderKey: 1
//     })

//   return (
//     <PopupContext.Provider value={{popupContextState, setPopupContextState}}>
//         {children}
//     </PopupContext.Provider>
//   )
// }
