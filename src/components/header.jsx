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
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { BorderAll, Height } from "@mui/icons-material";
import { Link, NavLink } from "react-router";

const drawerWidth = 240;

function AppHeader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // State for Select dropdown
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to ='/'><img src={Logo} /></Link>
      </Typography>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ boxShadow: "none" }}
        component="nav"
        style={{ background: "#ffffff" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {/* logo  */}
            <Box className={"flex align-center"}>
              <Box className={"mx-5"}>
              <Link to ='/'><img src={Logo} /></Link>
              </Box>
              <Box>
                {/* select button appbar  */}
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

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* after space buttons  appbar*/}
            <Box className="flex justify-center items-center">
              <NavLink className= {({isActive }) => (isActive ? 'text-[#009f7f] px-3 font-bold': 'text-gray-500 px-3')} to='/shops' sx={{ color: "#6B7280" }}>Shops</NavLink>
              <NavLink className= {({isActive }) => (isActive ? 'text-[#009f7f] px-3 font-bold': 'text-gray-500 px-3')}  to='/offers'  sx={{ color: "#6B7280" }}>Offers</NavLink>
              <NavLink className={({isActive }) => (isActive ? 'text-[#009f7f] px-3 font-bold': 'text-gray-500 px-3')} to='/contacts'  sx={{ color: "#6B7280" }}>Contacts</NavLink>
              {/* select button appbar  */}
              <Box sx={{ minWidth: 100, mx: 1, display: "inline-block" }}>
                <FormControl fullWidth size="small">
                  <InputLabel
                    sx={{ color: "#6B7280", border: "0" }}
                    id="demo-simple-select-label"
                  >
                    pages
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                    sx={{
                      ".MuiOutlinedInput-notchedOutline": { border: "none" }, // removes border
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      }, // removes border on focus
                    }}
                  >
                    <MenuItem value={10}>Flash Sale</MenuItem>
                    <MenuItem value={20}>Manufacturers</MenuItem>
                    <MenuItem value={30}>Authors</MenuItem>
                    <MenuItem value={40}>FAQ</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Button
                variant="contained"
                sx={{ color: "#fffff", backgroundColor: "#009f7f" }}
              >
                Join
              </Button>
              <Button to='/register'
                component={Link}
                variant="contained"
                sx={{
                  color: "#fffff",
                  marginLeft: "9px",
                  backgroundColor: "#009f7f",
                }}
              >
                Become a Seller
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

AppHeader.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AppHeader;
