import { Box, Button, Divider, IconButton, SwipeableDrawer, Typography } from '@mui/material';
import  { useContext, useState } from 'react'
import TextFieldPopup from './textFieldPopup/TextFieldPopup';
import { PopupContext } from '../../../context/PopupContextProvider';
import { PastaContext } from '../../../context/PastaContextProvider';
import { themes } from '../../../themes/themes';
import { PopupTempStateValues } from '../../../utility/interfaces';

import RestoreIcon from '@mui/icons-material/Restore';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';


const Popup = () => {
    
    const {popupContextState, setPopupContextState} = useContext(PopupContext)!;
    const {pastaContextState,setPastaContextState } = useContext(PastaContext)!;

    const ButtonStyles = {
      px:3,
      py: 1,
      borderRadius:"50px",
      backgroundColor: pastaContextState.themeButtonColor,
      color: "#FFFFFF",
      "&:hover": {
      backgroundColor: pastaContextState.themeButtonHoverColor,
    }
  }

    const [popupTempState, setPopupTempState] = useState<PopupTempStateValues>({
      question: pastaContextState.question,
      answer: pastaContextState.answer,
      yesButtonText: pastaContextState.yesButtonText,
      noButtonText: pastaContextState.noButtonText,
    })
    

    const handleSaveNewPastaState = () => {

      try {

        if(popupTempState.question.length < 5){
          throw new Error("Question Length cant be shorter than 5 characters!")
        } 
        
        if(popupTempState.answer.length < 5){
          throw new Error("Answer Length cant be shorter than 5 characters!")
        }
        
        if(popupTempState.yesButtonText.length < 3){
          throw new Error("Yes Button Length cant be shorter than 3 characters!")
        }

        if(popupTempState.noButtonText.length < 2){
          throw new Error("No Button Length cant be shorter than 2 characters!")
        }

        setPastaContextState((prev) => ({
          ...prev,
          question: popupTempState.question,
          answer: popupTempState.answer,
          yesButtonText: popupTempState.yesButtonText,
          noButtonText: popupTempState.noButtonText,
          themeModified: true
        }))
        setPopupContextState({
          isOpened: false
        })
      } catch (error) {
        alert((error as Error).message)
      }
      
    }

    const handleUpdateOpenPopupState = () => {      
      setPopupContextState({
        isOpened: true
      })
    }

    const handleUpdateClosePopupState = () => {

      setPopupTempState({
        question: pastaContextState.question,
        answer: pastaContextState.answer,
        yesButtonText: pastaContextState.yesButtonText,
        noButtonText: pastaContextState.noButtonText
      })
      setPopupContextState({
        isOpened: false
      })

    }

    const handleResetPastaState = () => {

      const tNo = pastaContextState.themeValue;      

      setPopupTempState({
        question: themes[tNo].question,
        answer: themes[tNo].answer,
        yesButtonText: themes[tNo].yesButtonText,
        noButtonText: themes[tNo].noButtonText
      })

      setPastaContextState((prev) => ({
        ...prev,
        question: themes[tNo].question,
        answer: themes[tNo].answer,
        yesButtonText: themes[tNo].yesButtonText,
        noButtonText: themes[tNo].noButtonText,
        themeModified: false
      }))

      setPopupContextState({
        isOpened: false
      })
    }


  
    return(
      <SwipeableDrawer
      anchor="bottom"
      open={popupContextState.isOpened}
      onOpen={handleUpdateOpenPopupState}
      onClose={handleUpdateClosePopupState}
      PaperProps={{
        sx: {
          borderTopLeftRadius: 16, // Adjust radius here
          borderTopRightRadius: 16, // Adjust radius here
          overflow: "hidden",      // Ensures no content spills out
          bgcolor:pastaContextState.themeBgColor
        },
      }}
      >
  
      <Box
        sx={{ width: 'auto', height:"auto", px:"5rem", py:"3rem", display:"flex", flexDirection:"column", gap:"2rem" }}
        role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
      >

        <Box sx={{
            width:"100%",
            display: "flex",
            alignItems:"center",
            justifyContent:"space-between"
          }}
          >
          <Typography>Edit</Typography>

          <Box
          sx={{
            display:"flex",
            gap:2
          }}
          >
            <Button onClick={handleResetPastaState} sx={ButtonStyles} endIcon={<RestoreIcon />}>Reset</Button>
            <Button onClick={handleUpdateClosePopupState} sx={ButtonStyles} endIcon={<CloseIcon />}>Close</Button>
          </Box>
        </Box>


        <TextFieldPopup popupTempState={popupTempState} setPopupTempState={setPopupTempState} title="Question" buttonLabel='question' length={50}/>
  
        <Box
        sx={{
          display:"flex",
          width:"100%",
          gap:"4rem"
        }}
        >
          <TextFieldPopup popupTempState={popupTempState} setPopupTempState={setPopupTempState} title="Yes Button" buttonLabel='yesButtonText' length={15}/>
          <TextFieldPopup popupTempState={popupTempState} setPopupTempState={setPopupTempState} title="No Button" buttonLabel='noButtonText' length={15}/>
        </Box>
  
        <Box>
          <TextFieldPopup popupTempState={popupTempState} setPopupTempState={setPopupTempState} title="Answer" buttonLabel='answer' length={50}/>
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
            px:20,
            py: 3,
            borderRadius:"50px",
            backgroundColor: pastaContextState.themeButtonColor, // Custom color
            color: "#FFFFFF", // Text color
            "&:hover": {
            backgroundColor: pastaContextState.themeButtonHoverColor, // Hover color
          },
          }}
          onClick={handleSaveNewPastaState}
          variant="contained"
          >
            <Typography variant="button">Save</Typography>
          </Button>

    

          

          
        </Box>

        {/* theme */}
        <Box>
          <Typography variant='h3'>Themes</Typography>

        <Box>
          {[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9].map((theme, index) => (
            <Button
            // onClick={() => {handleUpdateQuestionContextState(index)}}
            variant='contained'
            >{"i am ok okk"}</Button>
          ))}
        </Box>
        </Box>
    
  
      </Box>
  
      </SwipeableDrawer>
    )
}

export default Popup
