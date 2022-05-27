import { Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function FilePicker(props) {
    const apiKey = `${process.env.REACT_APP_API_URL}`;
    const { formState, name, defaultValue } = props;
    const {
        register,
        formState: { errors },
        watch,
    } = formState;
    const url = apiKey + "/";
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
                    accept={"image/png, image/jpg, image/jpeg"}
                    {...register(name, {
                        required: {
                            value: true,
                            message: "this field is required",
                        },
                    })}
                />
                {defaultValue && (
                    <img
                        src={url + defaultValue}
                        height={"40px"}
                        width={"300px"}
                    ></img>
                )}

                {/* <TextField
                    label={" "}
                    InputLabelProps={{ shrink: false }}
                    type={"text"}
                    size={"small"}
                    value={value}
                    disabled
                ></TextField> */}
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
