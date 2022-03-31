import React from 'react'
import { useForm } from 'react-hook-form';

import DatePicker from '../../InputFiles/DatePicker';
import InputRadioGroup from '../../InputFiles/InputRadioGroup';
import TextAreaInput from '../../InputFiles/TextAreaInput';
import Validation from '../../validation/Validations';
import { useSelector,useDispatch } from 'react-redux';

import "../BackGroundVerification/index.css"
import { COVIDRequest } from '../../actions/CovidAction';
import { LoadingButton } from '@mui/lab';
import Snackbars from '../../components/Snackbar';
import CovidFormAppBar from './CovidFormAppBar';
import { Box } from '@mui/system';

const CovidForm = (props) => {
    
    //let history=useHistory()
    const formState = useForm();
    const { handleSubmit,watch } = formState
    const contactedCovid= watch("conCovid","No")
    const contactedCovidFam= watch("conCovidFam","No")
    
    const vaccinated=watch("vaccinated","No")

    const CovidState = useSelector((state) => state.COVIDReducer);
    const { loading, error, userInfo } = CovidState;
    const dispatch = useDispatch();


    
  
    const onSubmit = (data) => 
    {
        //history.push("/epf-form")
       
    const covidApiObj={
        "id":12,
        "phone": data.phoneNumber,
        "dateOfBirth": data.dateOfBirth,
        "fever": data.fever=="Yes"?true:false,
        "name": data.firstName,
        "signature": data.confirmSignUser[0].name,
        "date":data.confirmDateUser ,
        "employee_name": data.confirmNameUser,
        "employee_id": data.empId,
        "dry_cough": data.dryCough =="Yes"?true:false,
        "sore_throat": data.soreThroat=="Yes"?true:false,
        "breathing_problem": data.breathingProblem=="Yes"?true:false,
        "covid_positive_person": data.conCovid=="Yes"?true:false,
        "covid_positive_family_member": data.conCovidFam=="Yes"?true:false,
        "first_dose": data.firstDose==undefined?"":data.firstDose,
        "second_dose": data.secondDose==undefined?"":data.secondDose,
        "vaccine_name": data.vaccineName==undefined?"":data.vaccineName,
        "mode_of_travel": data.travelMode,
        "covid_contact_date":data.covidConDate==undefined?"":data.covidConDate,
        "covid_vaccinated":data.vaccinated=="Yes"?true:false,
        "chronic_respiratory": data.chronic_respiratory=="Yes"?true:false,
        "chronic_heart_disease": data.chronic_heart_disease=="Yes"?true:false,
        "other_medical_conditions":data.other_medical_conditions=="Yes"?true:false,
        "diabetes": data.diabetes=="Yes"?true:false,
        "out_of_containment_zone":data.out_of_containment_zone=="Yes"?true:false


    }
    //dispatch(BGVRequest(empBGVobj))
    dispatch(COVIDRequest(covidApiObj))
 

}

    const validation = Validation().validationDegree
    const validationPh=Validation().validationPhone
    const validationEm=Validation().validationEmail
    
    

  

    return (
        <>
        
       
      
        <form onSubmit={handleSubmit(onSubmit)}>
        <CovidFormAppBar/>
        <div style={{ backgroundColor: "#F3F3F3", padding: 30 }}>
        
      
      {/* <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>Confirmation & Acceptance</Box> */}
      <Box sx={{ bgcolor: '#cfe8fc',}}><p style={{fontFamily:"muller", textAlign:'center' ,fontSize:"3vh",marginTop:"2vh",padding:'0px 10px'}}>This guideline document is subject to revision and change from time to time
          considering the circumstances /
          government directives and such changes shall be intimated to all employees in writing</p></Box>
                    <hr/>
      {/* <p>This form is required to be filled by employees of Senrysa who are attending office for work.</p><hr/> */}

      <Box sx={{ bgcolor: '#cfe8fc',}}><p style={{fontFamily:"muller" ,fontSize:"3vh",marginTop:"2vh",textAlign:'center',padding:'0px 10px'}}>This form is required to be filled by employees of Senrysa who are attending office for work.
          </p></Box>
                    <hr/>
      {/* <p>Please note that this form is for your safety. Your conscious participation and honest declaration in this
          questionnaire is very important to ensure us take precautionary measures at workplace.</p><hr/><br/> */}

          
      <div className="table-responsive">
          <table className="table table-border table-hover">
             
              <tbody>
                  <tr>
                      <td>Name –</td>
                      

                      <td  >

                      <TextAreaInput
                        formState={formState}
                        name={'firstName'}
                        label={""}
                        validation={validation}
                        placeholder={""} />
                    
                      


                      </td>
                   
                      
                      
                      <td>Employee ID </td>
                      <td>
                      <TextAreaInput
                        formState={formState}
                        name={'empId'}
                        label={""}
                        validation={validation}
                        placeholder={""} />
                           </td>
                  </tr>
                  <tr>
                      <td>Phone –</td>
                      <td>
                      <TextAreaInput
                        formState={formState}
                        name={'phoneNumber'}
                        label={""}
                        validation={validationPh}
                        placeholder={""} />
                      
                      </td>

                      <td>DoB-</td>
                      <DatePicker
                        formState={formState}
                        name={'dateOfBirth'}
                        label={""}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />

                      
                  </tr>
  
              </tbody>
          </table>
      </div>
      <div>
          <p>
              <div className="personalDetailsCov">
               Do you have any symptoms from the below given list in the last 15 days –
              </div>
          </p>
          <ul style={{listStyleType: "none"}}>
              <li>
              <div className="contactEmp">
                  <p>a. Dry Cough –</p>
                  <div style={{display: "flex",justifyContent: "spaceAround"}}>
                  <InputRadioGroup
                                formState={formState}
                                name={"dryCough"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
    
                      </div>
             
  
    </div>
   
   
              </li>
             <li>
                  <div className="contactEmp">
                      <p> b. Sore Throat –</p>
                      <div style={{display: "flex",justifyContent: "spaceAround"}}>
                      <InputRadioGroup
                                formState={formState}
                                name={"soreThroat"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
    </div>
    </div>
    </li>
                      
                  
              
            <li>
                  <div className="contactEmp">
                      <p>c. Breathing problem -</p>
                      <div style={{display: "flex",justifyContent: "spaceAround"}}>
                      <InputRadioGroup
                                formState={formState}
                                name={"breathingProblem"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                      
                      </div>
                  </div>
              </li>
                  <li>
                  <div className="contactEmp">
                      <p> d. Fever </p>
                      <div style={{display: "flex",justifyContent: "spaceAround"}}>
                      <InputRadioGroup
                                formState={formState}
                                name={"fever"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                      
                                  
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

<div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tr>
            
           < td className=" personalDetailsCov">Did you get in contact with a Covid+ person in last 15 days  in your
                  knowledge</td>
           </tr>
          <tr>
            <td>
               <div className='btnSubmitcontainer'>
 <div className='center'>
                  
                  <InputRadioGroup
                                formState={formState}
                                name={"conCovid"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                                </div>
                                </div>
                                   
</td>
                                </tr>

                    
      
   



            
            </table>
            </div>
           {/* <div style={{display: "flex",justifyContent: "spaceAround"}}>
              <p>
                  3. Have you had contact with any person who had Covid in past 15 days in his/her family in your
                  knowledge -  </p>
                  <div style={{display: "flex",justifyContent: "spaceAround"}}>
                  <InputRadioGroup
                                formState={formState}
                                name={"conCovidFam"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                          
                      </div>
          </div> */}

<div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tr>
            
           < td className=" personalDetailsCov">Did you get in contact with a Covid+ person in last 15 days  in your
                  knowledge </td>
           </tr>
          <tr>
            <td>
               <div className='btnSubmitcontainer'>
 <div className='center'>
                  
                  <InputRadioGroup
                                formState={formState}
                                name={"conCovidFam"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                                </div>
                                </div>
                                   
</td>
                                </tr>

                    
      
   



            
            </table>
            </div>

          { contactedCovidFam==="Yes" || contactedCovid ==="Yes"?
        <div> <p style={{fontWeight: 500}}>If yes, please specify the date for the same</p>


<DatePicker
                        formState={formState}
                        name={'covidConDate'}
                        label={""}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />
       
         
         
         </div>
:null}
         <br/>
          {/* <div style={{display: "flex",justifyContent: "spaceAround"}}>
              <p>
                  4.Do you have any chronic respiratory disease -  </p>
                 
                  <InputRadioGroup
                                formState={formState}
                                name={"Respiratory Disease"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                         
                      </div> */}

<div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tr>
                < td className=" personalDetailsCov"> Do you have any chronic respiratory disease</td>
           </tr>

          <tr>
            <td>
               <div className='btnSubmitcontainer'>
                        <div className='center'>
                            <InputRadioGroup
                                formState={formState}
                                name={"respirtoryDisease"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                        </div>
                </div>
            </td>
            </tr>
        </table>
</div>




{/*           
           <div style={{display: "flex",justifyContent: "spaceAround"}}>
              <p>
                  5.Do you have any chronic heart disease -  </p>
                  <div style={{display: "flex",justifyContent: "spaceAround"}}>
                  <InputRadioGroup
                                formState={formState}
                                name={"Heart Disease"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                          
                      </div>
                      
                      </div> */}


<div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tr>
                < td className=" personalDetailsCov"> Do you have any chronic Heart disease</td>
           </tr>

          <tr>
            <td>
               <div className='btnSubmitcontainer'>
                        <div className='center'>
                            <InputRadioGroup
                                formState={formState}
                                name={"heartDisease"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
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

<div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tr>
                < td className=" personalDetailsCov"> Do you have diabetes</td>
           </tr>

          <tr>
            <td>
               <div className='btnSubmitcontainer'>
                        <div className='center'>
                            <InputRadioGroup
                                formState={formState}
                                name={"diabetes"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
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




<div className="table-responsive">
          <table className="table ">
            <tr>
                < td className=" personalDetailsCov"> Do you have any other medical conditions</td>
           </tr>

          <tr>
            <td>
               <div className='btnSubmitcontainer'>
                        <div className='center'>
                            <InputRadioGroup
                                formState={formState}
                                name={"medicalConditions"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
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



<div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tr>
                < td className=" personalDetailsCov"> Did you get yourself vacinated ? </td>
           </tr>

          <tr>
            <td>
               <div className='btnSubmitcontainer'>
                        <div className='center'>
                            <InputRadioGroup
                                formState={formState}
                                name={"vaccinated"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
                        </div>
                </div>
            </td>
            </tr>
        </table>
</div>


          
          {  vaccinated ==="Yes"?
          <>
        
          <div className="table-responsive">
              <table className="table table-border table-hover">

                 
                  <tbody>
                      <tr>
                          <td>1st Dose:  </td>
                          <td><DatePicker
                        formState={formState}
                        name={'firstDose'}
                        label={""}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />
       </td>
                          <td>2st Dose:  </td>
                          <td>
                          <DatePicker
                        formState={formState}
                        name={'secondDose'}
                        label={""}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />
       
                          </td>
                          <td>Please mention Vaccine name -   </td>
                          <td>  <TextAreaInput
                        formState={formState}
                        name={"vaccineName"}
                        label={""}
                        validation={validation}
                        placeholder={""} /></td>
  
  
                      </tr>
                  </tbody>
              </table>
          </div>
          </>
:null}
        
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




<div className="table-responsive">
          <table className="table table-bordered table-hover">
            <tr>
                < td className=" personalDetailsCov"> I confirm that the locality in which I am staying is a non-containment zone. I further confirm that I
              shall intimate the HRD in case my locality is newly identified as a containment zone. </td>
           </tr>

          <tr>
            <td>
               <div className='btnSubmitcontainer'>
                        <div className='center'>
                            <InputRadioGroup
                                formState={formState}
                                name={"containmentZoneDetail"}
                                labelGroup={null}
                                label={['Yes', 'No']}/>
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
                          <td>My mode of travel to work everyday is </td>
                          <td>
                          <TextAreaInput
                        formState={formState}
                        name={"travelMode"}
                        label={""}
                        validation={validation}
                        placeholder={""} />
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div className="table-responsive">
              <table className="table table-border table-hover">
                 
                  <tbody>
                      <tr>
                          <td>Name </td>
                          <td>  <TextAreaInput
                        formState={formState}
                        name={"confirmNameUser"}
                        label={""}
                        validation={validation}
                        placeholder={""} /> </td>
                          <td>Signature </td>
                          <td>
                          <DatePicker
                        formState={formState}
                        name={'confirmSignUser'}
                        
                        type={'file'}
                        validation={validation}
                        placeholder={""} />
                       
                               </td>
                          <td>Date </td>
                          <td>
                          <DatePicker
                        formState={formState}
                        name={'confirmDateUser'}
                        label={""}
                        type={'date'}
                        validation={validation}
                        placeholder={""} />
                          </td>
  
  
                      </tr>
                  </tbody>
              </table>
          </div>
      </div> 

      
     

      <div className="footer">
  
          <div className="movement">
  
              <h4>Join our movement</h4>
  
              <h5>#HEALTHYCOMMERCE</h5>
  
              <p>NDHGO offers a level playing field for traditional retailers to compete with organised online
  
                  aggregators by providing them state of the art technology to address the current market needs,
  
                  without any cost.</p>
  
              <h2>download the ndhgo app now</h2>
  
          </div>
          <div className="app_body">
  
              <div className="app">
  
                  <img src="https://ndhbucket.s3.ap-south-1.amazonaws.com/ndhgo-mailer/images/barcode.png"
                      alt="barcode" width="130px" style={{borderRadius: 5}}/>
  
                  <a href="https://play.google.com/store/apps/details?name=com.nextdoorhub" target="blank">
  
                      <img src="https://ndhbucket.s3.ap-south-1.amazonaws.com/ndhgo-mailer/images/play-store.png"
                          alt="play store" width="120"/>
  
                  </a>
  
              </div>
              <div className="app">
  
                  <img src="https://ndhbucket.s3.ap-south-1.amazonaws.com/ndhgo-mailer/images/barcode.png"
                      alt="barcode" width="130px" style={{borderRadius: 5}}/>
  
                  <a href="https://apps.apple.com/in/app/ndhgo/id1438955605" target="blank">
  
                      <img src="https://ndhbucket.s3.ap-south-1.amazonaws.com/ndhgo-mailer/images/app-store.png"
                          alt="app store" width="120"/>
  
                  </a>
  
              </div>
  
          </div>
  
      </div>
      <div className="footer_bottum">
  
          <h6><a href="tel:+91-33-66212222"><i className="fas fa-phone-alt"></i>+91-33-66212222</a></h6>
  
          <h6><a title="ndhgo Official Site" href="https://www.ndhgo.com/" target="blank"><i
                      className="fas fa-globe"></i>www.ndhgo.com</a></h6>
  
          <h6><a href="mailto:mail@ndhgo.com"><i className="fas fa-envelope-open-text"></i>mail@ndhgo.com</a></h6>
  
      </div>
      <br/>
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

</form>



  
  


  </>
    )
    
    
  
}

export default CovidForm

