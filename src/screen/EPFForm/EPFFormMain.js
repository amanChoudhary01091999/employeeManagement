import { LoadingButton } from "@mui/lab";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { EPFGetRequest } from "../../actions/form.get.action";
import { EPFPostRequest } from "../../actions/form.post.action";
import EPFFormDetail from "./EPFFormDetail";
import EPFUntrackingDeclaration from "./EPFUntrackingDeclaration";
import { useNavigate } from "react-router-dom";
import { Button, CircularProgress, Stack } from "@mui/material";
import Spinner from "../../components/spinner/Spinner";

function EPFFormMain({ idFromDashBoard }) {
    const idFromLocalStorage = localStorage.getItem("id");
    const id =
        idFromDashBoard === undefined ? idFromLocalStorage : idFromDashBoard;

    const formState = useForm();
    const { handleSubmit } = formState;
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.reducerEPF);
    const state = useSelector((state) => state.EPFGetReducer);
    const { loadingEPF, userInfoEPF } = state;
    const navigate = useNavigate();

    const onPreviousClick = () => {
        navigate("/form/gratuity-form", { replace: true });
    };
    const onNextClick = () => {
        navigate("/form/refcheck-form", { replace: true });
    };
    const onSubmit = (data) => {
        const EPFobjectAPI = {
            user_id: id,

            name_of_the_member: data.name_of_the_member,
            fathers_name: data.fathers_name,
            Spouse_name: data.Spouse_name,
            date_of_birth: data.date_of_birth,
            gender: data.gender,
            marital_status: data.marital_status,
            email_id: data.email_id,
            mobile_number: data.mobile_number, // In String
            provident_member: data.provident_member === "Yes" ? true : false,
            pension_member: data.pension_member === "Yes" ? true : false,

            previous_employment_details: data.previous_employment_details,
            universal_accountnumber: data.universal_accountnumber, // _ miss
            previous_pf_account_number: data.previous_pf_account_number,
            date_of_exit_from_previous_employment:
                data.date_of_exit_from_previous_employment,
            scheme_certificate_number: data.scheme_certificate_number,
            pension_payment_order_number: data.pension_payment_order_number,

            international_worker: data.international_worker,
            country_of_origin: data.country_of_origin,
            passport_number: data.passport_number,
            passport_valid_from: data.passport_valid_from,
            passport_valid_to: data.passport_valid_to,

            bank_account_no: data.bank_account_no,
            IFSCode: data.IFSCode,
            aadhar_number: data.aadhar_number,
            pan: data.pan,

            date_of_undertaking: data.date_of_undertaking,
            //signature_of_member: data.signature_of_member[0].name,
            place: data.place,

            name_of_present_employee: data.name_of_present_employee,
            joined_date: data.joined_date,
            pf_number: data.pf_number,
            uan_number: data.uan_number,

            kyc_details_in_uan_database: data.kyc_details_in_uan_database,
            kyc_details: data.kyc_details ? true : false,
            dsc_approved: data.dsc_approved ? true : false,

            date: data.employer_date,
            //signature_of_employer: data.signature_employer[0].name,
        };
        const formData = new FormData();
        formData.append("file1", data.signature_of_member[0]);
        formData.append("file2", data.signature_employer[0]);
        formData.append("data", JSON.stringify(EPFobjectAPI));
        dispatch(EPFPostRequest(formData, navigate));
    };
    useEffect(() => {
        dispatch(EPFGetRequest(id));
    }, []);

    return (
        <div style={{ minWidth: "1000px" }}>
            {loadingEPF && <Spinner />}
            <div
                style={{
                    backgroundColor: "#1976d2",
                    textAlign: "center",
                    color: "white",
                }}
                className="p-3"
            >
                <div className="text-center">
                    <h4 className="mb-0">
                        EMPLOYEES PROVIDENT FUND ORGANIZATION
                    </h4>
                    <p>
                        Employees Provident Fund Scheme, 1952 (Pragraph 34 & 57)
                        &
                        <br />
                        Employees Pension Scheme, 1995 (Paragraph 24)
                    </p>
                </div>
            </div>
            <div className="container py-4">
                {userInfoEPF && (
                    <>
                        <div>
                            <p>
                                (Declaration by a person taking up employment in
                                any establishment on which EPF Scheme 1952 and /
                                or EPS, 1995 is applicable)
                            </p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <EPFFormDetail formState={formState} />
                            <EPFUntrackingDeclaration formState={formState} />
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
                                        loading={loading}
                                        size="large"
                                        variant="contained"
                                        type="submit"
                                    >
                                        Submit Form
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
                    </>
                )}
            </div>
        </div>
    );
}

// export default EPFFormMain;

// function EPFFormMain() {
//     const dispatch = useDispatch();
//     const state = useSelector((state) => state.EPFGetReducer);
//     const { loadingEPF, userInfoEPF } = state;
//     console.log(userInfoEPF);
//     useEffect(() => {
//         dispatch(EPFGetRequest(20));
//     }, []);
//     return <div></div>;
// }
export default EPFFormMain;
