import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";

function FilePicker(props) {
    const { formState, name, validation, type, defaultValue, label } = props;
    const {
        register,
        formState: { errors },
    } = formState;
    return (
        <div>
            <div>
                {/* <TextField
                    type={type}
                    value={'c:/passwords.txt'}

                    id={name}
                    variant="filled"
                    //defaultValue={defaultValue?defaultValue:""}
                    size="small"
                    fullWidth
                    {...register(`${name}`, validation)}
                    error={errors[name] !== undefined}
                    helperText={errors[name]?.message}
                /> */}
                <label
                    style={{
                        border: "1px solid #ccc",
                        display: "inline-block",
                        padding: "6px 12px",
                        cursor: "pointer",
                        alignContent: "center",
                    }}
                >
                    <TextField
                        type={"file"}
                        id={name}
                        variant="filled"
                        {...register(`${name}`, validation)}
                        error={errors[name] !== undefined}
                        helperText={errors[name]?.message}
                    ></TextField>
                    {defaultValue !== undefined ? (
                        <>
                            <p style={{ align: "left", fontFamily: "muller" }}>
                                <Box
                                    sx={{
                                        bgcolor: "#cfe8fc",
                                        height: "30",
                                        fontSize: "20",
                                        fontFamily: "Muller",
                                        textAlign: "center",
                                    }}
                                >
                                    Previous File Chosen:
                                </Box>
                                {defaultValue ? defaultValue : ""}
                            </p>
                        </>
                    ) : null}
                </label>
            </div>
        </div>
    );
}

export default FilePicker;
