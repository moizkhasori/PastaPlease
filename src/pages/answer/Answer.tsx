import { Typography } from '@mui/material'
import  { useContext } from 'react'
import BackIconButton from '../general/backIconButton/BackIconButton'
import { PastaContext } from '../../context/PastaContextProvider'

const Answer = () => {

  const {pastaContextState, setPastaContextState} = useContext(PastaContext)!;

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
            {pastaContextState.answer}
            </Typography>
    </div>
  )
}

export default Answer


