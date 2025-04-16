import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { ButtonLabel, PopupTempStateValues } from '../../../../utility/interfaces'

interface ChildProps{
  popupTempState: PopupTempStateValues,
  setPopupTempState: React.Dispatch<React.SetStateAction<PopupTempStateValues>>,
  title: string,
  buttonLabel: ButtonLabel,
  length: number
}

const TextFieldPopup: React.FC<ChildProps> = ({popupTempState, setPopupTempState, title, buttonLabel, length}) => {  

  return (
    <Box
    sx={{
        width:"100%"

    }}
    >
        <Box
        sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"flex-end",
            pb:"1rem"
            
        }}
        >
            <Typography
            variant='h3'
            >
                {title}
            </Typography>

            <Typography>{popupTempState[buttonLabel].length}/{length}</Typography>
        </Box>

        <TextField
        value={popupTempState[buttonLabel]}
        sx={{
          width:"100%",
          "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          backgroundColor: 'white', // Field background color
            '&:hover fieldset': {
              borderColor: 'gray', // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ff5733', // Custom focus color
            },
        },
        
        }}
        variant="outlined"
        onChange={(e) => {
          if(e.target.value.length <= length){
            setPopupTempState((prev) => ({
              ...prev,
              [buttonLabel]: e.target.value
            }))
          }
        }}
        />
    </Box>
  )
}

export default TextFieldPopup