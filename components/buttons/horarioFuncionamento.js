import { Grid, TextField, Button, getTypographyUtilityClass, IconButton, Checkbox, FormControlLabel, Select, MenuItem } from '@mui/material'
import { useEffect, useState } from 'react'
import styles from '../../styles/Cadastro.module.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HorarioFuncionamento = (props) => {

    const { children, onClick, day, setDia, dia, arrayPosition } = props;

    return (
        <>
            <Grid container >
                <Grid item xs={6}>
                    <FormControlLabel
                        label={day}
                        onChange={(e) => setDia({ ...dia, [day]: { ...dia[day], [day]: e.target.checked }})}
                        control={
                            <Checkbox size='small'
                            // checked={checked[0] && checked[1]}
                            // indeterminate={checked[0] !== checked[1]}
                            // onChange={handleChange1}
                            />
                        }
                    />
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction={'row'} width="100%">
                        <Grid item>
                            <Select
                                fullWidth
                                labelId="start"
                                id="start_select"
                                onChange={(e) => setDia({ ...dia, [day]: { ...dia[day], ['ini']: e.target.value }})}

                            // value={hour}
                            //label="Hora"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => (
                                    <MenuItem key={index} value={`${index}:00`}>{index}:00</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item>
                            <Select
                                fullWidth
                                labelId="start"
                                id="start_select"
                            // value={hour}
                            //label="Hora"
                                onChange={(e) => setDia({ ...dia, [day]: { ...dia[day], ['fim']: e.target.value }})}
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => (
                                    <MenuItem key={index} value={`${index}:00`}>{index}:00</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default HorarioFuncionamento