import { CircularProgress } from "@mui/material";
import React from "react";

function Spinner() {
    return (
        <CircularProgress
            color="inherit"
            disableShrink
            style={{
                color: "indigo",
                position: "absolute",
                bottom: "50%",
            }}
        />
    );
}

export default Spinner;
