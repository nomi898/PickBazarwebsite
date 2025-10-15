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
          height: { xs: "70vh", sm: "80vh", md: "90vh" }, // taller hero for mobile
          overflow: "hidden"
        }}
      >
        {/* background image */}
        <Box
          component="img"
          src={HeroImage}
          alt="Groceries"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
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
            px: 2,
            width: "100%",
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2, 
              fontSize: { xs: 24, sm: 32, md: 40 } 
            }}
          >
            Groceries Delivered in 90 Minutes
          </Typography>
          <Typography 
            sx={{ 
              mb: 4, 
              fontSize: { xs: 14, sm: 16, md: 18 } 
            }}
          >
            Get your healthy foods & snacks delivered at your doorsteps all day everyday
          </Typography>

          {/* responsive search bar */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "stretch",
              width: { xs: "90%", sm: 750 },
              mx: "auto",
            }}
          >
            {/* Search Input */}
            <Paper
              component="form"
              sx={{ 
                display: "flex", 
                flex: 1,
                borderRadius: { xs: "10px", sm: "10px 0 0 10px" },
                overflow: "hidden",
              }}
            >
              <InputBase
                sx={{ ml: 2, flex: 1 }}
                placeholder="Search your Products from Here"
                inputProps={{ "aria-label": "Search your Products from Here" }}
              />
            </Paper>

            {/* Search Buttons   */}
            <IconButton
              type="submit"
              sx={{
                mt: { xs: 1, sm: 0 },
                p: { xs: "10px 0", sm: "20px" },
                backgroundColor: "#009f7f",
                color: "white",
                borderRadius: { xs: "10px", sm: "0 10px 10px 0" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Search"
            >
              <SearchIcon />
              <Typography sx={{ ml: 1, fontWeight: "bold", fontSize: { xs: 14, sm: 16 } }}>
                Search
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
