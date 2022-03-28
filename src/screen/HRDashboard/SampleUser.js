import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Delete, Edit } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { userDeleteRequest } from "../../actions/userAction";

function SampleUser(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const { userInfo, loading, error } = useSelector(
        (state) => state.userDeleteReducer
    );
    const onDelete = (id) => {
        if (window.confirm("Are You Sure")) dispatch(userDeleteRequest(id));
    };
    return (
        <TableRow key={row.name}>
            <TableCell colSpan={2} align="left">
                {row.name}
            </TableCell>
            <TableCell colSpan={2} align="center">
                {row.email}
            </TableCell>
            <TableCell colSpan={2} align="center">
                {row.mobileNo}
            </TableCell>
            <TableCell colSpan={2} align="center">
                <IconButton color="primary">
                    <Edit />
                </IconButton>
            </TableCell>
            <TableCell colSpan={2} align="center">
                <LoadingButton
                    loading={loading}
                    color="error"
                    onClick={() => onDelete(row.id)}
                >
                    <Delete />
                </LoadingButton>
            </TableCell>
        </TableRow>
    );
}

export default SampleUser;
