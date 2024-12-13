import { Box, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import BackIconButton from '../general/backIconButton/BackIconButton'
import { QuestionContext } from '../../context/QuestionContextProvider'

const Answer = () => {

  const {questionContextState, setQuestionContextState} = useContext(QuestionContext)!;

  return (
    <div
    style={{
        width:"100%",
        height:"100vh",
        backgroundColor:"#ede0d4",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}
    > 

      <BackIconButton />

        <Typography variant='h2' sx={{
             fontWeight:"bold",
             textAlign:"center"
        }}>
            {questionContextState.answer}
            </Typography>
    </div>
  )
}

export default Answer


