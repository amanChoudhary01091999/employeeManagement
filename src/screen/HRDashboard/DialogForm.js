import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { openDialog, closeDialog } from "../../actions/userAction";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddUserForm from "./AddUserForm";

function DialogForm() {
    const dispatch = useDispatch();
    const { open } = useSelector((state) => state.dialogReducer);
    console.log(open);
    const handleClickOpen = () => {
        dispatch(openDialog());
    };
    const handleClose = () => {
        dispatch(closeDialog());
    };
    return (
        <div>
            <Fab
                color="primary"
                aria-label="add"
                onClick={handleClickOpen}
                style={{
                    position: "absolute",
                    bottom: 50,
                    right: 50,
                }}
            >
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                {/* <DialogTitle style={{ alignSelf: "center" }}>
                    Add user
                </DialogTitle> */}
                <DialogContent>
                    <AddUserForm />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogForm;
