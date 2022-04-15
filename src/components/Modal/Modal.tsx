import { FC } from "react";

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const ModalDialog: FC = () => {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '380px' },
                '& .MuiButton-root': { m: 1, width: '380px' },
            }}
        >
            <Typography id="transition-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <TextField fullWidth id="name" label="Nume Prenume" variant="outlined" />
            <TextField fullWidth id="phone" label="Telefon de contact" variant="outlined" />
            <Button variant="contained" size="large">Fă o rezervare</Button>
        </Box>
    )
};