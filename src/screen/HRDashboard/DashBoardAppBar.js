import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DialogForm from "./DialogForm";
import { SearchRounded } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function DashBoardAppBar() {
    let navigate = useNavigate();
    const onLogoutClick = () => {
        localStorage.clear();
        navigate("/login", { replace: true });
    };
    return (
        <div>
            <div>
                <h2
                    style={{
                        textAlign: "left",
                        fontFamily: "Rubik",
                        fontWeight: "bold",
                    }}
                >
                    User Management
                </h2>
            </div>
            <Stack
                display={"flex"}
                alignItems="center"
                flexDirection={"row"}
                style={{ marginBottom: 30, marginTop: 30 }}
                gap={4}
            >
                <TextField
                    variant="outlined"
                    label="Search"
                    size="small"
                    sx={{ width: "30vw" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchRounded />
                            </InputAdornment>
                        ),
                    }}
                ></TextField>

                <Button
                    style={{ marginLeft: "auto" }}
                    variant="outlined"
                    onClick={onLogoutClick}
                    sx={{ color: "black" }}
                >
                    Logout
                </Button>
                <DialogForm />
            </Stack>
        </div>
    );
}
