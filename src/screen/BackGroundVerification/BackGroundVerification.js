import { Box, TableRow, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react'
import { useForm } from 'react-hook-form';
import DatePicker from '../../InputFiles/DatePicker';
import InputRadioGroup from '../../InputFiles/InputRadioGroup';
import Validation from '../../validation/Validations';
import DashBoardAppBar from '../HRDashboard/DashBoardAppBar';
import BGVAppBar from './BGVAppBar';
import "./index.css"
import { useDispatch,useSelector } from 'react-redux';
import { BGVRequest } from '../../actions/BGVFormAction';
import Snackbars from '../../components/Snackbar';
import { LoadingButton } from '@mui/lab';
import TextAreaInput from '../../InputFiles/TextAreaInput';
import { typography } from '@mui/system';


const BackgroundVerification= (props) => {

  
  const formState = useForm();
  const { handleSubmit, watch ,register} = formState
  const workEx = watch("workEx", "No")

  const bgvState = useSelector((state) => state.BGVReducer);
    const { loading, error, userInfo } = bgvState;
    const dispatch = useDispatch();


  const onSubmit = (data) => {
    //history.push('/covid-form')
    //console.log(data);
   const empBGVobj= {
      "id": 12,
      "gender": data.gender,
      "email1": data.email1,
      "email2": data.email2,
      "place": data.place,
      "signature":data.signature[0].name,
      "date": data.date,
      "employee_id": "100",
      "first_name": data.first_name,
      "middle_name": data.middle_name===undefined?"":data.middle_name,
      "last_name": data.last_name,
      "fathers_first_name": data.fathers_first_name,
      "fathers_middle_name": data.fathers_middle_name===undefined?"":data.fathers.middle_name,
      "fathers_last_Name": data.fathers_last_Name,
      "date_of_birth": data.date_of_birth,
      "driving_license_no": data.driving_license_no===undefined?"":data.driving_license_no,
      "passport_no": data.passport_no===undefined?"":data.passport_no,
      "passport_valid_until": data.passport_valid_until===undefined?"":data.passport_valid_until,
      "passport_issue_place": data.passport_issue_place===undefined?"":data.passport_issue_place,
      "current_address": data.current_address,
      "duration_of_stay": data.duration_of_stay,
      "contact1_mobile_no": data.contact1_mobile_no,
      "contact1_Land_Line_No": data.contact1_Land_Line_No===undefined?"":data.contact1_Land_Line_No,
      "permanent_address": data.permanent_address,
      "contact2_mobile_no": data.contact2_mobile_no,
      "contact2_Land_Line_No": data.contact2_Land_Line_No===undefined?"":data.contact2_Land_Line_No,
      "first_reference": {
        "designation": data.designation_first,
        "company": data.company_first,
        "mobile": data.mobile_first,
        "email": data.email_first,
        "capacity": data.capacity_first,
        "current_address": data.name_first
      },
      "second_reference": {
        "designation": data.designation_second,
        "company": data.company_second,
        "mobile": data.mobile_second,
        "email": data.email_second,
        "capacity": data.capacity_second,
        "current_address": data.name_second
      },
      "pg_degree": {
        "location": data.locationPG===undefined?"":data.locationPG,
        "qualification": data.qualificationPG===undefined?"":data.qualificationPG,
        "specialization": data.specializationPG===undefined?"":data.specializationPG,
        "college_or_institute":data.college_or_institutePG===undefined?"":data.college_or_institutePG,
        "affiliated_university": data.affiliated_universityPG===undefined?"":data.affiliated_universityPG,
        "contact_details": data.contact_detailsPG===undefined?"":data.contact_detailsPG,
        "dates_attended": data.dates_attendedPG===undefined?"":data.dates_attendedPG,
        "registration_no_or_enrollment_no": data.registration_no_or_enrollment_noPG===undefined?"":data.registration_no_or_enrollment_noPG,
        "marks_obtained_or_class_obtained": data.marks_obtained_or_class_obtainedPG===undefined?"":data.marks_obtained_or_class_obtainedPG
      },
      "ug_degree": {
        "location":data.locationUG,
        "qualification": data.qualificationUG,
        "specialization": data.specializationUG,
        "college_or_institute": data.college_or_instituteUG,
        "affiliated_university": data.affiliated_universityUG,
        "contact_details": data.contact_detailsUG,
        "dates_attended":data.dates_attendedUG,
        "registration_no_or_enrollment_no": data.registration_no_or_enrollment_noUG,
        "marks_obtained_or_class_obtained": data.marks_obtained_or_class_obtainedUG
      },
      "twelve_or_puc_or_diploma": {
      "location":data.locationTWELVE,
        "qualification": data.qualificationTWELVE,
        "specialization": data.specializationTWELVE,
        "college_or_institute": data.college_or_instituteTWELVE,
        "affiliated_university": data.affiliated_universityTWELVE,
        "contact_details": data.contact_detailsTWELVE,
        "dates_attended":data.dates_attendedTWELVE,
        "registration_no_or_enrollment_no": data.registration_no_or_enrollment_noTWELVE,
        "marks_obtained_or_class_obtained": data.marks_obtained_or_class_obtainedTWELVE
      },
      "employer_first": {
        "location": data.locationE1===undefined?"":data.locationE1,
        "designation": data.designationE1===undefined?"":data.designationE1,
        "agency_details": data.agency_detailsE1===undefined?"":data.agency_detailsE1,
        "contact_details":data.contact_detailsE1===undefined?"":data.contact_detailsE1,
        "employee_code": data.employee_codeE1===undefined?"":data.employee_codeE1,
        "employment_start_date": data.employment_start_dateE1===undefined?"":data.employment_start_dateE1,
        "employment_end_date": data.employment_end_dateE1===undefined?"":data.employment_end_dateE1,
        "last_salary_drawn": data.last_salary_drawnE1===undefined?"":data.last_salary_drawnE1,
        "reason_for_leaving": data.reason_for_leavingE1===undefined?"":data.reason_for_leavingE1,
        "reporting_manager": data.reporting_managerE1===undefined?"":data.reporting_managerE1,
        "hr_manager": data.hr_managerE1===undefined?"":data.hr_managerE1
      },
      "employer_second": {
        "location": data.locationE2===undefined?"":data.locationE2,
        "designation": data.designationE2===undefined?"":data.designationE2,
        "agency_details": data.agency_detailsE2===undefined?"":data.agency_detailsE2,
        "contact_details":data.contact_detailsE2===undefined?"":data.contact_detailsE2,
        "employee_code": data.employee_codeE2===undefined?"":data.employee_codeE2,
        "employment_start_date": data.employment_start_dateE2===undefined?"":data.employment_start_dateE2,
        "employment_end_date": data.employment_end_dateE2===undefined?"":data.employment_end_dateE2,
        "last_salary_drawn": data.last_salary_drawnE2===undefined?"":data.last_salary_drawnE2,
        "reason_for_leaving": data.reason_for_leavingE2===undefined?"":data.reason_for_leavingE2,
        "reporting_manager": data.reporting_managerE2===undefined?"":data.reporting_managerE2,
        "hr_manager": data.hr_managerE2===undefined?"":data.hr_managerE2
      },
      "employer_third": { 
        "location": data.locationE3===undefined?"":data.locationE3,
        "designation": data.designationE3===undefined?"":data.designationE3,
        "agency_details": data.agency_detailsE3===undefined?"":data.agency_detailsE3,
        "contact_details":data.contact_detailsE3===undefined?"":data.contact_detailsE3,
        "employee_code": data.employee_codeE3===undefined?"":data.employee_codeE3,
        "employment_start_date": data.employment_start_dateE3===undefined?"":data.employment_start_dateE3,
        "employment_end_date": data.employment_end_dateE3===undefined?"":data.employment_end_dateE3,
        "last_salary_drawn": data.last_salary_drawnE3===undefined?"":data.last_salary_drawnE3,
        "reason_for_leaving": data.reason_for_leavingE3===undefined?"":data.reason_for_leavingE3,
        "reporting_manager": data.reporting_managerE3===undefined?"":data.reporting_managerE3,
        "hr_manager": data.hr_managerE3===undefined?"":data.hr_managerE3
      },
      "whether_to_contact_the_current_employer": data.whether_to_contact_the_current_employer==='Yes'?true:false,
      "full_name": data.full_name,

    }

    //console.log(bgvApi(empBGVobj))
    dispatch(BGVRequest(empBGVobj))

   //console.log(data)
  };

  const validation = Validation().validationDegree
  const validationPh = Validation().validationPhone
  const validationEmail = Validation().validationEmail
  const validationLand = Validation().validationLandline
  const validationDL = Validation().validationDrivingLicence
  const validationPass = Validation().validationPassport
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
      <div style={{ backgroundColor: "#F3F3F3", paddingBottom: "10px" }}>
      <BGVAppBar/>
        <div style={{ marginTop: 50 }}>
          <div className="container">
            {/* <div className="form_header">

              <div className="company_info">

                <h1>nextdoorhub international pvt ltd</h1>

                <p>601,Godrej Waterside Tower 1 6th Floor,<br /> Salt Lake, Sector V, Kolkata 700091</p>

                <p className="pt_10">CIN: U52339WB2020PTC241673</p>

              </div>

              <div className="company_logo">

                <img width="170" src="https://www.ndhgo.com/wp-content/uploads/2021/05/NDHGO-Logo-2021-01-1024x339.png"
                  className="attachment-large size-large" alt="company_logo" loading="lazy" />

              </div>

            </div> */}

            <section name="details-tableOne" className='abc'>
              

             
                <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>PERSONAL DETAILS</Box>
                <table className="table table-bordered table-hover">
                
                <tbody>
                  <tr>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Applicant:First Name</td>
                    <td >


                      <TextAreaInput
                        formState={formState}
                        name={'first_name'}
                        label={"Enter Your First Name"}
                        validation={validation}
                        placeholder={""} />

                    </td>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Middle Name</td>
                    <td>
                      <TextAreaInput
                        formState={formState}
                        name={'middle_name'}
                        label={"Enter Your Middle Name"}
                        //validation={validation}

                        placeholder={""} />

                    </td>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Last Name</td>
                    <td>
                      <TextAreaInput
                        formState={formState}
                        name={'last_name'}
                        label={"Enter Your Last Name"}
                        validation={validation}
                        placeholder={""} />

                    </td>
                  </tr>

                  <tr>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Father's/Husband's First Name</td>
                    <td>
                      <TextAreaInput
                        formState={formState}
                        name={'fathers_first_name'}
                        label={"Father's Name"}
                        validation={validation}
                        placeholder={""} />

                    </td>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Middle Name</td>
                    <td>
                      <TextAreaInput
                        formState={formState}
                        name={' first_middle_name'}
                        label={"Father's middle name"}

                        placeholder={""} />

                    </td>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Last Name</td>
                    <td>
                      <TextAreaInput
                        formState={formState}
                        name={'fathers_last_name'}
                        label={"Father's last name"}
                        validation={validation}
                        placeholder={""} />

                    </td>
                  </tr>

                  <tr>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>DoB(dd/mm/yy)</td>
                    <td>

                      <DatePicker
                        formState={formState}
                        name={'date_of_birth'}
                        label={""}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />


                    </td>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Gender</td>

                    <td>

                      <InputRadioGroup
                        formState={formState}
                        name={"gender"}
                        labelGroup={null}
                        label={['Male', 'Female']} />


                    </td>

                    <td className="text-center " style={{ fontFamily: 'Muller' }}>DL number</td>

                    <td>
                      <TextAreaInput
                        formState={formState}
                        name={"driving_license_no"}
                        label={"DL Number"}
                        validation={validationDL}
                        placeholder={""} />


                    </td>
                  </tr>

                  <tr>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Passport Number</td>
                    <td>
                      <TextAreaInput
                        formState={formState}
                        name={'passport_no'}
                        label={"Passport Number"}
                        validation={validationPass}
                        placeholder={""} />

                    </td>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Valid until</td>
                    <td>

                    <input type="date" min="1950-01-01" max="2050-01-01" className="form-control" name='passport_valid_until' 
                {...register('passport_valid_until')}/>
              
      




                    </td>
                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Place of issue passport</td>
                    <td>
                      <TextAreaInput
                        formState={formState}
                        name={"passport_issue_place"}
                        label={"Place"}
                        //validation={validation}
                        placeholder={""} />

                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <div className="container">
              <section name="details-tableTwo">
                <div className="table-responsive">
                <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>CONTACT DETAILS</Box>
                  <table className="table table-bordered table-hover">
                   
                    <tbody>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Current Address</td>
                        <td colSpan="4" >

                          <TextAreaInput
                            formState={formState}
                            name={"current_address"}
                            label={"Current Address"}
                            validation={validation}
                            placeholder={""} 
                           
                            
                            />



                        </td>
                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Duration of stay</td>
                        <td>

                          <TextAreaInput
                            formState={formState}
                            name={"duration_of_stay"}
                            label={"Duration of Stay"}
                            validation={validation}
                            placeholder={""} />



                        </td>


                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Contact - Mobile:</td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"contact1_mobile_no"}
                            label={"Mobile Number"}
                            validation={ validationPh}
                            placeholder={""} />

                        </td>
                      </tr>


                      <tr>


                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Land line:</td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"contact1_Land_Line_No"}
                            label={"Landline Number"}
                            validation={validationLand}
                            placeholder={""} />


                        </td>

                      </tr>

                    </tbody>
                  </table>
                </div>

              </section>
            </div>


            <div className='container'>
              <section name="details-tableThree">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover">
                    <tbody>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Permanent Address</td>
                        <td colSpan="4">

                          <TextAreaInput
                            formState={formState}
                            name={"permanent_address"}
                            label={"Permanent Address"}
                            validation={validation}
                            placeholder={""} />




                        </td>
                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Contact - Mobile:</td>
                        <td>

                          <TextAreaInput
                            formState={formState}
                            name={"contact2_mobile_no"}
                            label={"Mobile Number"}
                            validation={validationPh}
                            placeholder={""} />





                        </td>

                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Land line:</td>
                        <td>

                          <TextAreaInput
                            formState={formState}
                            name={"contact2_Land_Line_No"}
                            label={"LandLine Number"}
                            validation={validationLand}
                            placeholder={""} />

                        </td>

                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Email 1</td>
                        <td colSpan="4">
                          <TextAreaInput
                            formState={formState}
                            name={"email1"}
                            label={"Primary Email"}
                            validation={ validationEmail}
                            placeholder={""} />



                        </td>
                      </tr>

                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Email 2</td>
                        <td colSpan="4">
                          <TextAreaInput
                            formState={formState}
                            name={"email2"}
                            label={"Secondary Email"}
                            //validation={validationEmail}
                            placeholder={""} />
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>

              </section>
            </div>

            <div className="container">
              <section name="details-tableFour">
                <div className="table-responsive">
                <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>PROVIDE TWO REFERENCES YOU KNOW PERSONALLY</Box>
                  <table className="table table-bordered table-hover">
                   
                    <tbody>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Name</td>
                        <td >

                          <TextAreaInput
                            formState={formState}
                            name={"name_first"}
                            label={"Name"}
                            validation={validation}
                            placeholder={""} />



                        </td>
                        <td>

                          <TextAreaInput
                            formState={formState}
                            name={"name_second"}
                            label={"Name"}
                            validation={validation}
                            placeholder={""} />

                        </td>

                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Designation</td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"designation_first"}
                            label={"Designation"}
                            validation={validation}
                            placeholder={""} />
                        </td>

                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"designation_second"}
                            label={"Designation"}
                            validation={validation}
                            placeholder={""} />
                        </td>



                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Company</td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"company_first"}
                            label={"1st Company "}
                            validation={validation}
                            placeholder={""} />

                        </td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"company_second"}
                            label={"2nd Company"}
                            validation={validation}
                            placeholder={""} />
                        </td>

                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Mobile</td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"mobile_first"}
                            label={"Mobile Number"}
                            validation={validationPh}
                            placeholder={""} />
                        </td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"mobile_second"}
                            label={"Mobile Number"}
                            validation={validationPh}
                            placeholder={""} />


                        </td>

                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Email</td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"email_first"}
                            label={"Email"}
                            validation={ validationEmail}
                            placeholder={""} />
                        </td>

                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"email_second"}
                            label={"Email"}
                            validation={validationEmail}
                            placeholder={""} />
                        </td>

                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Capacity in which they know you</td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"capacity_first"}
                            label={"Years Known"}
                            validation={validation}
                            placeholder={""} />
                        </td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"capacity_second"}
                            label={"Years Known"}
                            validation={validation}
                            placeholder={""} />
                        </td>

                      </tr>

                    </tbody>
                  </table>
                </div>

              </section>
            </div>

            <div className="container">
              <section name="details-tableFive">
                <div className="table-responsive">
                <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>ACADEMIC BACKGROUND</Box>
                  <table className="table table-bordered table-hover">
                    
                    <thead>
                      <tr>
                        <td></td>

                        {/* <th className="text-center " style={{ fontFamily: 'Muller' }}>PG Degree</th> */}
                        <td><Box  sx={{ bgcolor: '#cfe8fc', height: '5vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>PG Degree</Box></td>
                        <td><Box  sx={{ bgcolor: '#cfe8fc', height: '5vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>UG Degree</Box></td>
                        <td><Box  sx={{ bgcolor: '#cfe8fc', height: '5vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>Diploma</Box></td>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Name of the Institute / College</td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"collegeOrInstitutePG"}
                          label={"Institue Name"}

                          placeholder={""} /></td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"collegeOrInstituteUG"}
                          label={"Institue Name"}
                          validation={validation}
                          placeholder={""} />

                        </td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"collegeOrInstituteTWELVE"}
                            label={"Institue Name"}
                            validation={validation}
                            placeholder={""} />

                        </td>


                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Location (City, State)</td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"locationPG"}
                            label={"Location"}

                            placeholder={""} />
                        </td>
                        <td> <TextAreaInput
                          formState={formState}
                          name={"locationUG"}
                          label={"Location"}
                          validation={validation}
                          placeholder={""} /> </td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"locationTWELVE"}
                          label={"Location"}
                          validation={validation}
                          placeholder={""} />  </td>


                      </tr>

                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Affiliated University</td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"affiliatedUniversityPG"}
                          label={"Affiliated University"}

                          placeholder={""} /></td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"affiliatedUniversityUG"}
                          label={"Affiliated University"}
                          validation={validation}
                          placeholder={""} />

                        </td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"affiliatedUniversityTWELVE"}
                          label={"Affiliated University"}
                          validation={validation}
                          placeholder={""} /></td>


                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}> Contact Details</td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"contact_detailsPG"}
                          label={"Contact Number"}
                          placeholder={""} /></td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"contact_detailsUG"}
                          label={"Contact Number"}
                          validation={validationPh}
                          placeholder={""} /></td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"contact_detailsTWELVE"}
                          label={"Contact Number"}
                          validation={ validationPh}
                          placeholder={""} /></td>


                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Qualification (Type of Degree)</td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"qualificationPG"}
                          label={"Qualification"}

                          placeholder={""} /></td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"qualificationUG"}
                          label={"Qualification"}
                          validation={validation}
                          placeholder={""} />
                        </td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"qualificationTWELVE"}
                          label={"Qualification"}
                          validation={validation}
                          placeholder={""} /></td>


                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Specialization (Major Subject)</td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"specializationPG"}
                          label={"Specialization"}

                          placeholder={""} /></td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"specializationUG"}
                          label={"Specialization"}
                          validation={validation}
                          placeholder={""} /> </td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"specializationTWELVE"}
                          label={"Specialization"}
                          validation={validation}
                          placeholder={""} /> </td>


                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Dates Attended (DD/MM/YYYY)</td>
                        <td>
                          <DatePicker
                            formState={formState}
                            name={'dates_attendedPG'}
                            label={""}
                            type={'date'}

                            placeholder={""} /></td>
                        <td>
                          <DatePicker
                            formState={formState}
                            name={'dates_attendedUG'}
                            label={""}
                            type={'date'}
                            validation={validation}

                            placeholder={""} /></td>
                        <td>
                          <DatePicker
                            formState={formState}
                            name={'dates_attendedTWELVE'}
                            label={""}
                            type={'date'}
                            validation={validation}

                            placeholder={""} />
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Registration Number / Enrollment No</td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"registration_no_or_enrollment_noPG"}
                          label={"Enrollment Number"}

                          placeholder={""} /> </td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"registration_no_or_enrollment_noUG"}
                          label={"Enrollment Number"}
                          validation={validation}

                          placeholder={""} /></td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"registration_no_or_enrollment_noTWELVE"}
                            label={"Enrollment Number"}
                            validation={validation}

                            placeholder={""} />
                        </td>


                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Marks Obtained / Class Obtained</td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"marks_obtained_or_class_obtainedPG"}
                          label={"Marks Obtained"}


                          placeholder={""} /></td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"marks_obtained_or_class_obtainedUG"}
                          label={"Marks Obtained"}
                          validation={validation}

                          placeholder={""} /> </td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"marks_obtained_or_class_obtainedTWELVE"}
                          label={"Marks Obtained"}
                          validation={validation}

                          placeholder={""} /></td>


                      </tr>

                    </tbody>
                  </table>
                </div>

              </section>
            </div>








            <div className="container">
              <section name="details-tableSix">
                <div className="table-responsive">
                  <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>Do you have any work experience</Box>
                  <table className="table table-bordered table-hover">
                   
                    <tr>
                      <td>
                        <div className='btnSubmitcontainer'>
                          <div className='center'>

                            <InputRadioGroup
                              formState={formState}
                              name={"workEx"}
                              labelGroup={null}
                              label={['Yes', 'No']} />
                          </div>
                        </div>

                      </td>
                    </tr>








                  </table>
                </div>
              </section>
            </div>

            {workEx === "Yes" ?

              <>

                <div className="container">
                  
                  <section name="details-tableSix">
                  <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>Employment History</Box>

                    <div className="table-responsive">
                       <table className="table table-bordered table-hover">


                       

                        <thead>
                          <tr>
                            <th></th>
                            <th><Box  sx={{ bgcolor: '#cfe8fc', height: '5vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>Employer 1</Box></th>
                            <th><Box  sx={{ bgcolor: '#cfe8fc', height: '5vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>Employer 2</Box></th>
                            <th><Box  sx={{ bgcolor: '#cfe8fc', height: '5vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>Employer 3</Box></th>
            
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center " style={{ fontFamily: 'Muller' }}>Employer (Provide Agency Details if on Contract)</td>
                            <td>
                              <TextAreaInput
                                formState={formState}
                                name={"agency_detailsE1"}
                                label={"Details"}
                                //validation={validation}

                                placeholder={""} />
                            </td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"agency_detailsE2"}
                              label={"Details"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"agency_detailsE3"}
                              label={"Details"}
                              validation={validation}

                              placeholder={""} /></td>


                          </tr>
                          

                          <tr>
                            <td className="text-center " style={{ fontFamily: 'Muller' }}>Location (City, State) </td>

                            <td><TextAreaInput
                              formState={formState}
                              name={"locationE1"}
                              label={"Location"}
                              //validation={validation}

                              placeholder={""} />
                            </td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"locationE2"}
                              label={"Location"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"locationE3"}
                              label={"Location"}
                              validation={validation}

                              placeholder={""} /></td>



                          </tr>
                          <tr>
                            <td className="text-center " style={{ fontFamily: 'Muller' }}> Contact Details</td>
                            <td>
                              <TextAreaInput
                                formState={formState}
                                name={"contact_detailsE1"}
                                label={"Contact Details"}
                                //validation={validation, validationPh}

                                placeholder={""} />


                            </td>
                            <td>
                              <TextAreaInput
                                formState={formState}
                                name={"contact_detailsE2"}
                                label={"Contact Details"}
                                //validation={validationPh}

                                placeholder={""} />
                            </td>
                            <td>  <TextAreaInput
                              formState={formState}
                              name={"contact_detailsE3"}
                              label={"Contact Details"}
                              validation={validationPh}

                              placeholder={""} />
                            </td>


                          </tr>
                          <tr>
                            <td className="text-center " style={{ fontFamily: 'Muller' }}>Employee Code (If applicable)</td>
                            <td>  <TextAreaInput
                              formState={formState}
                              name={"employee_codeE1"}
                              label={"Employee Code"}
                              //validation={validation}

                              placeholder={""} />

                            </td>
                            <td>  <TextAreaInput
                              formState={formState}
                              name={"employee_codeE2"}
                              label={"Employee Code"}
                              //validation={validation}

                              placeholder={""} />
                            </td>
                            <td>  <TextAreaInput
                              formState={formState}
                              name={"employee_codeE3"}
                              label={"Employee Code"}
                              validation={validation}

                              placeholder={""} /></td>


                          </tr>
                          <tr>
                            <td className="text-center " style={{ fontFamily: 'Muller' }}>Dates of Employment (DD MM YYYY) </td>
                            <td>
                            <Box  sx={{ bgcolor: '#cfe8fc', height: '4vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>Start date</Box>
                              <DatePicker
                                formState={formState}
                                name={'employment_start_dateE1'}
                                label={""}
                                type={'date'}
                               // validation={validation}

                                placeholder={""} />
                             <Box  sx={{ bgcolor: '#cfe8fc', height: '4vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>End date</Box>
                              <DatePicker
                                formState={formState}
                                name={' employment_end_dateE1'}
                                label={""}
                                type={'date'}
                              //  validation={validation}

                                placeholder={""} />
                            </td>
                            <td>
                            <Box  sx={{ bgcolor: '#cfe8fc', height: '4vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>Start date</Box>
                              <DatePicker
                                formState={formState}
                                name={'employment_start_dateE2'}
                                label={""}
                                type={'date'}
                                //validation={validation}

                                placeholder={""} />
                             <Box  sx={{ bgcolor: '#cfe8fc', height: '4vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>End date</Box>
                              <DatePicker
                                formState={formState}
                                name={'employment_end_dateE2'}
                                label={""}
                                type={'date'}
                                //validation={validation}

                                placeholder={""} />
                            </td>
                            <td>
                            <Box  sx={{ bgcolor: '#cfe8fc', height: '4vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>Start date</Box>
                              <DatePicker
                                formState={formState}
                                name={'employment_start_dateE3'}
                                label={""}
                                type={'date'}
                                validation={validation}

                                placeholder={""} />
                              <Box  sx={{ bgcolor: '#cfe8fc', height: '4vh',fontSize:'3vh',fontFamily: 'Muller',textAlign:'center'}}>End date</Box>
                              <DatePicker
                                formState={formState}
                                name={'employment_end_dateE3'}
                                label={""}
                                type={'date'}
                                validation={validation}

                                placeholder={""} />
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center " style={{ fontFamily: 'Muller' }}>Designation </td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"designationE1"}
                              label={"Designation"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"designationE2"}
                              label={"Designation"}
                              //validation={validation}

                              placeholder={""} />
                            </td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"designationE3"}
                              label={"Designation"}
                              validation={validation}

                              placeholder={""} /></td>


                          </tr>

                          <tr>
                            <td className="text-center " style={{ fontFamily: 'Muller' }}>Last Salary Drawn (CTC) </td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"last_salary_drawnE1"}
                              label={"Last Salary"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"last_salary_drawnE2"}
                              label={"Last Salary"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"last_salary_drawnE3"}
                              label={"Last Salary"}
                              validation={validation}

                              placeholder={""} /></td>


                          </tr>
                          <tr>
                            <td className="text-center " style={{ fontFamily: 'Muller' }}>Reason for Leaving </td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"reason_for_leavingE1"}
                              label={"Reason for leaving"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"reason_for_leavingE2"}
                              label={"Reason for leaving"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"reason_for_leavingE3"}
                              label={"Reason for leaving"}
                              validation={validation}

                              placeholder={""} /></td>
                          </tr>
                          <tr>
                            <td className="text-center " style={{ fontFamily: 'Muller' }}>Reporting Manager </td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"reporting_managerE1"}
                              label={"Reporting Manager"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"reporting_managerE2"}
                              label={"Reporting Manager"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"reporting_managerE3"}
                              label={"Reporting Manager"}
                              validation={validation}

                              placeholder={""} /></td>
                          </tr>
                          <tr>
                            <td className="text-center " style={{ fontFamily: 'Muller' }}>HR Manager</td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"hr_managerE1"}
                              label={"HR MANAGER"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"hr_managerE2"}
                              label={"HR MANAGER"}
                              //validation={validation}

                              placeholder={""} /></td>
                            <td><TextAreaInput
                              formState={formState}
                              name={"hr_managerE3"}
                              label={"HR MANAGER"}
                              validation={validation}

                              placeholder={""} /></td>
                          </tr>

                        </tbody>
                      </table>
                    </div>



                  </section>
                </div>



                <div className="container">
                  <div className="contactEmp">
                    <p className="text-center " style={{ fontFamily: 'Muller' }}>Whether to contact the current employer</p>
                    <div style={{ display: "flex", justifyContent: "spaceAround" }}>
                      <InputRadioGroup
                        formState={formState}
                        name={"whether_to_contact_the_current_employer"}
                        labelGroup={null}
                        label={['Yes', 'No']} />

                    </div>
                  </div> 
                </div>



              </>
              : null}

              <hr></hr>

            <div className="container">
            <Box sx={{ bgcolor: '#cfe8fc', height: '7vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center'}}>Declaration</Box>
              <section name="details-tableSeven">
                
                <p style={{ fontFamily: 'ubuntu', fontSize: 20 }}>I hereby authorize ASDintech Services Pvt. Ltd. (or a third party agent appointed by the Company) to contact
                  any former employers as indicated above and carry out all Background Checks not restricted to education and
                  employment deemed appropriate through this selection procedure. I authorize former employers, agencies,
                  educational institutes etc. to release any information pertaining to my employment/education and I release them
                  from any liability in doing so.</p>
                <p style={{ fontFamily: 'ubuntu', fontSize: 20 }}>I confirm that the above information is correct to the best of my knowledge and I understand that any
                  misrepresentation of information on this application form may, in the event of my obtaining employment, result
                  in action based on company policy.</p>
                <hr />
                <Box sx={{ bgcolor: '#cfe8fc', height: '7vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center'}}>Thankyou</Box>

                <div className="table-responsive">
                  <table className="table table-borderless table-hover">
                    <tbody>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Full Name:</td>
                        <td>
                          <TextAreaInput
                            formState={formState}
                            name={"full_name"}
                            label={"Full Name"}
                            validation={validation}

                          placeholder={""} />
                        </td>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Place: </td>
                        <td><TextAreaInput
                          formState={formState}
                          name={"place"}
                          label={"Place"}
                          validation={validation}

                          placeholder={""} /></td>
                      </tr>
                      <tr>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Signature: </td>
                        <td>  <DatePicker
                          formState={formState}
                          name={'signature'}
                          //label={'signature'}

                          type={'file'}
                          validation={validation}
                          placeholder={""} /></td>
                        <td className="text-center " style={{ fontFamily: 'Muller' }}>Date: </td>
                        <td>
                          <DatePicker
                            formState={formState}
                            name={"date"}
                            //label={"date"}
                            type={'date'}
                            validation={validation}

                            placeholder={""} /></td>
                      </tr>



                    </tbody>
                  </table>
                </div>
              </section>
            </div>

            <div className="container">
            <Box sx={{ bgcolor: '#cfe8fc', height: '7vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center'}}>Documents Needed</Box>
              <section name="details-tableEight">
                
                <ul style={{ listStyleType: "none" }}>
                  <li style={{ fontFamily: 'ubuntu', fontSize: 20,textAlign:"left" }}> •⁍Completed & Signed Application Form
                  </li>
                  <li style={{ fontFamily: 'ubuntu', fontSize: 20,textAlign:"left" }}>•⁍Relevant Education Certificates and marks card(10th, 12th, UG, PG)
                  </li>
                  <li style={{ fontFamily: 'ubuntu', fontSize: 20,textAlign:"left" }}> •⁍Experience Certificate or Relieving Certificate ( last 2 employers not including current )
                  </li>
                  <li style={{ fontFamily: 'ubuntu', fontSize: 20,textAlign:"left" }}> •⁍ Proof of Address & Identity: Government issued ID or Passport Copy or Pan Card
                  </li>
                  <li style={{ fontFamily: 'ubuntu', fontSize: 20,textAlign:"left" }}>•⁍Pay slip of last 3 months and Revised CTC letter</li>
                </ul>


              </section>
            </div>
            </div>

















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
          </div>
        </div>

      </form>


    </>

  )
}

export default BackgroundVerification



