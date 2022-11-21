import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styles from "../styles/Dashboard.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
              <Grid container spacing={5} mt={5} mb={9} className={styles.containerSms}>
              <Grid item xs={2} className={styles.arrowCarrouselSms}>
                <ArrowBackIosIcon sx={{ fontSize: 20 }}></ArrowBackIosIcon><span onClick={() => router.back()}>Voltar</span> 
              </Grid>
              <Grid item xs={12} className={styles.textDiv}>
                <h2>Antes de continuarmos...</h2>
              </Grid>
                <Grid item xs={12} className={styles.textDiv}>
                  <span>Enviamos um código de confirmação para o seu Whatsapp, favor inserir o código abaixo</span>
                </Grid>
                <Grid item xs={12} className={styles.gridSms}>
                  <TextField id="number1" className={styles.textSms} variant="outlined" placeholder="-" inputProps={{ maxLength: 1 }} />
                  <TextField id="number2" className={styles.textSms} variant="outlined" placeholder="-" inputProps={{ maxLength: 1 }} />
                  <TextField id="number3" className={styles.textSms} variant="outlined" placeholder="-" inputProps={{ maxLength: 1 }} />
                  <TextField id="number4" className={styles.textSms} variant="outlined" placeholder="-" inputProps={{ maxLength: 1 }} />
                </Grid> 
                <Grid item xs={12} className={styles.gridSms}>
                  <Button className={styles.buttonText} variant="outlined">Avançar</Button>
                </Grid>              
              </Grid>

        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}