import { Grid, TextField, Button, getTypographyUtilityClass, IconButton } from '@mui/material'
import { useState } from 'react'
import styles from '../../styles/Cadastro.module.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const BackButton = (props) => {
    const { onClick, children } = props;
    const handleClick = (e) => {
        e && e.preventDefault();
        onClick && onClick();
    }

    return (
        <>
            <Grid container >
                <Grid item style={{ width: 120, height: 'auto' }}>
                    <IconButton size='large' disableRipple onClick={handleClick}>
                        <KeyboardArrowLeftIcon htmlColor='#000' />
                        <span style={{ fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#666666', marginLeft: '10px' }}>
                            Voltar
                        </span>
                    </IconButton>
                </Grid>
            </Grid>
        </>
    )
}

export default BackButton