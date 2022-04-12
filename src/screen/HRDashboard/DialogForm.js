import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openDialog, closeDialog } from "../../actions/user.action";
import { AddSharp } from "@mui/icons-material";
import AddUserForm from "./AddUserForm";

function DialogForm() {
    const dispatch = useDispatch();
    const { open, user } = useSelector((state) => state.dialogReducer);
    const handleClickOpen = () => {
        dispatch(openDialog());
    };
    const handleClose = () => {
        dispatch(closeDialog());
    };
    return (
        <div>
            <Button
                variant="contained"
                disableElevation={true}
                onClick={handleClickOpen}
                size="large"
                style={{ backgroundColor: "indigo" }}
            >
                <AddSharp style={{ marginLeft: "-10px" }} />
                <Typography
                    style={{ marginLeft: 5 }}
                    fontSize="15px"
                    fontFamily={"Rubik"}
                >
                    New User
                </Typography>
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <AddUserForm update={user} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogForm;
