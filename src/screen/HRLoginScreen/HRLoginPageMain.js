import { Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import LoginAppBar from "./LoginAppBar";
import LoginForm from "./LoginForm";
import LoginFormImage from "./LoginFormImage";

const useStyle = makeStyles((theme) => ({
    container: {},
    imageContainer: {
        backgroundColor: "indigo",
        height: "100vh",
    },
    formContainer: {},
}));
function HRLoginPageMain() {
    const classes = useStyle();
    return (
        <div style={{ backgroundColor: "#F3F3F3", paddingBottom: "10px" }}>
            <LoginAppBar />
            <Container style={{ marginTop: 100, marginBottom: 100 }}>
                <Paper
                    elevation={0}
                    sx={{
                        border: true,
                        borderRadius: 3,
                        padding: 4,
                    }}
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
        // <div>
        //     <Grid container>
        //         <Grid
        //             item
        //             xs={5}
        //             alignSelf="center"
        //             className={classes.imageContainer}
        //         >
        //             {/* <LoginFormImage /> */}
        //         </Grid>
        //         <Grid
        //             item
        //             xs={7}
        //             alignSelf="center"
        //             className={classes.formContainer}
        //         >
        //             <LoginForm />
        //         </Grid>
        //     </Grid>
        // </div>
    );
}

export default HRLoginPageMain;
