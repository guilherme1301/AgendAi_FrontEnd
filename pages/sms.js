import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import styles from "../styles/Dashboard.module.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { Context } from "../pages/contexts/userContext";
import axios from './axios';
import { notification, Form, Input, Button } from 'antd';
import "antd/dist/antd.css";

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
          <Grid container spacing={5} mt={5} mb={9} className={styles.containerSms}>
            <Grid item xs={2} className={styles.arrowCarrouselSms}>
              <ArrowBackIosIcon sx={{ fontSize: 20 }}></ArrowBackIosIcon><span onClick={() => router.back()}>Voltar</span>
            </Grid>

            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={sendMessage}
              autoComplete="off"
            >
              <Form.Item
                name="code"
                rules={[
                  {
                    required: true,
                    message: 'Please input um código!',
                  }
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}
              >
                <Button type="primary" htmlType="submit" onClick={() => sendMessage(JSON.parse(userData)?.phone)}>
                  Avançar
                </Button>
              </Form.Item>
            </Form>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}