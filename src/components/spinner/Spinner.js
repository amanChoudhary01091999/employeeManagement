import { CircularProgress } from "@mui/material";
import React from "react";

function Spinner() {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                backgroundColor: "transparent",
            }}
        >
            <CircularProgress
                color="inherit"
                style={{
                    color: "indigo",
                    position: "fixed",
                    bottom: "50%",
                }}
            />
        </div>
    );
}

export default Spinner;
