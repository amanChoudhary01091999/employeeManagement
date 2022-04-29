import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { da } from "date-fns/locale";
import React, { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import Validation from "../validation/Validations";

function FilePicker(props) {
    const { formState, name, validation, type, defaultValue, label } = props;
    const {
        register,
        formState: { errors },
        watch,
        setError,
        control,
        clearErrors,
    } = formState;
    const fileWatch = watch(name);
    const fileSize = fileWatch && fileWatch[0] ? fileWatch[0].size : 1;
    const [value, setValues] = useState(
        defaultValue === null ? "" : defaultValue
    );
    useEffect(() => {
        if (fileWatch && fileWatch[0]) setValues(fileWatch[0].name);
    }, [fileWatch]);

    return (
        <div>
            <Stack
                direction={"row"}
                gap={2}
                display={"flex"}
                alignItems={"center"}
            >
                <input
                    type="file"
                    className="form-control"
                    id={name}
                    accept={"image/*"}
                    {...register(name, {
                        required: {
                            value: true,
                            message: "this field is required",
                        },
                    })}
                />

                <TextField
                    label={" "}
                    InputLabelProps={{ shrink: false }}
                    type={"text"}
                    size={"small"}
                    value={value}
                    disabled
                ></TextField>

                {/* <TextField
                    type={"text"}
                    disabled={true}
                    {...register(`${name}`, vali)}
                    error={errors[name] !== undefined}
                    helperText={errors[name]?.message}
                ></TextField> */}

                {/*<div>
            <div>
                 <TextField
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
                />
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
                            <p
                                style={{ align: "left", fontFamily: "muller" }}
                            ></p>
                        </>
                    ) : null}
                </label>
                <img
                    alt=""
                    src={defaultValue}
                    style={{ height: 60, width: 100 }}
                ></img>
            </div>
        </div> */}
            </Stack>
            {errors[name] && (
                <small className="text-danger text-sm text-left">
                    {errors[name]?.message}
                </small>
            )}
        </div>
    );
}

export default FilePicker;
