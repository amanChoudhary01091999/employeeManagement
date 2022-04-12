import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { CheckCircleOutlined, Delete, Edit } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { openDialog, userDeleteRequest } from "../../actions/user.action";
import { makeStyles } from "@mui/styles";
import { Avatar, Typography, Stack } from "@mui/material";

const useStyle = makeStyles((theme) => ({
    tableBody: {
        borderBottom: "none",
        fontFamily: "Rubik",
        padding: "8px",
    },
    tableName: {
        fontWeight: "bold",
    },
    tableAvatar: {
        height: "30px",
        width: "30px",
        fontFamily: "Rubik",
        fontSize: "100%",
        backgroundColor: "#5c6bc0",
    },
}));
function SampleUser({ row }) {
    const classes = useStyle();
    const dispatch = useDispatch();

    const onDelete = (id) => {
        if (window.confirm("Are You Sure")) dispatch(userDeleteRequest(id));
    };
    const onUpdate = (row) => {
        dispatch(openDialog(row));
    };
    return (
        <TableRow key={row.name}>
            <TableCell align="left" className={classes.tableBody}>
                <Stack
                    display={"flex"}
                    direction={"row"}
                    gap={2}
                    alignItems={"center"}
                    textAlign={"center"}
                >
                    <Avatar
                        className={classes.tableAvatar}
                        alt={row.name}
                        src="."
                    />
                    <Typography textAlign={"center"}>{row.name}</Typography>
                </Stack>
            </TableCell>
            <TableCell align="center" className={classes.tableBody}>
                {row.email}
            </TableCell>
            <TableCell align="center" className={classes.tableBody}>
                {row.mobileNo}
            </TableCell>
            <TableCell align="center" className={classes.tableBody}>
                <Stack
                    whiteSpace={"nowrap"}
                    display="flex"
                    flexDirection={"row"}
                    justifyContent={"center"}
                    gap={1}
                >
                    <CheckCircleOutlined color={"success"} />
                    <CheckCircleOutlined color={"warning"} />
                    <CheckCircleOutlined />
                    <CheckCircleOutlined />
                    <CheckCircleOutlined />
                    <CheckCircleOutlined />
                </Stack>
            </TableCell>
            <TableCell align="center" className={classes.tableBody}>
                <IconButton color="primary" onClick={() => onUpdate(row)}>
                    <Edit />
                </IconButton>
            </TableCell>
            <TableCell align="center" className={classes.tableBody}>
                <LoadingButton
                    loading={false}
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
