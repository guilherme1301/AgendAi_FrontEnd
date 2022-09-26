import React from 'react';
import { Button } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import { withSnackbar } from 'notistack';

const defaultAction = props => {
    let key = null
    return (
        <>
        {/* <SnackbarProvider maxSnack={5}> */}

            <Button onClick={() => { alert(`I belong to snackbar with key ${key}`); }}>
                Alert
            </Button>
            <Button onClick={() => { props && props.closeSnackbar(key) }}>
                Dismiss
            </Button>
        {/* </SnackbarProvider> */}
        </>
    )
}
const snackbarObj = { 
   // variant: 'success', 
   autoHideDuration: 2500, 
   anchorOrigin: {
   vertical: 'bottom',
   horizontal: 'right',
   },
}
export default snackbarObj;
export {defaultAction}

