import { LoadingButton } from "@mui/lab";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { requestEPF } from "../../actions/EPFAction";
import EPFFormDetail from "./EPFFormDetail";
import EPFUntrackingDeclaration from "./EPFUntrackingDeclaration";
import Snackbars from "../../components/Snackbar";

function EPFFormMain() {
    const formState = useForm();
    const { handleSubmit } = formState;
    const dispatch = useDispatch();
    const { loading, error, userInfo } = useSelector(
        (state) => state.reducerEPF
    );
    const onSubmit = (data) => {
        const EPFobjectAPI = {
            id: 1,
            employee_id: "100",

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
            signature_of_member: data.signature_of_member[0].name,
            place: data.place,

            name_of_present_employee: data.name_of_present_employee,
            joined_date: data.joined_date,
            pf_number: data.pf_number,
            uan_number: data.uan_number,

            kyc_details_in_uan_database: data.kyc_details_in_uan_database,
            kyc_details: data.kyc_details ? true : false,
            dsc_approved: data.dsc_approved ? true : false,

            date: data.employer_date,
            signature_of_employer: data.signature_employer[0].name,
        };

        // PostData("http://10.1.30.18:9032/pf-form/create", EPFobjectAPI).then(
        //     (data) => {
        //         // history.push({
        //         //     pathname: "/gratuity-form",
        //         //     search: `?user-id=${id}`,
        //         // });
        //         //console.log(data);
        //     }
        // );
        dispatch(requestEPF(EPFobjectAPI));
    };
    return (
        <div className="container py-4">
            <div className="text-center">
                <h4 className="mb-0">EMPLOYEES PROVIDENT FUND ORGANIZATION</h4>
                <p>
                    Employees Provident Fund Scheme, 1952 (Pragraph 34 & 57) &
                    <br />
                    Employees Pension Scheme, 1995 (Paragraph 24)
                </p>
                <p>
                    (Declaration by a person taking up employment in any
                    establishment on which EPF Scheme 1952 and / or EPS, 1995 is
                    applicable)
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <EPFFormDetail formState={formState} />
                <EPFUntrackingDeclaration formState={formState} />

                <LoadingButton
                    loading={loading}
                    size="large"
                    variant="contained"
                    type="submit"
                >
                    Submit Form
                </LoadingButton>
            </form>
            {error && (
                <Snackbars value={true} severity={"error"} message={error} />
            )}
            {userInfo && (
                <Snackbars
                    value={true}
                    severity={"success"}
                    message={"Success"}
                />
            )}
        </div>
    );
}

export default EPFFormMain;