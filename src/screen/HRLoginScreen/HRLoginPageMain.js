import { Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import LoginAppBar from "./LoginAppBar";
import LoginForm from "./LoginForm";
import LoginFormImage from "./LoginFormImage";

const useStyle = makeStyles(() => ({
    container: {
        backgroundColor: "#F3F3F3",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        minWidth: "1000px",
    },
    appBarContainer: {},
    formContainer: {
        margin: "auto",
    },
    paperStyle: {
        border: true,
        borderRadius: "100px",
        padding: 40,
    },
}));
function HRLoginPageMain() {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <LoginAppBar className={classes.appBarContainer} />
            <Container className={classes.formContainer}>
                <Paper
                    elevation={0}
                    sx={{ borderRadius: 4 }}
                    className={classes.paperStyle}
                >
                    <Grid container>
                        <Grid item xs={6} alignSelf="center">
                            <LoginFormImage />
                        </Grid>
                        <Grid item xs={6} alignSelf="center">
                            <LoginForm />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default HRLoginPageMain;
