import React, { useContext, useEffect, useState } from "react";
import axios from "../../pages/axios";
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
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import { ButtonBase } from "@mui/material";
import { Context } from "../../pages/contexts/userContext";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

const drawerWidth = 240;
const navItems = [
  { item: "Quem Somos", style: "text", link: "/dashboard" },
  { item: "Contato", style: "text", link: "/dashboard" },
  // { item: "Entrar", style: "outlined", link: "/client/auth/login" },
  // { item: "Inscrição", style: "outlined", link: "/dashboard" },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const { isLogged, userData } = useContext(Context);

  const [findService, setFindService] = useState()

  const services = async () => {
    try {
      const { data } = await axios.get(`/service?serviceName=`, findService)
      if (data.status == 200) {
        router.push({
          pathname: 'buscarServico',
          query: { param: findService },
        })
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logout = async function() {
    localStorage.clear();  
  }
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        AgendAí
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ item, index }) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} key={index}>
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
          <CalendarMonthIcon sx={{fontSize: 49}} className={styles.IconColor} ></CalendarMonthIcon>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
             AgendAí
          </Typography>
          <Search style={{ flexGrow: 1, alignItems: "center" }}>
            <StyledInputBase
              onChange={(e) => setFindService(e.target.value)}
              placeholder="Busque serviços"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <Button color={"inherit"} variant="outlined" onClick={() => services()}>
                Buscar
              </Button>
            </SearchIconWrapper>
          </Search>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ item, style, link }, index) => (
              <Link href={link} key={index}>
                <Button
                  key={index}
                  style={{ marginRight: 10 }}
                  color="inherit"
                  sx={{ color: "#000" }}
                  variant={style}
                >
                  <Typography variant="body1">{item}</Typography>
                </Button>
              </Link>
            ))}
            {isLogged ? (
            <>
              <Link href={"/"} key={10000}>
                <Button key={10000} className={styles.buttonLogin}>               
                  <img  className={styles.perfilLogado} src={userData.logo}></img> 
                  <Typography variant="body1">{JSON.parse(userData).name}</Typography>                  
                </Button>                
              </Link>
              <Link href={"/"} key={9999}>
                  <Button key={9999} className={styles.buttonLogin}>
                    <PowerSettingsNewIcon></PowerSettingsNewIcon>                   
                  </Button>
                </Link>

            </>
            ) : (
              <>
                <Link href={"/auth/login"} key={10000}>
                  <Button
                    key={10000}
                    style={{ marginRight: 10 }}
                    color="inherit"
                    sx={{ color: "#000" }}
                    variant={"outlined"}
                  >
                    <Typography variant="body1">Entrar</Typography>
                  </Button>
                </Link>
                <Link href={"/dashboard"} key={9999}>
                  <Button
                    key={9999}
                    style={{ marginRight: 10 }}
                    color="inherit"
                    sx={{ color: "#000" }}
                    variant={"outlined"}
                  >
                    <Typography onClick={() => router.push('/auth/registration')} variant="body1">Inscrição</Typography>
                  </Button>
                </Link>
              </>
            )}
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
