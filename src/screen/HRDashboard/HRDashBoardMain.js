import { Alert, Button, Snackbar, Stack } from "@mui/material";
import React from "react";
import DashBoardAppBar from "./DashBoardAppBar";
import DialogForm from "./DialogForm";
import ShowAllUsers from "./ShowAllUsers";

function HRDashBoardMain() {
    return (
        <div style={{ padding: 30 }}>
            <Stack display={"flex"} flexDirection={"column"}>
                <div>
                    <DashBoardAppBar />
                </div>
                <div>
                    <ShowAllUsers />
                </div>
            </Stack>
        </div>
    );
}

export default HRDashBoardMain;
