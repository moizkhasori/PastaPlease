import { Box, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ButtonLabel, TextFieldProps } from '../../../../utility/types'
import { AppContext } from '../../../../context/ContextProvider';

const TextFieldPopup = ({title, btnLabel}: {title:string, btnLabel: ButtonLabel}) => {

  const {contextState, setContextState} = useContext(AppContext)!;


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
        value={contextState[btnLabel]}
        sx={{
          width:"100%",
          "& .MuiOutlinedInput-root": {
          borderRadius: "10px", // Custom border radius
        },
        }}
        variant="outlined"
        onChange={(e) => {
          setContextState({
            ...contextState,
            [btnLabel]: e.target.value
          })
        }}
        />
    </Box>
  )
}

export default TextFieldPopup