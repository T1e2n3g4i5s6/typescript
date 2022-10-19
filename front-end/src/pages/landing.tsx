import Header from "../components/header";
import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import CSS from "csstype";
import BasModal from "../components/modal";
import axios from "axios";
import { UserData } from "../context/dataProvider";

const Landing = () => {

  const [data, setData] = React.useState<string>("");
  const [url, setUrl] = React.useState<string>("");
  const {open, handleClose, handleOpen} = UserData();
  
  const func = async () => {
    try {
      const dataa = await axios.get(`http://localhost:8000/${data}`);
      setUrl(dataa.data.shortUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Box sx={container}>
        <Box sx={oneCon}>
          <Typography sx={{ fontSize: "3vw" }}>(-)</Typography>
          <Typography sx={{ fontSize: "3vw", fontFamily: "cursive" }}>
            Boginoo
          </Typography>
        </Box>
        <Box sx={twoCon}>
          <input
            value={data}
            style={inputStyle}
            onChange={(e: any) => setData(e.target.value)}
            type="text"
            placeholder="https://www.web-huudas.mn"
          />
          <Button sx={buttonStyle} onClick={func}>
            Богиносгох
          </Button>
        </Box>
        <Box sx={threeCon}>
          <Typography sx={{ fontSize: "1.5vw", fontFamily: "cursive" }}>
            Өгөгдсөн холбоос: {data}
          </Typography>
          <Typography
            sx={{ fontSize: "1.5vw", fontFamily: "cursive", color: "green" }}
          >
            Богино холбоос: {url}
          </Typography>
        </Box>
        <Box sx={bottomCon}>
          <Typography sx={{ fontSize: "1vw", fontFamily: "cursive" }}>
            Made with - - - - - - by Nest Academy
          </Typography>
          <Typography
            sx={{ fontSize: "1vw", fontFamily: "cursive", color: "silver" }}
          >
            boginoo.io 2020
          </Typography>
        </Box>
      </Box>
      <BasModal />
    </div>
  );
};
export default Landing;
const container: CSS.Properties = {
  width: "100vw",
  height: "92vh",
};
const oneCon: CSS.Properties = {
  width: "100%",
  height: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexDirection: "column",
  color: "green",
};
const twoCon: CSS.Properties = {
  width: "100%",
  height: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const inputStyle: CSS.Properties = {
  width: "25%",
  height: "20%",
  border: "none",
  boxShadow: "1px 1px 8px 4px silver",
  borderRadius: "25px",
  textAlign: "center",
  fontSize: "medium",
};
const buttonStyle: CSS.Properties = {
  width: "5vw",
  height: "3vh",
  backgroundColor: "green",
  color: "white",
  borderRadius: "20px",
  fontFamily: "cursive",
  marginLeft: "3vw",
  fontSize: "0.6vw",
};
const threeCon: CSS.Properties = {
  width: "83%",
  height: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
const bottomCon: CSS.Properties = {
  width: "100vw",
  height: "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexDirection: "column",
};
