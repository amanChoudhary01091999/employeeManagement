import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import { CircularProgress } from "@mui/material";
import SampleUser from "./SampleUser";
import { useDispatch, useSelector } from "react-redux";
import { userGetRequest } from "../../actions/user.action";
import { makeStyles } from "@mui/styles";
import Spinner from "../../components/spinner/Spinner";

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === "rtl" ? (
                    <LastPageIcon />
                ) : (
                    <FirstPageIcon />
                )}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === "rtl" ? (
                    <FirstPageIcon />
                ) : (
                    <LastPageIcon />
                )}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

const useStyle = makeStyles((theme) => ({
    tableContainer: {
        borderRadius: 0,
    },
    tableHead: {
        borderBottom: "none",
        backgroundColor: "#f5f5f5",
        fontFamily: "Rubik",
        padding: "10px",
    },
    tableBody: {
        borderBottom: "none",
        fontFamily: "sans-serif",
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

// const rows = [];
// for (let i = 0; i < 100; i++) {
//     rows[i] = {
//         id: i,
//         name: "Gautam",
//         email: "krgautam@gmail.com",
//         mobileNo: "1234567890",
//     };
// }

export default function ShowAllUsers() {
    const dispatch = useDispatch();
    const classes = useStyle();
    const { loading, userInfo, error } = useSelector(
        (state) => state.userGetReducer
    );
    const rows = userInfo ? userInfo : [];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const postData = useSelector((state) => state.userPostReducer);
    const deleleData = useSelector((state) => state.userDeleteReducer);
    const updateData = useSelector((state) => state.userUpdateReducer);
    React.useEffect(() => {
        dispatch(userGetRequest());
    }, [postData.userInfo, deleleData.userInfo, updateData.userInfo]);

    return (
        <div>
            {(loading || deleleData.loading) && <Spinner />}
            <TableContainer
                component={Paper}
                elevation={0}
                className={classes.tableContainer}
            >
                <Table
                    sx={{ minWidth: 500 }}
                    aria-label="custom pagination table"
                    stickyHeader
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align="left"
                                className={classes.tableHead}
                                sx={{
                                    borderStartStartRadius: 10,
                                    borderEndStartRadius: 10,
                                }}
                            >
                                Name
                            </TableCell>
                            <TableCell
                                align="center"
                                className={classes.tableHead}
                            >
                                Email
                            </TableCell>
                            <TableCell
                                align="center"
                                className={classes.tableHead}
                            >
                                Phone No
                            </TableCell>
                            <TableCell
                                align="center"
                                className={classes.tableHead}
                            >
                                status
                            </TableCell>
                            <TableCell
                                align="center"
                                className={classes.tableHead}
                            >
                                Edit
                            </TableCell>
                            <TableCell
                                align="center"
                                className={classes.tableHead}
                                sx={{
                                    borderEndEndRadius: 10,
                                    borderStartEndRadius: 10,
                                }}
                            >
                                Delete
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                              )
                            : rows
                        ).map((row) => (
                            <SampleUser key={row.id} row={row} />
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={10} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[
                                    5,
                                    10,
                                    25,
                                    { label: "All", value: -1 },
                                ]}
                                colSpan={10}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        "aria-label": "rows per page",
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
}
