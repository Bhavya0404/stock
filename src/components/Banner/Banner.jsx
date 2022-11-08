import React from "react";
// import Carousel from "./Carousel";
import { Box, Container, Typography } from "@mui/material";
import Carousel from "./Carousel";

const Banner = () => {
    
    return (
      <Box sx={{
        backgroundImage: "url(./banner.jpg)",
        backgroundPosition: 'center',
        width: "100%",
        color: 'white',
        mt: 0.6
      }}>
        <Container sx={{
            height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
        }}>
          <Box sx={{
            display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
          }}>
            <Typography
              variant="h2"
              styles={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
              }}
            >
              Stocks Dash
            </Typography>
            <Typography
              variant="subtitle2"
              styles={{
                color: "darkgrey",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
              }}
            >
              All information regarding Cryptocurrencies
            </Typography>
            </Box>
          <Carousel />
        </Container>
      </Box>
    );
  };
  
  export default Banner;