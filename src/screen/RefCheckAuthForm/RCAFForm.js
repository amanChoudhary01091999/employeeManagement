import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import RAFCHeading from "./RAFCHeading";
import RAFCPart3 from "./RAFCPart3";
import RCAFPart1 from "./RCAFPart1";
import RCAFPart2 from "./RCAFPart2";
import RCAFPart4 from "./RCAFPart4";
import "../BackGroundVerification/index.css";
import { useSelector, useDispatch } from "react-redux";
import { RCAFPostRequest } from "../../actions/form.post.action";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import RefCheckAppBar from "./RefCheckAppBar";
import { RCAFGetRequest } from "../../actions/form.get.action";
import { Button, CircularProgress, Stack } from "@mui/material";

function RCAFForm({ idFromDashBoard }) {
    const idFromLocalStorage = localStorage.getItem("id");
    const id =
        idFromDashBoard === undefined ? idFromLocalStorage : idFromDashBoard;
    const formState = useForm();
    const { handleSubmit } = formState;
    const navigate = useNavigate();
    const RCFState = useSelector((state) => state.RCAFReducer);
    const { loading, error, userInfo } = RCFState;

    const RCAFGetState = useSelector((state) => state.RCAFGetReducer);
    const { loadingRCAF, errorRCAF, userInfoRCAF } = RCAFGetState;

    const onPreviousClick = () => {
        navigate("/epf-form", { replace: true });
    };
    const onNextClick = () => {
        navigate("/codeOfConduct-form", { replace: true });
    };

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const RCAFobjectAPI = {
            id: id,
            employee_id: "100",

            //signed: data.candidateSingnature[0].name,
            capital_name: data.candidateName,
            date: data.candidateDate,
            place: data.candidatePlace,

            communication_address: data.communication_address,
            postal_address: data.postel_address,
            permanent_address: data.permanent_Address,

            first_degree: {
                // degree miss
                graduated: data.graduated_1,
                program: data.programm_1,
                institute_name: data.institute_name_1,
                university_name: data.university_name_1,
                Institute_details: data.institute_address_1,
                university_details: data.university_address_1,
                from_date: data.degree_period_to_1,
                to_date: data.degree_period_from_1,
                roll_no: data.roll_no_1,
                enrollment_no: data.enrolment_no_1,
                hall_ticket_no: data.hall_ticket_no_1,
                registration_no: data.registration_no_1,
                degree_type: data.type_of_degree_1,
                graduation_date: data.graduation_date_1,
                major_subject: data.major_subject_1,
            },
            second_degree: {
                graduated: data.graduated_2,
                program: data.programm_2,
                institute_name: data.institute_name_2,
                university_name: data.university_name_2,
                Institute_details: data.institute_address_2,
                university_details: data.university_address_2,
                from_date: data.degree_period_to_2,
                to_date: data.degree_period_from_2,
                roll_no: data.roll_no_2,
                enrollment_no: data.enrolment_no_2,
                hall_ticket_no: data.hall_ticket_no_2,
                registration_no: data.registration_no_2,
                degree_type: data.type_of_degree_2,
                graduation_date: data.graduation_date_2,
                major_subject: data.major_subject_2,
            },
            third_degree: {
                graduated: data.graduated_3,
                program: data.programm_3,
                institute_name: data.institute_name_3,
                university_name: data.university_name_3,
                Institute_details: data.institute_address_3,
                university_details: data.university_address_3,
                from_date: data.degree_period_to_3,
                to_date: data.degree_period_from_3,
                roll_no: data.roll_no_3,
                enrollment_no: data.enrolment_no_3,
                hall_ticket_no: data.hall_ticket_no_3,
                registration_no: data.registration_no_3,
                degree_type: data.type_of_degree_3,
                graduation_date: data.graduation_date_3,
                major_subject: data.major_subject_3,
            },
            first_company: {
                company_name: data.company_name_0,
                position_held: data.position_held_0,
                department: data.department_0,
                telephone: data.telephone_0,
                from_date: data.employment_period_from_0,
                to_date: data.employment_period_to_0,
                address: data.address_office_0,
                agency_details: data.agency_details_0,
                employer_nature: data.employer_nature_0,
                employee_code: data.employee_code_0,
                reporting_details: data.RD_name_0,
                position: data.RD_position_0,
                contact_no: data.RD_contactNo_0,
                remunerations: data.remunerations_0,
                conduct_discussion: data.conduct_discussion,
            },
            second_comapny: {
                company_name: data.company_name_1,
                position_held: data.position_held_1,
                department: data.department_1,
                telephone: data.telephone_1,
                from_date: data.employment_period_from_1,
                to_date: data.employment_period_to_1,
                address: data.address_office_1,
                agency_details: data.agency_details_1,
                employer_nature: data.employer_nature_1,
                employee_code: data.employee_code_1,
                reporting_details: data.RD_name_1,
                position: data.RD_position_1,
                contact_no: data.RD_contactNo_1,
                remunerations: data.remunerations_1,
                reason_for_leaving: data.leaving_reason_1,
            },
            third_company: {
                company_name: data.company_name_2,
                position_held: data.position_held_2,
                department: data.department_2,
                telephone: data.telephone_2,
                from_date: data.employment_period_from_2,
                to_date: data.employment_period_to_2,
                address: data.address_office_2,
                agency_details: data.agency_details_2,
                employer_nature: data.employer_nature_2,
                employee_code: data.employee_code_2,
                reporting_details: data.RD_name_2,
                position: data.RD_position_2,
                contact_no: data.RD_contactNo_2,
                remunerations: data.remunerations_2,
                reason_for_leaving: data.leaving_reason_2,
            },
            contact_current_employer:
                data.contact_current_employer === "Yes" ? true : false,
        };
        const formData = new FormData();
        formData.append("signed", data.candidateSingnature[0]);
        formData.append("data", JSON.stringify(RCAFobjectAPI));
        dispatch(RCAFPostRequest(formData, navigate));
    };

    useEffect(() => {
        dispatch(RCAFGetRequest(id));
    }, []);

    return (
        <div style={{ minWidth: "1300px" }}>
            {loadingRCAF && (
                <CircularProgress
                    color="inherit"
                    style={{
                        color: "indigo",
                        position: "fixed",
                        bottom: "50%",
                    }}
                />
            )}

            {userInfoRCAF && (
                <>
                    <div style={{ backgroundColor: "#F3F3F3" }}>
                        <RefCheckAppBar />
                        <div className="mx-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <RAFCHeading formState={formState} />
                                    <RCAFPart1 formState={formState} />
                                    <RCAFPart2
                                        formState={formState}
                                        number={"1"}
                                    />
                                    <RCAFPart2
                                        formState={formState}
                                        number={"2"}
                                    />
                                    <RCAFPart2
                                        formState={formState}
                                        number={"3"}
                                    />
                                    <RAFCPart3
                                        formState={formState}
                                        number={"0"}
                                        stateOfEmployer={"current"}
                                    />
                                    <RAFCPart3
                                        formState={formState}
                                        number={"1"}
                                        stateOfEmployer={"previous"}
                                    />
                                    <RAFCPart3
                                        formState={formState}
                                        number={"2"}
                                        stateOfEmployer={"previous"}
                                    />
                                    <RCAFPart4 formState={formState} />
                                </div>
                                {idFromDashBoard !== undefined ? null : (
                                    <Stack
                                        display={"flex"}
                                        flexDirection={"row"}
                                        justifyContent={"space-between"}
                                        className="py-5"
                                    >
                                        <Button
                                            variant="outlined"
                                            onClick={onPreviousClick}
                                        >
                                            Previous
                                        </Button>
                                        <LoadingButton
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            loading={loading}
                                        >
                                            <strong>Submit</strong>
                                        </LoadingButton>
                                        <Button
                                            variant="outlined"
                                            onClick={onNextClick}
                                        >
                                            Next
                                        </Button>
                                    </Stack>
                                )}
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default RCAFForm;
