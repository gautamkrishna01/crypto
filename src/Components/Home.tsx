import { Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <>
    <Header/>
      <Container sx={{display:"flex", background: "black",color:"white",height:"85vh",width:"100%"}}>
        <Stack sx={{ width: "50%",margin:"auto" }}>
          <Typography sx={{fontSize:"100px",fontWeight:"bold"}}>Experience</Typography>
          <Typography sx={{fontSize:"70px",fontWeight:"bold"}}>CryptoWorld</Typography>
          <Typography sx={{fontSize:"20px"}}>Investment and Benifits....</Typography>
          <Typography sx={{fontSize:"20px"}}>
          Every smart person that I admire in the world, and those I semi-fear, is focused on this concept of crypto for a reason.
          </Typography>
         
        </Stack>
        <Box sx={{ background: "black", width: "40%" }}>
            <img src="/img.webp" alt="" style={{width:"100%"}}/>
          </Box>
          
      </Container>
    </>
  );
};

export default Home;
