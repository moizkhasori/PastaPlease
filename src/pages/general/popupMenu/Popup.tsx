import { Box, Button, Divider, SwipeableDrawer } from '@mui/material';
import React, { useContext, useState } from 'react'
import TextFieldPopup from './textFieldPopup/TextFieldPopup';
import { AppContext } from '../../../context/ContextProvider';

const Popup = () => {
    
    const {contextState, setContextState} = useContext(AppContext)!;

    const updatePopupState = (state:boolean) => (
        setContextState({
            ...contextState,
            popupState: state
        })
    )
  
    return(
      <SwipeableDrawer
      anchor="bottom"
      open={contextState.popupState}
      onOpen={() => (updatePopupState(true))}
      onClose={() => (updatePopupState(false))}
      PaperProps={{
        sx: {
          borderTopLeftRadius: 16, // Adjust radius here
          borderTopRightRadius: 16, // Adjust radius here
          overflow: "hidden",      // Ensures no content spills out
        },
      }}
      >
  
      <Box
        sx={{ width: 'auto', height:"85vh", px:"5rem", py:"3rem", display:"flex", flexDirection:"column", gap:"2rem" }}
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
      >
        <TextFieldPopup title="Question" btnLabel='question'/>
  
        <Box
        sx={{
          display:"flex",
          width:"100%",
          gap:"4rem"
        }}
        >
          <TextFieldPopup title="Yes Button" btnLabel='yesBtnText'/>
          <TextFieldPopup title="No Button" btnLabel='noBtnText'/>
        </Box>
  
        <Box>
          <TextFieldPopup title="Answer" btnLabel='answer'/>
        </Box>
  
        <Divider/>
  
        <Box>
          <Button variant="contained">Save</Button>
          <Button variant="contained">Cancel</Button>
        </Box>
    
  
      </Box>
  
      </SwipeableDrawer>
    )
}

export default Popup
