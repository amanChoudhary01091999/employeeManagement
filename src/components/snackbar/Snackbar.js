import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeToast } from "../../actions/toast.action";

function Snackbars() {
    const dispatch = useDispatch();
    const obj = useSelector((state) => state.toastReducer);
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        dispatch(closeToast("", obj.severity));
    };
    return (
        <Snackbar open={obj.open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
                variant="filled"
                onClose={handleClose}
                severity={obj.severity}
                sx={{ width: "100%" }}
            >
                {obj.message}
            </Alert>
        </Snackbar>
    );
}

export default Snackbars;
