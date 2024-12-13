import { IconButton } from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets';
import React, { useContext } from 'react'
import { PopupContext } from '../../../context/PopupContextProvider';

const MenuIconButton = () => {
  const {popupContextState, setPopupContextState} = useContext(PopupContext)!;
   

  const handleOpenPopup = () => {
    setPopupContextState({
      isOpened: true
    })
  }

  return (
    <IconButton
    onClick={handleOpenPopup}
    sx={{
        position:"absolute",
        top:"25px",
        right:"25px",
        zIndex:10
    }}
    >
        <WidgetsIcon/>
    </IconButton>
  )
}

export default MenuIconButton