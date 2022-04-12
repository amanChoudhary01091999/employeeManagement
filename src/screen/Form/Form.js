import { Stack, TextField, FormControlLabel, Radio } from "@mui/material";
import React from "react";
import EPFFormMain from "../EPFForm/EPFFormMain";

function Form() {
    return (
        <div>
            <Stack direction={"row"}>
                <div
                    style={{
                        backgroundColor: "indigo",
                        height: "100vh",
                        width: "10vw",
                        padding: "10px",
                    }}
                ></div>
                <div
                    style={{
                        height: "100vh",
                        width: "90vw",
                        padding: "10px",
                    }}
                >
                    <FormControlLabel
                        //defaultChecked={defaultChecked}
                        control={
                            <Radio
                                defaultChecked={true}
                                size="small"
                                color="success"
                            />
                        }
                        label={"Male"}
                        value={"Male"}
                        name="radio"
                        id="radio"
                    />
                    <Radio
                        defaultChecked={false}
                        size="small"
                        color="success"
                        aria-label={"Female"}
                        value={"Female"}
                        name="radio"
                    />

                    <FormControlLabel
                        //defaultChecked={defaultChecked}
                        control={
                            <Radio
                                defaultChecked={false}
                                size="small"
                                color="success"
                            />
                        }
                        label={"other"}
                        value={"other"}
                        name="radio"
                        id="radio"
                    />
                </div>
            </Stack>
        </div>
    );
}

export default Form;
