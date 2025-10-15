import * as React from "react";
import HeroImage from '../assets/images/grocery.webp';
import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const HeroSection = () => {
  return (
    <Box sx={{ marginBottom: '50px' }}>
      <Box 
        sx={{ 
          position: "relative", 
          width: "100%", 
          height: { xs: 400, sm: 500, md: 600 } // responsive height in pixels
        }}
      >
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
            px: 2, // horizontal padding for smaller screens
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2, 
              fontSize: { xs: 24, sm: 32, md: 40 } // responsive font size in pixels
            }}
          >
            Groceries Delivered in 90 Minutes
          </Typography>
          <Typography 
            sx={{ 
              mb: 4, 
              fontSize: { xs: 14, sm: 16, md: 18 } // responsive font size in pixels
            }}
          >
            Get your healthy foods & snacks delivered at your doorsteps all day everyday
          </Typography>

          {/* responsive search bar */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // vertical on mobile, horizontal on desktop
              alignItems: "stretch",
              width: { xs: "100%", sm: 750 }, // full width on mobile, fixed on desktop
              mx: "auto",
            }}
          >
            {/* Search Input */}
            <Paper
              component="form"
              sx={{ 
                display: "flex", 
                flex: 1,
                borderRadius: { xs: "10px", sm: "10px 0 0 10px" }, // rounded corners
                overflow: "hidden",
              }}
            >
              <InputBase
                sx={{ ml: 2, flex: 1 }}
                placeholder="Search your Products from Here"
                inputProps={{ "aria-label": "Search your Products from Here" }}
              />
            </Paper>

            {/* Search Button */}
            <IconButton
              type="submit"
              sx={{
                mt: { xs: 1, sm: 0 }, // margin-top only on mobile
                p: "20px",
                backgroundColor: "#009f7f",
                color: "white",
                borderRadius: { xs: "10px", sm: "0 10px 10px 0" }, // adjust corners
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Search"
            >
              <SearchIcon />
              <Typography sx={{ ml: 1, fontWeight: "bold" }}>Search</Typography>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
