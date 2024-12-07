import { Typography } from '@mui/material'
import React from 'react'

const Answer = () => {
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

        <Typography variant='h2' sx={{
             fontWeight:"bold",
             textAlign:"center"
        }}>
            <span style={{color:"#593d3b"}}>Ouchh! - </span>
             then when? 🤪</Typography>
    </div>
  )
}

export default Answer