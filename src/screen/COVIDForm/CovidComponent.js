import React from "react";
import Validation from "../../validation/Validations";
import DatePicker from "../../InputFiles/DatePicker";
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import TextAreaInput from "../../InputFiles/TextAreaInput";
import { useSelector } from "react-redux";
import "../BackGroundVerification/index.css";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FilePicker from "../../InputFiles/FileInput";
import { Button, Stack } from "@mui/material";

function CovidComponent({ formState, idFromDashBoard }) {
    const navigate = useNavigate();
    const { watch } = formState;

    const { userInfoCovid } = useSelector((state) => state.COVIDGetReducer);
    const { loading } = useSelector((state) => state.COVIDReducer);

    const contactedCovid = watch("conCovid", "No");
    const contactedCovidFam = watch("conCovidFam", "No");
    const vaccinated = watch("vaccinated", "No");

    const validation = Validation().validationDegree;
    const validationPh = Validation().validationPhone;
    const validationName = Validation().validationName;

    const onPreviousClick = () => {
        navigate("/form/bgv-form", { replace: true });
    };
    const onNextClicked = () => {
        navigate("/form/gratuity-form", { replace: true });
    };

    return (
        <div style={{ backgroundColor: "#F3F3F3", padding: 30 }}>
            <Box>
                <Box>
                    <p
                        style={{
                            //fontFamily: "muller",
                            textAlign: "center",
                            fontSize: "3vh",
                            marginTop: "2vh",
                            padding: "0px 10px",
                        }}
                    >
                        This guideline document is subject to revision and
                        change from time to time considering the circumstances /
                        government directives and such changes shall be
                        intimated to all employees in writing
                    </p>
                </Box>
                <hr />
                {/* <p>This form is required to be filled by employees of Senrysa who are attending office for work.</p><hr/> */}

                <Box>
                    <p
                        style={{
                            //fontFamily: "muller",
                            fontSize: "3vh",
                            marginTop: "2vh",
                            textAlign: "center",
                            padding: "0px 10px",
                        }}
                    >
                        This form is required to be filled by employees of
                        Senrysa who are attending office for work.
                    </p>
                </Box>
                <hr />

                <Box>
                    <p
                        style={{
                            //fontFamily: "muller",
                            fontSize: "3vh",
                            marginTop: "2vh",
                            textAlign: "center",
                            padding: "0px 10px",
                        }}
                    >
                        Please note that this form is for your safety. Your
                        conscious participation and honest declaration in this
                        questionnaire is very important to ensure us take
                        precautionary measures at workplace.
                    </p>
                </Box>
                <hr />
            </Box>

            <Box
                sx={{
                    bgcolor: "#cfe8fc",
                    height: "5vh",
                    fontSize: "4vh",
                    //fontFamily: "Muller",
                    textAlign: "center",
                }}
            >
                PERSONAL DETAILS
            </Box>

            <div className="table-responsive">
                <table className="table table-border table-hover">
                    <tbody>
                        <tr>
                            <td
                                className="text-center "
                                //style={{ fontFamily: "Muller" }}
                            >
                                Name –
                            </td>

                            <td>
                                <TextAreaInput
                                    formState={formState}
                                    name={"firstName"}
                                    label={"Enter Your Name"}
                                    validation={validationName}
                                    defaultValue={
                                        userInfoCovid && userInfoCovid.name
                                    }
                                />
                            </td>

                            <td
                                className="text-center "
                                //style={{ fontFamily: "Muller" }}
                            >
                                Employee ID{" "}
                            </td>
                            <td>
                                <TextAreaInput
                                    formState={formState}
                                    name={"empId"}
                                    label={"Enter your employee id"}
                                    validation={validation}
                                    placeholder={""}
                                    defaultValue={
                                        userInfoCovid &&
                                        userInfoCovid.employee_id
                                    }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td
                                className="text-center "
                                //style={{ fontFamily: "Muller" }}
                            >
                                Phone –
                            </td>
                            <td>
                                <TextAreaInput
                                    formState={formState}
                                    name={"phoneNumber"}
                                    label={"Enter your phone number"}
                                    validation={validationPh}
                                    defaultValue={
                                        userInfoCovid && userInfoCovid.phone
                                    }
                                />
                            </td>

                            <td
                                className="text-center "
                                //style={{ fontFamily: "Muller" }}
                            >
                                DoB-
                            </td>
                            <DatePicker
                                formState={formState}
                                name={"dateOfBirth"}
                                label={""}
                                type={"date"}
                                validation={validation}
                                defaultValue={
                                    userInfoCovid && userInfoCovid.date_of_birth
                                }
                            />
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <br />

                <div>
                    {/* Do you have any symptoms from the below given list in the last 15 days – */}
                    <Box
                        sx={{
                            bgcolor: "#cfe8fc",
                            height: "5vh",
                            fontSize: "3vh",
                            //fontFamily: "Muller",
                            textAlign: "center",
                        }}
                    >
                        {" "}
                        Do you have any symptoms from the below given list in
                        the last 15 days –
                    </Box>
                </div>

                <ul style={{ listStyleType: "none" }}>
                    <li>
                        <div className="contactEmp">
                            <p
                                className="text-center "
                                //style={{ fontFamily: "Muller" }}
                            >
                                a. Dry Cough –
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "spaceAround",
                                }}
                            >
                                <InputRadioGroup
                                    formState={formState}
                                    name={"dryCough"}
                                    labelGroup={null}
                                    label={["Yes", "No"]}
                                    defaultValue={
                                        userInfoCovid && userInfoCovid.dry_cough
                                    }
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="contactEmp">
                            <p
                                className="text-center "
                                //style={{ fontFamily: "Muller" }}
                            >
                                {" "}
                                b. Sore Throat –
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "spaceAround",
                                }}
                            >
                                <InputRadioGroup
                                    formState={formState}
                                    name={"soreThroat"}
                                    labelGroup={null}
                                    label={["Yes", "No"]}
                                    defaultValue={
                                        userInfoCovid &&
                                        userInfoCovid.sore_throat
                                    }
                                />
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="contactEmp">
                            <p
                                className="text-center "
                                //style={{ fontFamily: "Muller" }}
                            >
                                c. Breathing problem -
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "spaceAround",
                                }}
                            >
                                <InputRadioGroup
                                    formState={formState}
                                    name={"breathingProblem"}
                                    labelGroup={null}
                                    label={["Yes", "No"]}
                                    defaultValue={
                                        userInfoCovid &&
                                        userInfoCovid.breathing_problem
                                    }
                                />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="contactEmp">
                            <p
                                className="text-center "
                                //style={{ fontFamily: "Muller" }}
                            >
                                {" "}
                                d. Fever{" "}
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "spaceAround",
                                }}
                            >
                                <InputRadioGroup
                                    formState={formState}
                                    name={"fever"}
                                    labelGroup={null}
                                    label={["Yes", "No"]}
                                    defaultValue={
                                        userInfoCovid && userInfoCovid.fever
                                    }
                                />
                            </div>
                        </div>
                    </li>
                </ul>
                {/* <div style={{display: "flex",justifyContent: "spaceAround"}}>
              <p>
                  2. Did you get in contact with a Covid+ person in last 15 days  in your
                  knowledge – </p>


                  <div style={{display: "flex",justifyContent:"flex-end"}}>
                  <InputRadioGroup
                                formState={formState}
                                name={"conCovid"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                          
                      </div>
          </div> */}
                <Box
                    sx={{
                        bgcolor: "#cfe8fc",
                        height: "5vh",
                        fontSize: "3.5vh",
                        //fontFamily: "Muller",
                        textAlign: "center",
                    }}
                >
                    {" "}
                    Did you get in contact with a Covid+ person in last 15 days
                    in your knowledge-
                </Box>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="btnSubmitcontainer">
                                        <div className="center">
                                            <InputRadioGroup
                                                formState={formState}
                                                name={"conCovid"}
                                                labelGroup={null}
                                                label={["Yes", "No"]}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.covid_positive_person
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Box
                    sx={{
                        bgcolor: "#cfe8fc",
                        height: "5vh",
                        fontSize: "3.5vh",
                        //fontFamily: "Muller",
                        textAlign: "center",
                    }}
                >
                    {" "}
                    Have you had contact with any person who had Covid in past
                    15 days in his/her family in your knowledge
                </Box>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="btnSubmitcontainer">
                                        <div className="center">
                                            <InputRadioGroup
                                                formState={formState}
                                                name={"conCovidFam"}
                                                labelGroup={null}
                                                label={["Yes", "No"]}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.covid_positive_family_member
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {contactedCovidFam === "Yes" || contactedCovid === "Yes" ? (
                    <div>
                        <p
                            className="text-center "
                            style={{
                                //fontFamily: "Muller",
                                fontSize: "20px",
                                fontWeight: "700",
                            }}
                        >
                            If yes, please specify the date for the same
                        </p>
                        <DatePicker
                            formState={formState}
                            name={"covidConDate"}
                            label={""}
                            type={"date"}
                            validation={validation}
                            placeholder={""}
                            defaultValue={
                                userInfoCovid &&
                                userInfoCovid.covid_contact_date
                            }
                        />
                    </div>
                ) : null}
                <br />
                {/* <div style={{display: "flex",justifyContent: "spaceAround"}}>
              <p>
                  4.Do you have any chronic respiratory disease -  </p>
                 
                  <InputRadioGroup
                                formState={formState}
                                name={"Respiratory Disease"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                         
                      </div> */}

                <Box
                    sx={{
                        bgcolor: "#cfe8fc",
                        height: "5vh",
                        fontSize: "3.5vh",
                        //fontFamily: "Muller",
                        textAlign: "center",
                    }}
                >
                    {" "}
                    Do you have any chronic respiratory disease
                </Box>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="btnSubmitcontainer">
                                        <div className="center">
                                            <InputRadioGroup
                                                formState={formState}
                                                name={"chronic_respiratory"}
                                                labelGroup={null}
                                                label={["Yes", "No"]}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.chronic_respiratory
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* < td className=" personalDetailsCov"> </td> */}
                <Box
                    sx={{
                        bgcolor: "#cfe8fc",
                        height: "5vh",
                        fontSize: "3.5vh",
                        //fontFamily: "Muller",
                        textAlign: "center",
                    }}
                >
                    {" "}
                    Do you have any chronic Heart disease
                </Box>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="btnSubmitcontainer">
                                        <div className="center">
                                            <InputRadioGroup
                                                formState={formState}
                                                name={"chronic_heart_disease"}
                                                labelGroup={null}
                                                label={["Yes", "No"]}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.chronic_heart_disease
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <div style={{display: "flex",justifyContent: "spaceAround"}}>
              <p>
                  6.Do you have diabetes -   </p>
                  <div style={{display: "flex",justifyContent: "spaceAround"}}>
                  <InputRadioGroup
                                formState={formState}
                                name={"Diabetes"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                      </div>
          </div> */}

                {/* < td className=" personalDetailsCov"> Do you have diabetes</td> */}
                <Box
                    sx={{
                        bgcolor: "#cfe8fc",
                        height: "5vh",
                        fontSize: "3.5vh",
                        //fontFamily: "Muller",
                        textAlign: "center",
                    }}
                >
                    {" "}
                    Do you have Diabetes
                </Box>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="btnSubmitcontainer">
                                        <div className="center">
                                            <InputRadioGroup
                                                formState={formState}
                                                name={"diabetes"}
                                                labelGroup={null}
                                                label={["Yes", "No"]}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.diabetes
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 
        <div style={{display: "flex",justifyContent: "spaceAround"}}>
              <p>
                  7.Do you have any other medical condition - </p>
                  <div style={{display: "flex",justifyContent: "spaceAround"}}>
                  <InputRadioGroup
                                formState={formState}
                                name={"Medical Conditions"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                      </div>
          </div> */}

                <Box
                    sx={{
                        bgcolor: "#cfe8fc",
                        height: "5vh",
                        fontSize: "3.5vh",
                        //fontFamily: "Muller",
                        textAlign: "center",
                    }}
                >
                    {" "}
                    Do you have any other medical conditions
                </Box>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="btnSubmitcontainer">
                                        <div className="center">
                                            <InputRadioGroup
                                                formState={formState}
                                                name={
                                                    "other_medical_conditions"
                                                }
                                                labelGroup={null}
                                                label={["Yes", "No"]}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.other_medical_conditions
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <div style={{display: "flex",justifyContent: "spaceAround"}}>
              <p>
                  8.Did you get yourself vacinated ?  </p>
                  <div style={{display: "flex",justifyContent: "spaceAround"}}>
                  <InputRadioGroup
                                formState={formState}
                                name={"vaccinated"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                
                      </div>
          </div> */}

                <Box
                    sx={{
                        bgcolor: "#cfe8fc",
                        height: "5vh",
                        fontSize: "3.5vh",
                        //fontFamily: "Muller",
                        textAlign: "center",
                    }}
                >
                    {" "}
                    Did you get yourself vaccinated
                </Box>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="btnSubmitcontainer">
                                        <div className="center">
                                            <InputRadioGroup
                                                formState={formState}
                                                name={"vaccinated"}
                                                labelGroup={null}
                                                label={["Yes", "No"]}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.covid_vaccinated
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {vaccinated === "Yes" ? (
                    <>
                        <div className="table-responsive">
                            <table className="table table-border table-hover">
                                <tbody>
                                    <tr>
                                        <td>1st Dose: </td>
                                        <td>
                                            <DatePicker
                                                formState={formState}
                                                name={"firstDose"}
                                                label={""}
                                                type={"date"}
                                                validation={validation}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.first_dose
                                                }
                                            />
                                        </td>
                                        <td>2st Dose: </td>
                                        <td>
                                            <DatePicker
                                                formState={formState}
                                                name={"secondDose"}
                                                label={""}
                                                type={"date"}
                                                validation={validation}
                                                placeholder={""}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.second_dose
                                                }
                                            />
                                        </td>
                                        <td>Please mention Vaccine name - </td>
                                        <td>
                                            {" "}
                                            <TextAreaInput
                                                formState={formState}
                                                name={"vaccineName"}
                                                label={"Vaccine Name"}
                                                validation={validation}
                                                placeholder={""}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.vaccine_name
                                                }
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : null}

                {/* 
<div style={{display: "flex",justifyContent: "spaceAround"}}>
              <td>I confirm that the locality in which I am staying is a non-containment zone. I further confirm that I
              shall intimate the HRD in case my locality is newly identified as a containment zone.
                   </td>
                  <div style={{display: "flex",justifyContent: "spaceAround"}}>
                  <InputRadioGroup
                                formState={formState}
                                name={"Out of containment zone"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>

                 

                      
                          
                      </div>
          </div> */}

                {/* < td className=" personalDetailsCov"> I confirm that the locality in which I am staying is a non-containment zone. I further confirm that I */}
                {/* shall intimate the HRD in case my locality is newly identified as a containment zone. </td> */}

                <Box
                    sx={{
                        bgcolor: "#cfe8fc",
                        height: "5vh",
                        fontSize: "3.5vh",
                        //fontFamily: "Muller",
                        textAlign: "center",
                    }}
                >
                    I confirm that the locality in which I am staying is a
                    non-containment zone.{" "}
                </Box>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="btnSubmitcontainer">
                                        <div className="center">
                                            <InputRadioGroup
                                                formState={formState}
                                                name={"out_of_containment_zone"}
                                                labelGroup={null}
                                                label={["Yes", "No"]}
                                                defaultValue={
                                                    userInfoCovid &&
                                                    userInfoCovid.out_of_containment_zone
                                                }
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="table-responsive">
                    <table className="table table-border table-hover">
                        <tbody>
                            <tr>
                                <td
                                    className="text-center "
                                    style={
                                        {
                                            //fontFamily: "Muller",
                                        }
                                    }
                                >
                                    My mode of travel to work everyday is{" "}
                                </td>
                                <td>
                                    <TextAreaInput
                                        formState={formState}
                                        name={"travelMode"}
                                        label={"Mode of travel"}
                                        validation={validationName}
                                        placeholder={""}
                                        defaultValue={
                                            userInfoCovid &&
                                            userInfoCovid.mode_of_travel
                                        }
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Box
                    sx={{
                        bgcolor: "#cfe8fc",
                        height: "5vh",
                        fontSize: "3.5vh",
                        //fontFamily: "Muller",
                        textAlign: "center",
                    }}
                >
                    {" "}
                    CONFIRMATION
                </Box>
                <div className="table-responsive">
                    <table className="table table-border table-hover">
                        <tbody>
                            <tr>
                                <td
                                    className="text-center "
                                    style={{
                                        fontFamily: "Muller",
                                    }}
                                >
                                    Name{" "}
                                </td>
                                <td>
                                    {" "}
                                    <TextAreaInput
                                        formState={formState}
                                        name={"confirmNameUser"}
                                        label={"Full Name"}
                                        validation={validationName}
                                        placeholder={""}
                                        defaultValue={
                                            userInfoCovid &&
                                            userInfoCovid.employee_name
                                        }
                                    />{" "}
                                </td>
                                <td
                                    className="text-center "
                                    style={
                                        {
                                            //fontFamily: "Muller",
                                        }
                                    }
                                >
                                    Signature{" "}
                                </td>
                                <td>
                                    <FilePicker
                                        formState={formState}
                                        name={"confirmSignUser"}
                                        validation={validation}
                                        placeholder={""}
                                        defaultValue={
                                            userInfoCovid &&
                                            userInfoCovid.signature
                                        }
                                    />
                                </td>
                                <td
                                    className="text-center "
                                    style={
                                        {
                                            //fontFamily: "Muller",
                                        }
                                    }
                                >
                                    Date{" "}
                                </td>
                                <td>
                                    <DatePicker
                                        formState={formState}
                                        name={"confirmDateUser"}
                                        label={""}
                                        type={"date"}
                                        validation={validation}
                                        placeholder={""}
                                        defaultValue={
                                            userInfoCovid && userInfoCovid.date
                                        }
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <br />
            {idFromDashBoard !== undefined ? null : (
                <Stack
                    display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    className="py-5"
                >
                    <Button
                        onClick={onPreviousClick}
                        type="button"
                        variant="outlined"
                    >
                        Previous
                    </Button>
                    <LoadingButton
                        loading={loading}
                        size="large"
                        variant="contained"
                        type="submit"
                    >
                        Submit Form
                    </LoadingButton>
                    <Button
                        onClick={onNextClicked}
                        type="button"
                        variant="outlined"
                    >
                        Next
                    </Button>
                </Stack>
            )}
        </div>
    );
}

export default CovidComponent;
