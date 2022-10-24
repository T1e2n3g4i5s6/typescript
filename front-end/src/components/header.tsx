import { Box, Typography, Button } from '@mui/material';
import CSS  from 'csstype'
import React, { useContext } from 'react';
import { UserContext } from '../context/dataProvider';
import BasModal from './modal';
const Header = () => {
    const {open, setOpen} = React.useContext(UserContext)

    const set = () => {
        setOpen(true)
    }
    return(
        <div style={headerStyle}>
            <Box sx={topContainer}>
                <Typography sx={textStyle}>Хэрхэн ажилладаг вэ?</Typography>
                <Button sx={buttonStyle} onClick={set}>Нэвтрэх</Button>
            </Box>
        </div>
    )
}
export default Header;
const headerStyle: CSS.Properties = {
    width:'100vw',
    height:'8vh',
    boxShadow:"5px 5px 8px black",
    display:'flex',
    justifyContent:"flex-end"
}
const textStyle: CSS.Properties = {
    color:"green",
    fontSize:"x-large",
    fontFamily:"cursive"
}
const topContainer: CSS.Properties = {
    width:"30%",
    height:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
}
const buttonStyle: CSS.Properties = {
    width:"5vw",
    height:"3vh",
    backgroundColor:"green",
    color:"white",
    borderRadius:"20px",
    fontFamily:"cursive"
}