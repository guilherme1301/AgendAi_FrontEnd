import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useEffect } from "react";
import LoginForm from "./loginForm";
import { Grid, Link } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../pages/contexts/userContext";
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition({ ref, ...props }) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LoginDialog({ ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { open, onSubmit, onClose, fullScreen, ...others } = props;
  const { isLogged, userData } = useContext(Context);
  const { router } = useRouter();

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
    return;
  };

  const handleCreateAccount = () => {
    router && router.push("/auth/registration")
  }

  useEffect(() => {
    if (open != undefined) {
      setIsOpen(open);
    }
  }, []);

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }} color="inherit">
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Entrar no Agendaí
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid container padding={4} direction={"column"} justifyContent="center">
          {isLogged ? (
            "Você já está Logado"
          ) : (
            <>
            <Grid item>
              <LoginForm onSubmit={onSubmit} onCancel={handleClose} />
            </Grid>
              {/* <Grid container> */}
            <Grid item pt={3} alignSelf="center">
              <Link href={"/auth/registration"} key={9999}>
                <Button variant="text" color="inherit">Criar conta</Button>
                </Link>
            </Grid>
              {/* </Grid> */}
            </>
          )}
        </Grid>
      </Dialog>
    </div>
  );
}
