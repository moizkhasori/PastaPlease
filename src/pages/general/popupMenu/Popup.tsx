import { Box, Button, Divider, SwipeableDrawer } from '@mui/material';
import React, { useContext, useState } from 'react'
import TextFieldPopup from './textFieldPopup/TextFieldPopup';
import { PopupContext } from '../../../context/PopupContextProvider';
import { themes } from '../../../themes/themes';
import { QuestionContext } from '../../../context/QuestionContextProvider';
import RestoreIcon from '@mui/icons-material/Restore';
import { ThemeContext } from '../../../context/ThemeContextProvider';

const Popup = () => {
    
    const {popupContextState, setPopupContextState} = useContext(PopupContext)!;
    const {questionContextState, setQuestionContextState} = useContext(QuestionContext)!;
      const {themeContextState, setThemeContextState} = useContext(ThemeContext)!;
    

    

    const handleUpdateQuestionContextState = (themeNo: number) => {
      setQuestionContextState({
            question: themes[themeNo].question,
            answer: themes[themeNo].answer,
            yesBtnText: themes[themeNo].yesBtnText,
            noBtnText: themes[themeNo].noBtnText,
            themeNo: themeNo
      })
    }

    const updatePopupState = (state:boolean) => (
    
      state == false ? (
        setPopupContextState((prevState) => ({
          renderKey: prevState.renderKey + 1,
          isOpened: state,
      }))
      
      ) : (
        setPopupContextState({
          ...popupContextState,
          isOpened: state
      })
      )     
    )
  
    return(
      <SwipeableDrawer
      anchor="bottom"
      open={popupContextState.isOpened}
      onOpen={() => (updatePopupState(true))}
      onClose={() => (updatePopupState(false))}
      PaperProps={{
        sx: {
          borderTopLeftRadius: 16, // Adjust radius here
          borderTopRightRadius: 16, // Adjust radius here
          overflow: "hidden",      // Ensures no content spills out
          bgcolor:themeContextState.backgroundColor
        },
      }}
      >
  
      <Box
        sx={{ width: 'auto', height:"auto", px:"5rem", py:"3rem", display:"flex", flexDirection:"column", gap:"2rem" }}
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
  
        <Box
        sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          gap:"2rem"
        }}
        >

        <Button
          sx={{
            px:"7rem",
            py: "2rem",
            borderRadius:"50px",
            backgroundColor: themeContextState.buttonColor, // Custom color
            color: "#FFFFFF", // Text color
            "&:hover": {
            backgroundColor: themeContextState.buttonHoverColor, // Hover color
          },
          }}
          
          onClick={() => {updatePopupState(false)}}
          variant="contained"
          >CLOSE
          </Button>

           <Button
          sx={{
            px:"7rem",
            py: "2rem",
            borderRadius:"50px",
            backgroundColor: themeContextState.buttonColor, // Custom color
            color: "#FFFFFF", // Text color
            "&:hover": {
            backgroundColor: themeContextState.buttonHoverColor, // Hover color
            }
          }}
          onClick={() => {handleUpdateQuestionContextState(questionContextState.themeNo)}}
          variant="contained"
          >Reset
          </Button>

          

          
        </Box>

        {/* theme */}
        {/* <Box>
          {themes.map((theme, index) => (
            <Button
            onClick={() => {handleUpdateQuestionContextState(index)}}
            variant='contained'
            >{theme.question}</Button>
          ))}
        </Box> */}
    
  
      </Box>
  
      </SwipeableDrawer>
    )
}

export default Popup
