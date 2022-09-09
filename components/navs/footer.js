import * as React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import styles from '../../styles/Home.module.css'
const drawerWidth = 240;
const navItems = [
  { item: "Quem Somos", style: "text", link: "/" },
  { item: "Contato", style: "text", link: "/" },
  { item: "Entrar", style: "outlined", link: "/login" },
  { item: "Inscrição", style: "outlined", link: "/" },
];

function Footer(props) {
  

  return (
    <Grid container style={{bottom: 0,
      position: 'absolute',
      right: 0}}>
      <footer className={styles.footer}>
            Footer
        </footer>
    </Grid>
  );
}

Footer.propTypes = {
  window: PropTypes.object,
};

export default Footer;
