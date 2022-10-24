import * as React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";
import { Box } from "@mui/system";
import Link from "next/link";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const COLUMNS = [
  { title: "Categorias",  items: [
    {text: "Categoria 1", link: "#"},
    {text: "Categoria 2", link: "#"},
    {text: "Categoria 3", link: "#"},
  ]},
  { title: "Sobre",  items: [
    {text: "Termos de Serviço", link: "#"},
    {text: "Política de Privacidade", link: "#"},
    {text: "Parcerias", link: "#"},
  ]},
  { title: "Suporte",  items: [
    {text: "Ajuda", link: "#"},
    {text: "Segurança", link: "#"},
    {text: "Privacidade", link: "#"},
  ]},
];

function Footer(props) {
  return (
    <Grid container>
      <footer className={styles.footer}>
        <Grid container alignItems={"strech"}>
          <Grid item md={2}>
          <CalendarMonthIcon sx={{fontSize: 200}} className={styles.IconColor} ></CalendarMonthIcon>
            
          </Grid>
          {COLUMNS.map((col, i) => (
            <Grid item md={3} key={i}>
              
              <Grid container direction="column" alignContent="center" className={styles.innerColumn} gap={2}>
                <Grid item textAlign={"center"}><Typography variant="h5">{col.title}</Typography></Grid>
                {col.items?.map( (item, index) => (
                    <Grid item textAlign={"center"} key={index}>
                      <Link href={"#"}>
                        <Typography variant="body1" style={{cursor: "pointer"}} sx={[
                          (theme) => ({
                            '&:hover': {
                              color: theme.palette.primary.main,
                            },
                          }),
                        ]}>{item.text}</Typography>
                      </Link>
                    </Grid>
                ))}
              </Grid>
            </Grid>

            ))}
        </Grid>
      </footer>
    </Grid>
  );
}

Footer.propTypes = {
  window: PropTypes.object,
};

export default Footer;
