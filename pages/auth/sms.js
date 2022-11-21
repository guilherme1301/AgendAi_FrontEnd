import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import styles from "../../styles/Dashboard.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { Context } from "../contexts/userContext";
import axios from '../axios';
import { notification, Form, Input, Button, Typography } from 'antd';
import "antd/dist/antd.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const { Title } = Typography;
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
  const { isLogged, userData } = useContext(Context);

  const shopId = userData?.id;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function sendMessage(phone, values) {

    if (shopId === undefined) {
      const response = axios.post(`/user-client/confirme-account?phone=${phone}`,
        {
          code: values
        }).then((res) => {
          notification.success({
            message: 'Mensagem enviada!',
            placement: 'bottomRight'
          });
          return res.data;
        }).catch((err) => {
          notification.error({
            message: err.response.data.message,
            placement: 'bottomRight'
          });
          throw err.response.data.message;
        });
      return response;
    } else {
      const response = axios.post(`/user-shop/confirme-account?phone=${phone}`,
        {
          code: values
        }).then((res) => {
          notification.success({
            message: 'Mensagem enviada!',
            placement: 'bottomRight'
          });
          return res.data;
        }).catch((err) => {
          notification.error({
            message: err.response.data.message,
            placement: 'bottomRight'
          });
          throw err.response.data.message;
        });
      return response;
    }
  }

  return (
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 100 }}
            initialValues={{ remember: true }}
            onFinish={sendMessage}
            autoComplete="off"
          >
            <Grid item xs={2} className={styles.arrowCarrouselSms}>
              <ArrowBackIosIcon sx={{ fontSize: 20 }}></ArrowBackIosIcon><span onClick={() => router.back()}>Voltar</span>
            </Grid>
            <Title className={styles.marginTop} level={3}>Antes de continuarmos...</Title>
            <Title className={styles.marginTop} level={5}>Enviamos um código de confirmação para o seu whatsapp, favor inserir o código abaixo.</Title>
            <Form.Item
              className={styles.marginTop}
              name="code"
              rules={[
                {
                  required: true,
                  message: 'Porfavor insira um código!',
                }
              ]}
            >
              <Input className={styles.marginTop} size="large" />
            </Form.Item>
            <Form.Item className={styles.marginTop} wrapperCol={{ offset: 100, span: 100 }}
            >
              <Button type="primary" className={styles.arrowCarrousel} htmlType="submit" onClick={() => sendMessage(JSON.parse(userData)?.phone)}>
                Avançar
              </Button>
            </Form.Item>
          </Form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}