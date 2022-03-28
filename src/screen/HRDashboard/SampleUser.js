import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Delete, Edit } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

function SampleUser(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const onDelete = (id) => {};
    return (
        
           
            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {row.calories}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {row.fat}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                <IconButton color="primary">
                                    <Edit />
                                </IconButton>
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                <LoadingButton color="error">
                                    <Delete />
                                </LoadingButton>
                            </TableCell>
                        </TableRow>
                    

        
    );
}

export default SampleUser;
