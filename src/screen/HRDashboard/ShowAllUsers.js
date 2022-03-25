import { Button, Container, Paper } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SampleUser from "./SampleUser";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function ShowAllUsers() {
    const state = useSelector((state) => {
        console.log(state);
        return state;
    });

    const dispatch = useDispatch();
    const users = [
        {
            id: "1",
            name: "name",
        },
        {
            id: "2",
            name: "value",
        },
        {
            id: "3",
            name: "abs",
        },
        {
            id: "4",
            name: "abd",
        },
    ];
    function createData(name, calories, fat, carbs, protein, price) {
        return {
            name,
            calories,
            fat,
            carbs,
            protein,
            price,
            history: [
                {
                    date: "2020-01-05",
                    customerId: "11091700",
                    amount: 3,
                },
                {
                    date: "2020-01-02",
                    customerId: "Anonymous",
                    amount: 1,
                },
            ],
        };
    }
    const rows = [
        createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
        createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
        createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
        createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
        createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
    ];
    return (
        <div>
            <TableContainer component={Container}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>
                                <strong>Dessert (100g serving)</strong>
                            </TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">
                                Protein&nbsp;(g)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <SampleUser key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button
                variant="contained"
                onClick={() => {
                    dispatch({ type: "SHOW", payload: true });
                    //dispatch(setuser(users));
                }}
            >
                Button
            </Button>
        </div>
    );
}

export default ShowAllUsers;
