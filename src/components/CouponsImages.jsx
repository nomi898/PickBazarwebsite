import React from "react";
import { Box } from "@mui/material";
import edcard from "../assets/images/edcard.webp";
import codcard from "../assets/images/codcard.webp";
import gvcard from "../assets/images/gvcard.webp";

const CouponsImages = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // stack on mobile, row on larger screens
        gap: 2,
        margin: "20px",
        alignItems: "center", // center images vertically in row layout
        justifyContent: "center",
      }}
    >
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <img
          src={edcard}
          alt="coupon"
          style={{ width: "100%", maxWidth: 500, height: "auto" }} // responsive width
        />
      </Box>
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <img
          src={codcard}
          alt="coupon"
          style={{ width: "100%", maxWidth: 500, height: "auto" }}
        />
      </Box>
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <img
          src={gvcard}
          alt="coupon"
          style={{ width: "100%", maxWidth: 500, height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default CouponsImages;
