import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import styles from "../../styles/dialog.module.css";

export default function DialogAdd() {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState('');
  const [user, setUser] = useState('Pedro Augusto');

  const [type, setType] = useState(['Corte de cabelo', 'Desenhar a barba']);
  const [day, setDay] = useState(['Sexta-feira - 26/08', 'Quinta-feira - 29/09']);
  const [hour, setHour] = useState(['16:00h', '12:00h']);


  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.2835 1.33334C2.59684 1.33334 1.50684 2.48868 1.50684 4.27734V9.72268C1.50684 11.5113 2.59684 12.6667 4.2835 12.6667H10.0622C11.7495 12.6667 12.8402 11.5113 12.8402 9.72268V4.27734C12.8402 2.48868 11.7495 1.33334 10.0628 1.33334H4.2835ZM10.0622 13.6667H4.2835C2.02417 13.6667 0.506836 12.0813 0.506836 9.72268V4.27734C0.506836 1.91868 2.02417 0.333344 4.2835 0.333344H10.0628C12.3222 0.333344 13.8402 1.91868 13.8402 4.27734V9.72268C13.8402 12.0813 12.3222 13.6667 10.0622 13.6667Z" fill="#666666" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3823 9.08202C6.25497 9.08202 6.1263 9.03335 6.02897 8.93535L4.4463 7.35335C4.25097 7.15802 4.25097 6.84202 4.4463 6.64668C4.64164 6.45135 4.95764 6.45135 5.15297 6.64668L6.3823 7.87468L9.19297 5.06468C9.3883 4.86935 9.7043 4.86935 9.89964 5.06468C10.095 5.26002 10.095 5.57602 9.89964 5.77135L6.73564 8.93535C6.6383 9.03335 6.5103 9.08202 6.3823 9.08202Z" fill="#666666" />
        </svg>
      </div>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
          <svg className={styles.close} onClick={handleClose} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0049 27.5348C15.6049 27.5348 15.2049 27.3827 14.9007 27.0765C14.2903 26.4661 14.2903 25.4786 14.9007 24.8681L24.884 14.8848C25.4944 14.2744 26.4819 14.2744 27.0923 14.8848C27.7028 15.4952 27.7028 16.4827 27.0923 17.0931L17.109 27.0765C16.8048 27.3827 16.4049 27.5348 16.0049 27.5348Z" fill="#666666"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9926 27.5408C25.5926 27.5408 25.1926 27.3888 24.8884 27.0825L14.8968 17.0888C14.2864 16.4783 14.2864 15.4908 14.8968 14.8804C15.5093 14.27 16.4968 14.27 17.1051 14.8804L27.0968 24.8742C27.7072 25.4846 27.7072 26.4721 27.0968 27.0825C26.7926 27.3888 26.3905 27.5408 25.9926 27.5408Z" fill="#666666"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9686 3.29175C6.69775 3.29175 3.2915 6.90216 3.2915 12.4917V29.5084C3.2915 35.098 6.69775 38.7084 11.9686 38.7084H30.0269C35.2998 38.7084 38.7082 35.098 38.7082 29.5084V12.4917C38.7082 6.90216 35.2998 3.29175 30.029 3.29175H11.9686ZM30.0269 41.8334H11.9686C4.90817 41.8334 0.166504 36.8792 0.166504 29.5084V12.4917C0.166504 5.12091 4.90817 0.166748 11.9686 0.166748H30.029C37.0894 0.166748 41.8332 5.12091 41.8332 12.4917V29.5084C41.8332 36.8792 37.0894 41.8334 30.0269 41.8334Z" fill="#666666"/>
          </svg>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={styles.title}>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="98" height="98" rx="7" fill="#EFEFF0"/>
              <path d="M6 6L94 94" stroke="#AFB1B6" stroke-width="2"/>
              <path d="M94 6L6 94" stroke="#AFB1B6" stroke-width="2"/>
              <rect x="1" y="1" width="98" height="98" rx="7" stroke="#AFB1B6" stroke-width="2"/>
            </svg>
            <div style={{marginLeft: 10}}>{user}</div>
          </DialogContentText>

          <Box sx={{ minWidth: 453, marginBottom: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipo de serviço</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                {type.map(item => (
                  <MenuItem value={10}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <div style={{display: 'flex'}}>
            <div>
              <Box sx={{ minWidth: 226 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Dia</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    {day.map(item => (
                      <MenuItem value={10}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div>
              <Box sx={{ minWidth: 226 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Hora</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                     {hour.map(item => (
                        <MenuItem value={10}>{item}</MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button className={styles.buttons} onClick={handleClose}>Cancelar Agendamento</Button>
          <Button className={styles.buttons} onClick={handleClose} autoFocus>Salvar Alterações</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}