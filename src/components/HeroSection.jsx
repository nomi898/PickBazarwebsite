import * as React from "react";
import HeroImage from '../assets/images/grocery.webp';
import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const HeroSection = () => {
  return (
    <Box sx={{marginBottom:'50px'}}>
     
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {/* background image */}
        <img 
          src={HeroImage} 
          alt="Groceries" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
        />

        {/* overlay content */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",  
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#000",
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Groceries Delivered in 90 Minutes
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Get your healthy foods & snacks delivered at your doorsteps all day everyday
          </Typography>

          {/* search bar */}
          <Paper
            component="form"
            sx={{ display: "flex", alignItems: "center", width: 750, borderRadius: "10px" }}
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Search your Products from Here"
              inputProps={{ "aria-label": "Search your Products from Here" }}
            />
            <IconButton
              sx={{
                p: "20px",
                backgroundColor: "#009f7f",
                color: "white",
                borderRadius: "0 10px 10px 0",
              }}
              aria-label="Search"
            >
              <SearchIcon />
              <Typography sx={{ ml: 1 }}>Search</Typography>
            </IconButton>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
