import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styles from "../../styles/dialog.module.css";

export default function DialogCancel(props) {
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState({
    name: 'Pedro Augusto',
    service: 'Corte de Cabelo',
    day: 'quinta-feira (25/08)',
    hour: '15:00h'
  });

  // useEffect(() => {
  //   getById()
  // },[])

  // function getById(id) {
  //   fetch(`https://agendai-api.herokuapp.com/schedule/one?id=${id}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setUser(data.payload)
  //     console.log("data:", data)
  //   })
    
  // }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div variant="outlined" onClick={handleClickOpen}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13216 9.09114C5.00416 9.09114 4.87616 9.04247 4.77882 8.94447C4.58349 8.74914 4.58349 8.43314 4.77882 8.2378L7.97349 5.04314C8.16882 4.8478 8.48482 4.8478 8.68016 5.04314C8.87549 5.23847 8.87549 5.55447 8.68016 5.7498L5.48549 8.94447C5.38816 9.04247 5.26016 9.09114 5.13216 9.09114Z" fill="#666666" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.32851 9.09307C8.20051 9.09307 8.07251 9.0444 7.97518 8.9464L4.77785 5.7484C4.58251 5.55307 4.58251 5.23707 4.77785 5.04173C4.97385 4.8464 5.28985 4.8464 5.48451 5.04173L8.68185 8.23973C8.87718 8.43507 8.87718 8.75107 8.68185 8.9464C8.58451 9.0444 8.45585 9.09307 8.32851 9.09307Z" fill="#666666" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.84063 1.33334C2.15396 1.33334 1.06396 2.48868 1.06396 4.27734V9.72268C1.06396 11.5113 2.15396 12.6667 3.84063 12.6667H9.6193C11.3066 12.6667 12.3973 11.5113 12.3973 9.72268V4.27734C12.3973 2.48868 11.3066 1.33334 9.61996 1.33334H3.84063ZM9.6193 13.6667H3.84063C1.5813 13.6667 0.0639648 12.0813 0.0639648 9.72268V4.27734C0.0639648 1.91868 1.5813 0.333344 3.84063 0.333344H9.61996C11.8793 0.333344 13.3973 1.91868 13.3973 4.27734V9.72268C13.3973 12.0813 11.8793 13.6667 9.6193 13.6667Z" fill="#666666" />
        </svg>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <svg className={styles.close} onClick={handleClose} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0049 27.5348C15.6049 27.5348 15.2049 27.3827 14.9007 27.0765C14.2903 26.4661 14.2903 25.4786 14.9007 24.8681L24.884 14.8848C25.4944 14.2744 26.4819 14.2744 27.0923 14.8848C27.7028 15.4952 27.7028 16.4827 27.0923 17.0931L17.109 27.0765C16.8048 27.3827 16.4049 27.5348 16.0049 27.5348Z" fill="#666666"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9926 27.5408C25.5926 27.5408 25.1926 27.3888 24.8884 27.0825L14.8968 17.0888C14.2864 16.4783 14.2864 15.4908 14.8968 14.8804C15.5093 14.27 16.4968 14.27 17.1051 14.8804L27.0968 24.8742C27.7072 25.4846 27.7072 26.4721 27.0968 27.0825C26.7926 27.3888 26.3905 27.5408 25.9926 27.5408Z" fill="#666666"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9686 3.29175C6.69775 3.29175 3.2915 6.90216 3.2915 12.4917V29.5084C3.2915 35.098 6.69775 38.7084 11.9686 38.7084H30.0269C35.2998 38.7084 38.7082 35.098 38.7082 29.5084V12.4917C38.7082 6.90216 35.2998 3.29175 30.029 3.29175H11.9686ZM30.0269 41.8334H11.9686C4.90817 41.8334 0.166504 36.8792 0.166504 29.5084V12.4917C0.166504 5.12091 4.90817 0.166748 11.9686 0.166748H30.029C37.0894 0.166748 41.8332 5.12091 41.8332 12.4917V29.5084C41.8332 36.8792 37.0894 41.8334 30.0269 41.8334Z" fill="#666666"/>
          </svg>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className={styles.desejaCancelar}>
              Deseja cancelar o agendamento de {user.name}
              ({user.service}), {user.day}, {user.hour}?
            </div>
            <br/>
            <div className={styles.desfazer}>
              Não é possível desfazer esta ação depois de concluída.
              Deseja cancelar mesmo assim?
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={styles.buttons} onClick={handleClose}>Voltar</Button>
          <Button className={styles.buttons} onClick={handleClose} autoFocus>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}