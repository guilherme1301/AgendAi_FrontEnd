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
import RegistrationForm from "./registrationFormGeneral";
import RegistrationFormShop1 from "./registrationFormShop1";
import RegistrationFormShop2 from "./registrationFormShop2";
// import RegistrationFormShop3 from "./registrationFormShop3";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../../pages/contexts/userContext";
import { useState } from "react";
import { useCallback } from "react";

const Transition = React.forwardRef(function Transition({ ref, ...props }) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegistrationDialog({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const { open, onSubmit, onClose, fullScreen, inputData, onInputUpdate, ...others } = props;
  const { isLogged, userData } = useContext(Context);
  const [displayFormIndex, setDisplayFormIndex] = useState(0);

  const handleOnSubmit = useCallback((data) => {
    onInputUpdate && onInputUpdate(data);
    debugger;
    if ((data && data.isShop == true) || (displayFormIndex > 0 && displayFormIndex != 2)) {
      debugger
      const newIndex = displayFormIndex+1;
      setDisplayFormIndex(newIndex);
      return;
    }else {
      onSubmit();
    }
  }, [displayFormIndex, inputData]);

  const [displayForm, setDisplayForm] = useState(
    <RegistrationForm onSubmit={handleOnSubmit} onClose={onClose} />
  );
  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = useCallback(() => {
    debugger
    if (displayFormIndex == 0) {
      setIsOpen(false);
      onClose && onClose();
      return;
    } else {
      setDisplayFormIndex(displayFormIndex - 1);
      return;
    }
  }, [displayFormIndex]);

  useEffect(() => {
    switch (displayFormIndex) {
      case 0:
        setDisplayForm(<RegistrationForm onSubmit={handleOnSubmit} onClose={onClose} inputData={inputData} />);
        // setDisplayFormIndex(0);
        return ;
        break;

      case 1:
        setDisplayForm(<RegistrationFormShop1 onSubmit={handleOnSubmit} onClose={onClose} inputData={inputData} />);
        // setDisplayFormIndex(1);
        return;
        break;

      case 2:
        setDisplayForm(<RegistrationFormShop2 onSubmit={handleOnSubmit} onClose={onClose} inputData={inputData} />);
        // setDisplayFormIndex(2);
        return;
        break;

      default:
        // setDisplayFormIndex(0);
        return <RegistrationForm onSubmit={handleOnSubmit} onClose={onClose} inputData={inputData} />;
        break;
    }
  }, [displayFormIndex]);

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
        <Grid container padding={4}>
          {displayForm}
        </Grid>
      </Dialog>
    </div>
  );
}
