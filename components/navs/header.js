import * as React from "react";
import PropTypes from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
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
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { ButtonBase } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { item: "Quem Somos", style: "text", link: "/dashboard" },
  { item: "Contato", style: "text", link: "/dashboard" },
  { item: "Entrar", style: "outlined", link: "/login" },
  { item: "Inscrição", style: "outlined", link: "/dashboard" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  border: "1px solid #cdcdcd",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0.5, 2),
  height: "100%",
  pointerEvents: "all",
  cursor: "pointer",
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flexGrow: 1,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      // width: '20ch',
      width: "100%",
    },
  },
}));

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AgendAí
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ item }) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "4rem" }}>
      <AppBar component="nav" color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            AgendAí
          </Typography>
          <Search style={{ flexGrow: 1, alignItems: 'center'}}>
            <StyledInputBase
              placeholder="Busque serviços"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <Button color={"inherit"} variant="outlined">Buscar</Button>
            </SearchIconWrapper>
          </Search>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ item, style, link }) => (
              <Link href={link}>
                <Button
                  key={item}
                  style={{ marginRight: 10 }}
                  color="inherit"
                  sx={{ color: "#000" }}
                  variant={style}
                >
                  <Typography variant="body1">{item}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
