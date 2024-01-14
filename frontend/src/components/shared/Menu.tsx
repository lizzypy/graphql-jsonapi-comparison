import {AppBar, Box, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

interface MenuProps {
    toggleDrawer: (input: boolean) => void
    open: boolean
}
const Menu = ({ toggleDrawer, open }: MenuProps) => {
   return( <AppBar position="static">
        <Toolbar>

            {/* hamburger icon shows the drawer on click */}
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={() => toggleDrawer(true)}
                sx={{mr: 2, display: {xs: 'block', sm: 'none',},}}>
                <MenuIcon/>
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
                anchor="right" //from which side the drawer slides in
                variant="temporary" //if and how easily the drawer can be closed
                open={open} //if open is true, drawer is shown
                onClose={() => toggleDrawer(false)} //function that is called when the drawer should close
            >

                <Box>
                    <Typography>GraphQL Documentation</Typography>
                    <Typography>Json:API Documentation</Typography>
                    <Typography>Why use a specification?</Typography>
                </Box>
            </Drawer>

        </Toolbar>
    </AppBar>)
}

export default Menu;
