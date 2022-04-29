import { style } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Stack, Typography, Grid } from "@mui/material";

function UserDetailBGV() {
    const useStyle = makeStyles(() => ({
        container: {
            backgroundColor: "#F3F3F3",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
        },
        appBarContainer: {},
        formContainer: {
            margin: "auto",
        },
        paperStyle: {
            border: true,
            borderRadius: "10px",
            padding: 40,
            margin: 40,
        },
    }));
    const classes = useStyle();
    return (
        <Paper
            className={classes.paperStyle}
            variant="outlined"
            sx={{ borderRadius: 4 }}
        >
            <Stack direction={"row"} gap={4}></Stack>
            <Stack direction={"row"} gap={4}>
                <Typography>First Name : </Typography>
            </Stack>
            <Stack direction={"row"} gap={4}>
                <Typography>First Name : </Typography>
                <Typography>Gautam</Typography>
            </Stack>
            <Stack direction={"row"} gap={4}>
                <Typography>First Name : </Typography>
                <Typography>Gautam</Typography>
            </Stack>
            <Stack direction={"row"} gap={4}>
                <Typography>First Name : </Typography>
                <Typography>Gautam</Typography>
            </Stack>
            <Stack direction={"row"} gap={4}>
                <Typography>First Name : </Typography>
                <Typography>Gautam</Typography>
            </Stack>
        </Paper>
    );
}

export default UserDetailBGV;
