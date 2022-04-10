import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { CheckCircle, Delete, Edit } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { openDialog, userDeleteRequest } from "../../actions/userAction";
import "./dashboard.css";
import { makeStyles } from "@mui/styles";
import { Grid, Avatar, Typography, Stack } from "@mui/material";

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
function SampleUser(props) {
    const classes = useStyle();
    const { row } = props;
    const dispatch = useDispatch();
    const { userInfo, loading, error } = useSelector(
        (state) => state.userDeleteReducer
    );
    const onDelete = (id) => {
        if (window.confirm("Are You Sure")) dispatch(userDeleteRequest(id));
    };
    const onUpdate = (row) => {
        dispatch(openDialog(row));
    };
    return (
        <TableRow key={row.name}>
            <TableCell align="left" className={classes.tableBody}>
                <Grid container alignItems="center">
                    <Grid item lg={2}>
                        <Avatar
                            className={classes.tableAvatar}
                            alt={row.name}
                            src="."
                        />
                    </Grid>
                    <Grid item lg={10}>
                        <Typography>{row.name}</Typography>
                    </Grid>
                </Grid>
            </TableCell>
            <TableCell align="center" className={classes.tableBody}>
                {row.email}
            </TableCell>
            <TableCell align="center" className={classes.tableBody}>
                {row.mobileNo}
            </TableCell>
            <TableCell align="center" className={classes.tableBody}>
                {/* <Stack direction={"row"}>
                    <CheckCircle />
                    <CheckCircle />
                    <CheckCircle />
                    <CheckCircle />
                </Stack> */}
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
