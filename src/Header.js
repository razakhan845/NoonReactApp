import React from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Header = () => {
    return (
        <React.Fragment>
            <AppBar sx={{ background: "#FEEE00" }}>
                <Toolbar>
                    <img width={"8%"} src="https://theme.zdassets.com/theme_assets/1061178/9e8c91f10b97dcebdd7b45d6e0610b689662bcbe.png" />

                    <TextField
                        sx={{ marginLeft: "80px", width: "80%", background: "white" }}
                        placeholder="What are you looking for?" />
                    <Tabs sx={{ marginLeft: "auto", textColor: "black" }}>
                        <Tab sx={{ fontSize: "100%", fontWeight: "bold" }}
                            label="العربية" />
                    </Tabs>

                    <Tabs sx={{ marginLeft: "0px", textColor: "black" }}>
                        <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
                            icon={<PersonOutlineOutlinedIcon />}
                            iconPosition="end"
                            label="Sign In" />
                    </Tabs>
                    <Tabs sx={{ marginLeft: "0px", textColor: "black" }}>
                        <Tab sx={{ fontSize: "90%", fontWeight: "bold" }}
                            icon={<ShoppingCartOutlinedIcon />}
                            iconPosition="end"
                            label="Cart" />
                    </Tabs>

                </Toolbar>
            </AppBar>
            {/* =========Dropdowns=========== */}
        </React.Fragment>
    )
};

export default Header;