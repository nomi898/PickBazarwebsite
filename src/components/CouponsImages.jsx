import React from "react";
import { Box } from "@mui/material";
import edcard from "../assets/images/edcard.webp";
import codcard from "../assets/images/codcard.webp";
import gvcard from "../assets/images/gvcard.webp";

const CouponsImages = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 , margin:'20px'}}>
      <Box>
        <img src={edcard} alt="coupon" width={500} />
      </Box>
      <Box>
        <img src={codcard} alt="coupon" width={500} />
      </Box>
      <Box>
        <img src={gvcard} alt="coupon" width={500} />
      </Box>
    </Box>
  );
};

export default CouponsImages;
