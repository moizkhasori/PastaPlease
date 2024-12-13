import { Box, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ButtonLabel, TextFieldProps } from '../../../../utility/types'
import { QuestionContext } from '../../../../context/QuestionContextProvider';

const TextFieldPopup = ({title, btnLabel}: {title:string, btnLabel: ButtonLabel}) => {

  const {questionContextState, setQuestionContextState} = useContext(QuestionContext)!;
  


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

            <Typography>30/20</Typography>
        </Box>

        <TextField
        value={questionContextState[btnLabel]}
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
          setQuestionContextState({
            ...questionContextState,
            [btnLabel]: e.target.value
          })
        }}
        />
    </Box>
  )
}

export default TextFieldPopup