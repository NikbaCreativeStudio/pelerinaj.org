import { FC, useState, MouseEvent } from "react";
import { Link } from "react-scroll";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Logo from '../../images/logo.svg';
import  styles  from './Header.module.css';

const pages = [
    { 'title': 'Pelerinaje', 'link': 'destinations'}, 
    { 'title': 'Despre noi', 'link': 'about'},
    { 'title': 'Contact', 'link': 'contacts'}
];

export const Header: FC = () => {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <img src={Logo} alt="Logo" className={styles.logo} />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link
                                    activeClass="active"
                                    to={page.link}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    key={page.title} onClick={handleCloseNavMenu}
                                    className={styles.link_mobile}
                                >
                                    <Typography textAlign="center">{page.title}</Typography>
                                    </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <img src={Logo} alt="Logo" className={styles.logo} />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link
                            activeClass="active"
                            to={page.link}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            key={page.title} onClick={handleCloseNavMenu}
                            className={styles.link}
                        >
                                {page.title}
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="contained" color="secondary" startIcon={<LocalPhoneIcon />}>
                            Contacte
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};