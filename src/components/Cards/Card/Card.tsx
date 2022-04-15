import { FC, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { TCardProps } from '../../../types/cards';

import { ModalDialog } from '../../Modal/Modal'

import styles from './Card.module.css';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 40,
    p: 4,
};

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export const CardItem: FC<TCardProps> = ({ card }) => {

    const [expanded, setExpanded] = useState(false);
    const [favorite, setFavorite] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleAddToFavorite = () => {

        if (localStorage.getItem(`card-${card.id}`)) {
            localStorage.removeItem(`card-${card.id}`);
            setFavorite(false);
        } else {
            localStorage.setItem(`card-${card.id}`, 'true');
            setFavorite(true);
        }

    };


    useEffect(() => {

        if (localStorage.getItem(`card-${card.id}`)) {
            setFavorite(true);
        }
    }, [card.id]);


    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src={card.country.image.data.thumbnails[8].url} />
                }
                title={card.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={card.image.data.thumbnails[7].url}
                alt={card.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {card.short}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={handleAddToFavorite}
                >
                    <FavoriteIcon
                        {...(favorite ? { color: 'secondary' } : {})}
                    />
                </IconButton>
                <IconButton
                    aria-label="order now"
                    onClick={handleOpen}
                >
                    <ShoppingCartIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div className={styles.text} dangerouslySetInnerHTML={{ __html: card.text }} />
                </CardContent>
            </Collapse>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <ModalDialog />
                    </Box>
                </Fade>
            </Modal>
        </Card>
    );
}