import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { openDialog, closeDialog } from "../../actions/userAction";
import { Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddUserForm from "./AddUserForm";
import { AddSharp } from "@mui/icons-material";

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
                {/* <DialogTitle style={{ alignSelf: "center" }}>
                    Add user
                </DialogTitle> */}
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
