import { IconButton } from '@mui/material'
import WidgetsIcon from '@mui/icons-material/Widgets';
import React, { useContext } from 'react'
import { AppContext } from '../../../context/ContextProvider';

const MenuIconButton = () => {
  const {contextState, setContextState} = useContext(AppContext)!;

  const handleOpenPopup = () => {
    setContextState({
      ...contextState,
      popupState: true
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