import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../assets/images/logo.webp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";

const drawerWidth = 240;

function AppHeader(props) {
  const { window } = props;

  // Get the 'Products' array from Redux cart slice and rename it to 'ProductsDummyData'
  const { Products: ProductsDummyData } = useSelector((state) => state.cart);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  // State for Select dropdown
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Navigation items
  const navItems = [
    { label: "Shops", path: "/shops" },
    { label: "Offers", path: "/offers" },
    { label: "Contacts", path: "/contacts" },
  ];

  // Drawer for mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </Typography>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} component={Link} to={item.path}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Select dropdown and buttons in mobile drawer */}
      <Box sx={{ px: 2 }}>
        <FormControl fullWidth size="small" sx={{ my: 1 }}>
          <InputLabel sx={{ color: "#6B7280" }}>Pages</InputLabel>
          <Select
            value={age}
            onChange={handleChange}
            sx={{
              ".MuiOutlinedInput-notchedOutline": { border: "none" },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          >
            <MenuItem value={10}>Flash Sale</MenuItem>
            <MenuItem value={20}>Manufacturers</MenuItem>
            <MenuItem value={30}>Authors</MenuItem>
            <MenuItem value={40}>FAQ</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#009f7f", my: 1 }}
        >
          Join
        </Button>
        <Button
          component={Link}
          to="/register"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#009f7f" }}
        >
          Become a Seller
        </Button>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ boxShadow: "none" }}
        component="nav"
        style={{ background: "#ffffff" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Logo and Search */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Box className={"flex align-center"}>
              <Box className={"mx-5"}>
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </Box>

              {/* Select button appbar */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Autocomplete
                  disablePortal
                  options={[]}
                  sx={{ width: 170 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ color: "#009f7f" }}
                      label="Grocerry"
                    />
                  )}
                />
              </Box>
            </Box>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
            <Box className="flex justify-center items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#009f7f] px-3 font-bold"
                      : "text-gray-500 px-3"
                  }
                  to={item.path}
                  sx={{ color: "#6B7280" }}
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Select dropdown */}
              <Box sx={{ minWidth: 100, mx: 1, display: "inline-block" }}>
                <FormControl fullWidth size="small">
                  <InputLabel sx={{ color: "#6B7280", border: "0" }}>pages</InputLabel>
                  <Select
                    value={age}
                    onChange={handleChange}
                    sx={{
                      ".MuiOutlinedInput-notchedOutline": { border: "none" },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
                    }}
                  >
                    <MenuItem value={10}>Flash Sale</MenuItem>
                    <MenuItem value={20}>Manufacturers</MenuItem>
                    <MenuItem value={30}>Authors</MenuItem>
                    <MenuItem value={40}>FAQ</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Join button */}
              <Button variant="contained" sx={{ color: "#fffff", backgroundColor: "#009f7f" }}>
                Join
              </Button>

              {/* Seller button */}
              <Button
                to="/register"
                component={Link}
                variant="contained"
                sx={{ color: "#fffff", marginLeft: "9px", backgroundColor: "#009f7f" }}
              >
                Become a Seller
              </Button>

              {/* Cart icon with product count
              <IconButton component={Link} to="/cart" sx={{ ml: 2 }}>
                <ShoppingCartIcon />
                {ProductsDummyData?.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "#009f7f",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "10px",
                    }}
                  >
                    {ProductsDummyData.length}
                  </span>
                )}
              </IconButton> */}
            </Box>
          </Box>

          {/* Mobile Menu Icon on the right */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#009f7f" }}/>
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Main content below AppBar */}
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

AppHeader.propTypes = {
  window: PropTypes.func,
};

export default AppHeader;
