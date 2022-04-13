import React from "react";
import { useForm } from "react-hook-form";

import DatePicker from "../../InputFiles/DatePicker";
import InputRadioGroup from "../../InputFiles/InputRadioGroup";
import TextAreaInput from "../../InputFiles/TextAreaInput";
import Validation from "../../validation/Validations";
import { useSelector, useDispatch } from "react-redux";

import "../BackGroundVerification/index.css";
import { COVIDGetRequest } from "../../actions/form.get.action";
import { COVIDPostRequest } from "../../actions/form.post.action";
import { LoadingButton } from "@mui/lab";
import Snackbars from "../../components/Snackbar";
import CovidFormAppBar from "./CovidFormAppBar";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import FilePicker from "../../InputFiles/FileInput";
import { useEffect } from "react";

const CovidForm = (props) => {
    const navigate = useNavigate();
    const formState = useForm();
    const { handleSubmit, watch } = formState;
    const contactedCovid = watch("conCovid", "No");
    const contactedCovidFam = watch("conCovidFam", "No");

    const vaccinated = watch("vaccinated", "No");

    const CovidState = useSelector((state) => state.COVIDReducer);
    const { loading, error, userInfo } = CovidState;
    const dispatch = useDispatch();

    const covidGetState = useSelector((state) => state.COVIDGetReducer);
    const { loadingBGV, userInfoBGV, errorBGV } = covidGetState;

    useEffect(() => {
        dispatch(COVIDGetRequest());
    }, []);

    const onSubmit = (data) => {
        //history.push("/epf-form")

        const covidApiObj = {
            id: 12,
            phone: data.phoneNumber,
            dateOfBirth: data.dateOfBirth,
            fever: data.fever == "Yes" ? true : false,
            name: data.firstName,
            signature: data.confirmSignUser[0].name,
            date: data.confirmDateUser,
            employee_name: data.confirmNameUser,
            employee_id: data.empId,
            dry_cough: data.dryCough == "Yes" ? true : false,
            sore_throat: data.soreThroat == "Yes" ? true : false,
            breathing_problem: data.breathingProblem == "Yes" ? true : false,
            covid_positive_person: data.conCovid == "Yes" ? true : false,
            covid_positive_family_member:
                data.conCovidFam == "Yes" ? true : false,
            first_dose: data.firstDose == undefined ? "" : data.firstDose,
            second_dose: data.secondDose == undefined ? "" : data.secondDose,
            vaccine_name: data.vaccineName == undefined ? "" : data.vaccineName,
            mode_of_travel: data.travelMode,
            covid_contact_date:
                data.covidConDate == undefined ? "" : data.covidConDate,
            covid_vaccinated: data.vaccinated == "Yes" ? true : false,
            chronic_respiratory:
                data.chronic_respiratory == "Yes" ? true : false,
            chronic_heart_disease:
                data.chronic_heart_disease == "Yes" ? true : false,
            other_medical_conditions:
                data.other_medical_conditions == "Yes" ? true : false,
            diabetes: data.diabetes == "Yes" ? true : false,
            out_of_containment_zone:
                data.out_of_containment_zone == "Yes" ? true : false,
        };
        //dispatch(BGVRequest(empBGVobj))
        dispatch(COVIDPostRequest(covidApiObj, navigate));
    };

    const validation = Validation().validationDegree;
    const validationPh = Validation().validationPhone;
    const validationEm = Validation().validationEmail;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CovidFormAppBar />
                <div style={{ backgroundColor: "#F3F3F3", padding: 30 }}>
                    <Box>
                        <Box>
                            <p
                                style={{
                                    fontFamily: "muller",
                                    textAlign: "center",
                                    fontSize: "3vh",
                                    marginTop: "2vh",
                                    padding: "0px 10px",
                                }}
                            >
                                This guideline document is subject to revision
                                and change from time to time considering the
                                circumstances / government directives and such
                                changes shall be intimated to all employees in
                                writing
                            </p>
                        </Box>
                        <hr />
                        {/* <p>This form is required to be filled by employees of Senrysa who are attending office for work.</p><hr/> */}

                        <Box>
                            <p
                                style={{
                                    fontFamily: "muller",
                                    fontSize: "3vh",
                                    marginTop: "2vh",
                                    textAlign: "center",
                                    padding: "0px 10px",
                                }}
                            >
                                This form is required to be filled by employees
                                of Senrysa who are attending office for work.
                            </p>
                        </Box>
                        <hr />

                        <Box>
                            <p
                                style={{
                                    fontFamily: "muller",
                                    fontSize: "3vh",
                                    marginTop: "2vh",
                                    textAlign: "center",
                                    padding: "0px 10px",
                                }}
                            >
                                Please note that this form is for your safety.
                                Your conscious participation and honest
                                declaration in this questionnaire is very
                                important to ensure us take precautionary
                                measures at workplace.
                            </p>
                        </Box>
                        <hr />
                    </Box>

                    <Box
                        sx={{
                            bgcolor: "#cfe8fc",
                            height: "5vh",
                            fontSize: "4vh",
                            fontFamily: "Muller",
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
                                        style={{ fontFamily: "Muller" }}
                                    >
                                        Name –
                                    </td>

                                    <td>
                                        <TextAreaInput
                                            formState={formState}
                                            name={"firstName"}
                                            label={"Enter Your Name"}
                                            validation={validation}
                                            placeholder={""}
                                        />
                                    </td>

                                    <td
                                        className="text-center "
                                        style={{ fontFamily: "Muller" }}
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
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        className="text-center "
                                        style={{ fontFamily: "Muller" }}
                                    >
                                        Phone –
                                    </td>
                                    <td>
                                        <TextAreaInput
                                            formState={formState}
                                            name={"phoneNumber"}
                                            label={"Enter your phone number"}
                                            validation={validationPh}
                                            placeholder={""}
                                        />
                                    </td>

                                    <td
                                        className="text-center "
                                        style={{ fontFamily: "Muller" }}
                                    >
                                        DoB-
                                    </td>
                                    <DatePicker
                                        formState={formState}
                                        name={"dateOfBirth"}
                                        label={""}
                                        type={"date"}
                                        validation={validation}
                                        placeholder={""}
                                    />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <br />
                        <p>
                            <div>
                                {/* Do you have any symptoms from the below given list in the last 15 days – */}
                                <Box
                                    sx={{
                                        bgcolor: "#cfe8fc",
                                        height: "5vh",
                                        fontSize: "3vh",
                                        fontFamily: "Muller",
                                        textAlign: "center",
                                    }}
                                >
                                    {" "}
                                    Do you have any symptoms from the below
                                    given list in the last 15 days –
                                </Box>
                            </div>
                        </p>
                        <ul style={{ listStyleType: "none" }}>
                            <li>
                                <div className="contactEmp">
                                    <p
                                        className="text-center "
                                        style={{ fontFamily: "Muller" }}
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
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="contactEmp">
                                    <p
                                        className="text-center "
                                        style={{ fontFamily: "Muller" }}
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
                                        />
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="contactEmp">
                                    <p
                                        className="text-center "
                                        style={{ fontFamily: "Muller" }}
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
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="contactEmp">
                                    <p
                                        className="text-center "
                                        style={{ fontFamily: "Muller" }}
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
                                fontFamily: "Muller",
                                textAlign: "center",
                            }}
                        >
                            {" "}
                            Did you get in contact with a Covid+ person in last
                            15 days in your knowledge-
                        </Box>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tr>
                                    <td>
                                        <div className="btnSubmitcontainer">
                                            <div className="center">
                                                <InputRadioGroup
                                                    formState={formState}
                                                    name={"conCovid"}
                                                    labelGroup={null}
                                                    label={["Yes", "No"]}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <Box
                            sx={{
                                bgcolor: "#cfe8fc",
                                height: "5vh",
                                fontSize: "3.5vh",
                                fontFamily: "Muller",
                                textAlign: "center",
                            }}
                        >
                            {" "}
                            Did you get in contact with a Covid+ person in last
                            15 days in your knowledge
                        </Box>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tr>
                                    <td>
                                        <div className="btnSubmitcontainer">
                                            <div className="center">
                                                <InputRadioGroup
                                                    formState={formState}
                                                    name={"conCovidFam"}
                                                    labelGroup={null}
                                                    label={["Yes", "No"]}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        {contactedCovidFam === "Yes" ||
                        contactedCovid === "Yes" ? (
                            <div>
                                {" "}
                                <p
                                    className="text-center "
                                    style={{
                                        fontFamily: "Muller",
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
                                fontFamily: "Muller",
                                textAlign: "center",
                            }}
                        >
                            {" "}
                            Do you have any chronic respiratory disease
                        </Box>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tr>
                                    <td>
                                        <div className="btnSubmitcontainer">
                                            <div className="center">
                                                <InputRadioGroup
                                                    formState={formState}
                                                    name={"respirtoryDisease"}
                                                    labelGroup={null}
                                                    label={["Yes", "No"]}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        {/* < td className=" personalDetailsCov"> </td> */}
                        <Box
                            sx={{
                                bgcolor: "#cfe8fc",
                                height: "5vh",
                                fontSize: "3.5vh",
                                fontFamily: "Muller",
                                textAlign: "center",
                            }}
                        >
                            {" "}
                            Do you have any chronic Heart disease
                        </Box>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tr>
                                    <td>
                                        <div className="btnSubmitcontainer">
                                            <div className="center">
                                                <InputRadioGroup
                                                    formState={formState}
                                                    name={"heartDisease"}
                                                    labelGroup={null}
                                                    label={["Yes", "No"]}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
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
                                fontFamily: "Muller",
                                textAlign: "center",
                            }}
                        >
                            {" "}
                            Do you have Diabetes
                        </Box>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tr>
                                    <td>
                                        <div className="btnSubmitcontainer">
                                            <div className="center">
                                                <InputRadioGroup
                                                    formState={formState}
                                                    name={"diabetes"}
                                                    labelGroup={null}
                                                    label={["Yes", "No"]}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
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
                                fontFamily: "Muller",
                                textAlign: "center",
                            }}
                        >
                            {" "}
                            Do you have any other medical conditions
                        </Box>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tr>
                                    <td>
                                        <div className="btnSubmitcontainer">
                                            <div className="center">
                                                <InputRadioGroup
                                                    formState={formState}
                                                    name={"medicalConditions"}
                                                    labelGroup={null}
                                                    label={["Yes", "No"]}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
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
                                fontFamily: "Muller",
                                textAlign: "center",
                            }}
                        >
                            {" "}
                            Did you get yourself vaccinated
                        </Box>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tr>
                                    <td>
                                        <div className="btnSubmitcontainer">
                                            <div className="center">
                                                <InputRadioGroup
                                                    formState={formState}
                                                    name={"vaccinated"}
                                                    labelGroup={null}
                                                    label={["Yes", "No"]}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
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
                                                        placeholder={""}
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
                                                    />
                                                </td>
                                                <td>
                                                    Please mention Vaccine name
                                                    -{" "}
                                                </td>
                                                <td>
                                                    {" "}
                                                    <TextAreaInput
                                                        formState={formState}
                                                        name={"vaccineName"}
                                                        label={"Vaccine Name"}
                                                        validation={validation}
                                                        placeholder={""}
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
                                fontFamily: "Muller",
                                textAlign: "center",
                            }}
                        >
                            I confirm that the locality in which I am staying is
                            a non-containment zone.{" "}
                        </Box>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tr>
                                    <td>
                                        <div className="btnSubmitcontainer">
                                            <div className="center">
                                                <InputRadioGroup
                                                    formState={formState}
                                                    name={
                                                        "containmentZoneDetail"
                                                    }
                                                    labelGroup={null}
                                                    label={["Yes", "No"]}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-border table-hover">
                                <tbody>
                                    <tr>
                                        <td
                                            className="text-center "
                                            style={{ fontFamily: "Muller" }}
                                        >
                                            My mode of travel to work everyday
                                            is{" "}
                                        </td>
                                        <td>
                                            <TextAreaInput
                                                formState={formState}
                                                name={"travelMode"}
                                                label={"Mode of travel"}
                                                validation={validation}
                                                placeholder={""}
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
                                fontFamily: "Muller",
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
                                            style={{ fontFamily: "Muller" }}
                                        >
                                            Name{" "}
                                        </td>
                                        <td>
                                            {" "}
                                            <TextAreaInput
                                                formState={formState}
                                                name={"confirmNameUser"}
                                                label={"Full Name"}
                                                validation={validation}
                                                placeholder={""}
                                            />{" "}
                                        </td>
                                        <td
                                            className="text-center "
                                            style={{ fontFamily: "Muller" }}
                                        >
                                            Signature{" "}
                                        </td>
                                        <td>
                                            <FilePicker
                                                formState={formState}
                                                name={"confirmSignUser"}
                                                //type={"file"}
                                                validation={validation}
                                                placeholder={""}
                                                defaultValue={null}
                                            />
                                        </td>
                                        <td
                                            className="text-center "
                                            style={{ fontFamily: "Muller" }}
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
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <br />
                    <LoadingButton
                        type="submit"
                        variant="contained"
                        size="large"
                        loading={loading}
                    >
                        <strong>Submit</strong>
                    </LoadingButton>
                    {error && (
                        <Snackbars
                            value={true}
                            severity={"error"}
                            message={error}
                        />
                    )}
                    {userInfo && (
                        <Snackbars
                            value={true}
                            severity={"success"}
                            message={"Form Submitted"}
                        />
                    )}
                </div>
            </form>
        </>
    );
};

export default CovidForm;
