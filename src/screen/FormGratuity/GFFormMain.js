import { LoadingButton } from "@mui/lab";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import { GFFormRequest } from "../../actions/GFFormAction";
import Snackbars from "../../components/Snackbar";


import GFAcknowledgement from "./GFAcknowledgement";
import GFCertificateEmployer from "./GFCertificateEmployer";
import GFFormDeclaration from "./GFFormDeclaration";
import GFFormNomination from "./GFFormNomination";
import GFFormNominee from "./GFFormNominee";
import GFFormStatement from "./GFFormStatement";

function GFFormMain() {
    const formState = useForm();
    const { handleSubmit } = formState;

    const GFState = useSelector((state) => state.GFFormReducer);
    const { loading, error, userInfo } = GFState;
    const dispatch = useDispatch();
    //let history = useHistory();

    const onSubmit = (data) => {
        const GFobjectAPI = {
            // Nomination..
            nomination_details: data.nomination_details,
            name_of_the_member: data.name_of_the_member,
            excluded_husband: data.excluded_husband,

            // nominee...
            nominee_full_name_and_address: data.nominee_full_name_and_address,
            relationship_with_nominee: data.relationship_with_nominee,
            dob_of_nominee: data.dob_of_nominee,
            shared_proportion: data.shared_proportion,

            id: 1,
            employee_id: "100",
            sl_no: "string",

            // statement..
            employee_full_name: data.employee_full_name,
            gender: data.gender,
            religion: data.religion,
            marital_status: data.marital_status,
            department: data.department,
            ticket_no: data.ticket_no,
            date_of_appointment: data.date_of_appointment,
            permanent_address: data.permanent_address,
            village: data.village,
            thana: data.thana,
            sub_division: data.sub_division,
            place: data.place,
            statement_date: data.statement_date,
            employee_signature: data.employee_signature[0].name,

            // declearation..
            name_of_witnesses: data.name_of_witnesses,
            signature_of_witnesses: data.signature_of_witnesses[0].name,
            address_of_witnesses: data.address_of_witnesses,
            witnesses_place: data.witnesses_place,
            witnesses_date: data.witnesses_date,

            //Certification..
            employer_reference_no: data.employer_reference_no,
            signature_of_the_employer: data.signature_of_the_employer[0].name,
            certificate_date: data.certificate_date,
            name_of_the_establishment: data.name_of_the_establishment,
            address_of_the_establishment: data.address_of_the_establishment,
            rubber_stamp_there_of: data.rubber_stamp_there_of,

            // acknowledgement...
            acknowledgement_date: data.acknowledgement_date,
            signature_of_the_employee: data.signature_of_the_employee[0].name,
        };
        dispatch(GFFormRequest(GFobjectAPI))

       
    };
    return (
        <div className="container py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <GFFormNomination formState={formState} />
                <GFFormNominee formState={formState} />
                <GFFormStatement formState={formState} />
                <GFFormDeclaration formState={formState} />
                <GFCertificateEmployer formState={formState} />
                <GFAcknowledgement formState={formState} />

                <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                loading={loading}
            >
                <strong>Log In</strong>
            </LoadingButton>
            {error && (
                <Snackbars value={true} severity={"error"} message={error} />
            )}
            {userInfo && (
                <Snackbars
                    value={true}
                    severity={"success"}
                    message={"Login Success"}
                />
            )}
            </form>
        </div>
    );
}

export default GFFormMain;
