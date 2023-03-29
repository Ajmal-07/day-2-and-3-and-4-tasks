import { colors } from "@material-ui/core";
import { Shop,ShoppingBag,Phone,Facebook,Twitter,Instagram} from "@mui/icons-material";
import {AppBar,Toolbar, Typography} from "@mui/material";
import React from "react";
import './App.css'

import BasicTextFields from "./box";
import ImageAvatars from "./logo";
import Asynchronous from "./search";
function Appbar(){
    return(
        <AppBar >
            <Toolbar >
                
                <ImageAvatars/>
                <Typography id='car'>Store</Typography>
                <Shop/>
                
                <Typography id='cart'>Cart</Typography>
                <ShoppingBag/>

                <Typography id='phone'>Phone</Typography>
                <Phone/>
                
                <a href="https://www.facebook.com/" target={"_blank"}><Facebook id="fb"/></a>
                <a href="https://www.instagram.com/" target={"_blank"}><Instagram id="ig"/></a>
                <a href="https://www.twitter.com/" target={"_blank"}><Twitter id="tw"/></a>

            
                {/* <BasicTextFields /> */}
                <Asynchronous/>
               
                

               
                
            </Toolbar>
        </AppBar>
    );
}
export default Appbar;