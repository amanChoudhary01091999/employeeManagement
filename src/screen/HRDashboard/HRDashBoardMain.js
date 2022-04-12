import { Alert, Button, Snackbar } from "@mui/material";
import React from "react";
import DashBoardAppBar from "./DashBoardAppBar";
import DialogForm from "./DialogForm";
import ShowAllUsers from "./ShowAllUsers";

function HRDashBoardMain() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    return (
        <div style={{ padding: 30 }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    This is a success message!
                </Alert>
            </Snackbar> 

            <DashBoardAppBar />
            <ShowAllUsers />
        </div>
    );
}

export default HRDashBoardMain;
