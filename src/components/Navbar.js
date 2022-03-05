import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/consts";

const Navbar = () => {
    const user = false;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color={'secondary'} position="static">
                <Toolbar variant={'dense'}>
                    <Grid container justify={'flex-end'}>
                        {user ?
                            <NavLink to={CHAT_ROUTE}>
                                <Button variant={'outlined'}>Logout</Button>
                            </NavLink>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button variant={'outlined'}>Login</Button>
                            </NavLink>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;