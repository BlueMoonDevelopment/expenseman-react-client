import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as MySVG} from "../../icons/top-arrow.svg";
import {CssBaseline} from '@mui/material';
import Button from "@mui/material/Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import theme from '../../theme';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://bluemoondev.org" target="_blank" rel="noreferrer">
                BlueMoonDevelopment
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    const styles: React.CSSProperties = {
        backgroundColor: theme.palette.primary.main,
        color: 'white'
    }
    return (
        <>
            <ScrollToTop smooth component={<MySVG/>} style={styles}/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '50vh',
                }}
            >
                <CssBaseline/>
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography variant="body1">
                            <Link href="https://github.com/BlueMoonDevelopment" target="_blank" rel="noreferrer">
                                <Button variant="outlined" startIcon={<GitHubIcon />}>
                                    BlueMoonDevelopment
                                </Button>
                            </Link>
                            <Link href="https://github.com/BlueMoonDevelopment/expenseman-react-client" target="_blank" rel="noreferrer">
                                <Button variant="outlined" startIcon={<GitHubIcon />}>
                                    Source Code
                                </Button>
                            </Link>
                        </Typography>
                        <Copyright/>
                    </Container>
                </Box>
            </Box>
        </>
    );
}
