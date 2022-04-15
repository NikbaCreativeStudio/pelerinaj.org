import { FC, useState, useRef, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TCardProps } from "../../types/cards"; 
import { TSubmit } from "../../types/order";
import Alert from '@mui/material/Alert';
import { postOrder } from "../../services/actions/order";
import CircularProgress from '@mui/material/CircularProgress';

export const ModalDialog: FC<TCardProps> = ({ card }) => {
    const inputRef = useRef(null)

    const {order, isLoading} = useAppSelector(state => state.order);

    const dispatch = useAppDispatch();

    const [input, setInput] = useState<TSubmit>({
        name: '',
        phone: '',
        order: card.title,
    })

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(postOrder(input))
    }

    return (
        <Box
            component="form"
            
            autoComplete="off"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '380px' },
                '& .MuiButton-root': { m: 1, width: '380px' },
                '& .MuiPaper-root': { m: 1, },
            }}
            onSubmit={onSubmit}
        >
            <Typography id="transition-modal-title" variant="h6" component="h2">
                Completați ancheta de mai jos pentru a efectua o rezervare de loc la<br /> <strong>{card.title}</strong>
            </Typography>
            <TextField 
                fullWidth 
                id="name" 
                name="name" 
                label="Nume Prenume" 
                variant="outlined"
                required
                onChange={e => setInput({...input, [e.target.name]: e.target.value})} 
                ref={inputRef}
                helperText="Vă rugăm să introduceți numele complet"
            />
            <TextField 
                fullWidth 
                id="phone" 
                name="phone" 
                label="Telefon de contact" 
                variant="outlined" 
                required
                onChange={e => setInput({...input, [e.target.name]: e.target.value})} 
                ref={inputRef}
                helperText="Vă rugăm să introduceți numărul de telefon."
            />
            
            <Button 
                variant="contained" 
                size="large"
                type="submit"
            >
                {isLoading ? <CircularProgress size={24} /> : 'Rezervați'}
            </Button>
            {order && <Alert severity="success">Rezervarea dvs. a fost expediată cu succes.</Alert>}
        </Box>
    )
};