import { Alert, Snackbar } from "@mui/material";
import React from "react";

function Snackbars(props) {
    const { value, severity, message } = props;
    const [open, setOpen] = React.useState(value);
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
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
                variant="filled"
                onClose={handleClose}
                severity={severity}
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Snackbars;
