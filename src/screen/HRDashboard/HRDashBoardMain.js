import { Alert, Button, Snackbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DashBoardAppBar from "./DashBoardAppBar";
import DialogForm from "./DialogForm";
import ShowAllUsers from "./ShowAllUsers";

function HRDashBoardMain() {
    const history = useNavigate();
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
    const onCli = () => {
        // const accessToken = localStorage.getItem("accessToken");
        // if (accessToken !== null) {
        //     localStorage.removeItem("accessToken");
        //     history("/", { replace: true });
        // }
    };
    return (
        <div>
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
            <DialogForm />
        </div>
    );
}

export default HRDashBoardMain;
