import { Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import LoginAppBar from "./LoginAppBar";
import LoginForm from "./LoginForm";
import LoginFormImage from "./LoginFormImage";

const container = {
    backgroundColor: "#F3F3F3",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
};
const formContainer = {
    margin: "auto",
};

const paperStyle = {
    my: 4,
    border: true,
    borderRadius: 3,
    padding: 4,
};
function HRLoginPageMain() {
    return (
        <div style={container}>
            <LoginAppBar />
            <Container sx={formContainer}>
                <Paper elevation={0} sx={paperStyle}>
                    <Grid container>
                        <Grid item md={6} xs={12} alignSelf="center">
                            <LoginFormImage />
                        </Grid>
                        <Grid item md={6} xs={12} alignSelf="center">
                            <LoginForm />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default HRLoginPageMain;
