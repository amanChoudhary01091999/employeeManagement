import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import LoginAppBar from "./LoginAppBar";
import LoginForm from "./LoginForm";
import LoginFormImage from "./LoginFormImage";

function HRLoginPageMain() {
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
    );
}

export default HRLoginPageMain;
