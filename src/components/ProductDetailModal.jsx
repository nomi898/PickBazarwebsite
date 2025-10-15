import { Modal, Typography, Box, Grid, Button } from "@mui/material";
import React, { useState } from "react";
import { ModalStyle } from "../assets/style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Divider from "@mui/material/Divider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { products } from "../../utils/product";

const ProductDetailModal = (props) => {
  const { open, handleClose, currentProductId } = props;
  const selectedProduct = products.find(
    (product) => product.id === currentProductId
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Responsive modal box with reduced height on mobile */}
        <Box
          sx={{
            ...ModalStyle,
            maxWidth: { xs: "95%", sm: "90%", md: "80%", lg: "70%" }, // Responsive width
            maxHeight: { xs: "80vh", sm: "85vh" }, // Reduced max height for mobile (80vh instead of 90vh)
            overflow: "auto", 
            margin: "auto", 
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {/* Responsive grid container with column direction on mobile */}
            <Grid
              container
              spacing={2}
              sx={{
                flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile
              }}
            >
              {/* image portion - full width on mobile */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    {/* Responsive image */}
                    <img
                      src={selectedProduct?.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
              </Grid>
              {/* text portion - full width on mobile */}
              <Grid size={{ xs: 12, md: 6 }}>
                {/* fav & star name weight - responsive flex direction */}
                <Box
                  className="flex justify-between"
                  sx={{
                    flexDirection: { xs: "column", sm: "row" }, // Stack on extra small screens
                    gap: { xs: 2, sm: 0 }, // Add gap when stacked
                  }}
                >
                  <Box>
                    {/* Responsive typography sizes */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
                      }}
                    >
                      {selectedProduct?.name}
                    </Typography>
                    <Typography sx={{ color: "grey" }} variant="body1">
                      {selectedProduct?.weight}
                    </Typography>
                  </Box>
                  <Box
                    className="flex flex-col"
                    sx={{
                      flexDirection: { xs: "row", sm: "column" }, // Row on mobile, column on larger
                      gap: { xs: 2, sm: 0 }, // Gap between items on mobile
                      alignItems: { xs: "center", sm: "flex-start" }, // Center align on mobile
                    }}
                  >
                    <FavoriteBorderIcon />
                    <Button
                      sx={{
                        marginTop: { xs: 0, sm: "10px" },
                        bgcolor: "#009f7f",
                      }}
                      variant="contained"
                    >
                      4.67 <StarBorderIcon />
                    </Button>
                  </Box>
                </Box>
                {/* description - responsive margins and font size */}
                <Typography
                  sx={{
                    mt: { xs: 3, md: 5 },
                    color: "grey",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                  }}
                  variant="body1"
                >
                  An apple is a sweet, edible fruit produced by an apple tree
                  (Malus domestica). Apple trees are ... The skin of ripe apples
                  is generally red, yellow, g...
                </Typography>
                {/* Responsive price */}
                <Typography
                  variant="h4"
                  sx={{
                    color: "#009f7f",
                    mt: { xs: 2, md: 3 },
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.125rem" },
                  }}
                >
                  {selectedProduct?.price}
                </Typography>
                {/* add to cart button - responsive flex direction */}
                <Box
                  className="flex"
                  sx={{
                    flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile
                    alignItems: { xs: "stretch", sm: "center" }, // Stretch button on mobile
                    gap: { xs: 1, sm: 0 }, // Add gap when stacked
                  }}
                >
                  <Button
                    sx={{
                      marginTop: "10px",
                      bgcolor: "#009f7f",
                      px: { xs: 4, sm: 6 }, // Smaller padding on mobile
                      py: 2,
                      mx: { xs: 0, sm: 2 }, // No horizontal margin on mobile
                    }}
                    variant="contained"
                  >
                    Add to Shopping Cart
                  </Button>
                  <Typography
                    sx={{
                      my: { xs: 2, sm: 3 },
                      color: "grey",
                      textAlign: { xs: "center", sm: "left" }, // Center text on mobile
                    }}
                    variant="body1"
                  >
                    18 pieces available
                  </Typography>
                </Box>
                {/* divider line */}
                <Divider sx={{ my: 2 }} />
                {/* Categories - responsive flex with consistent spacing */}
                <Box
                  className="flex my-7"
                  sx={{
                    flexDirection: { xs: "column", sm: "row" }, // Stack on mobile
                    alignItems: { xs: "flex-start", sm: "center" }, // Align left on mobile
                    gap: { xs: 2, sm: 0 }, // Consistent gap of 2 between items when stacked
                  }}
                >
                  <Typography sx={{ mb: { xs: 0, sm: 0 } }}>
                    Categories
                  </Typography>
                  <Button
                    sx={{
                      mx: { xs: 0, sm: 3 },
                      color: "black",
                      width: { xs: "100%", sm: "auto" },
                    }}
                    variant="outlined"
                  >
                    fruits & Vegetables
                  </Button>
                  <Button
                    sx={{
                      color: "black",
                      width: { xs: "100%", sm: "auto" },
                      mt: { xs: 0, sm: 0 },
                      ml: { sm: 2 },
                    }}
                    variant="outlined"
                  >
                    fruits
                  </Button>
                </Box>
                {/* Seller - responsive layout with consistent spacing */}
                <Box
                  className="flex my-5"
                  sx={{
                    flexDirection: { xs: "column", sm: "row" }, // Stack on mobile
                    alignItems: { xs: "flex-start", sm: "center" }, // Align left on mobile
                    gap: { xs: 2, sm: 0 }, // Consistent gap of 2
                  }}
                >
                  <Typography
                    sx={{ mx: { xs: 0, sm: 3 }, mb: { xs: 0, sm: 0 } }}
                  >
                    Seller
                  </Typography>
                  <Button
                    sx={{
                      mx: { xs: 0, sm: 3 },
                      textDecoration: "Underline",
                      color: "#009f7f",
                    }}
                    variant="Text"
                  >
                    Grocey Shop
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </Box>
      </Modal>
    </>
  );
};

export default ProductDetailModal;
