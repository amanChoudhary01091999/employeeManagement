import React from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from '../../InputFiles/DatePicker';
import InputForm from '../../InputFiles/InputForm';
import Validation from '../../validation/Validations'
import '../BackGroundVerification/index.css'
import { useSelector,useDispatch } from 'react-redux';
import { CoCRequest } from '../../actions/CodeOfConductFormAction';
import { LoadingButton } from '@mui/lab';
import Snackbars from '../../components/Snackbar';
import CodeOfConductAppBar from './CodeOfConductAppBar';
import { Box, textAlign } from '@mui/system';
import TextAreaInput from '../../InputFiles/TextAreaInput';







// async function ndhCodeOfConductApi( ndhCodeOfConduct)
// {
    
   
//     const settings = {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             'accessToken':localStorage.getItem('accessToken')
//         },
//         body: JSON.stringify(ndhCodeOfConduct)
        

//     }
//     try {
//         const fetchResponse = await fetch("http://10.1.30.18:9032/ndhgo-code-of-conduct/create", settings);
//         const data = await fetchResponse.json();
//         return data;
//     } catch (e) {
//         return e;
//     }    

  
// }

const CodeOfConduct = (props) => {
    //let history = useHistory()
    


    const formState = useForm();
    const { handleSubmit } = formState


    
    const CoCState = useSelector((state) => state.CoCReducer);
    const { loading, error, userInfo } = CoCState;
    const dispatch = useDispatch();


    const onSubmit = (data) => {
        //history.push('/refcheckauth-form')
        //console.log(data)
        const ndhCodeOfConductObj={
            "id":1,
            "date": data.date,
            "employee_id": "101",
            "employee_signature": data.employee_signature[0].name,
            "full_name": data.full_name,
        }

        dispatch(CoCRequest(ndhCodeOfConductObj))

          //console.log(ndhCodeOfConductApi(ndhCodeOfConductObj))
    
         // console.log(ndhCodeOfConductApi(ndhCodeOfConduct))

         // console.log(props.post(ndhCodeOfConduct))

      

    


    };
    const validation = Validation().validationDegree


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CodeOfConductAppBar/>
                
                <div style={{ backgroundColor: "#F3F3F3", padding: 30 }}>
                    <div>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>I.PREAMBLE</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh",marginTop:"2vh"}}> NDHGO (the “Company”) and its subsidiaries  is committed to ensure that its business is conducted, in all respects and all the times, according to rigorous ethical, professional and legal standards, which prevail from time to time, in the same industrial sector in which Company conducts its normal business. The Company is also committed to create a workplace, at all of its working locations, that, all the times, is free from harassment and discrimination, where co-workers are respected, and provided an appropriate environment so as to encourage good performance and conduct.
                            To achieve this goal all Employees are expected to:
                            <li style={{fontWeight:"bold",fontSize:'110%'}}>adhere to this Policy in their professional as well as personal conduct</li>
                            <li style={{fontWeight:"bold",fontSize:'110%'}}>treat co-workers with respect, courtesy, honesty and fairness</li>
                            <li style={{fontWeight:"bold",fontSize:'110%'}}>respect different values, beliefs, cultures and religions</li>
                            <li style={{fontWeight:"bold",fontSize:'110%'}}>value the contribution of the people they work with, and work co-operatively</li>
                            <li style={{fontWeight:"bold",fontSize:'110%'}}>not bully, intimidate, harass or discriminate against other co-workers</li>

                        </p>
                    </div>
                    <hr/>
                    <br/>

                    <div>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>II.PURPOSE</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh"}}>
                            This “Code of Conduct and Work Ethics Policy” (the “Policy”) has been formulated in order to foster and maintain Employee trust and confidence in the professionalism and the integrity of the Employees of the Company by ensuring that all Employees adhere to appropriate standards of conduct as set out in this Policy, that maintains and enhances the reputation of the Company.
                            should the conduct of Employees be when they are undertaking business on behalf of the Company.
                            The circumstances of conducts as set out below in this Policy, although not exhaustive, are intended to cover those situations, which are most likely perceived to be encountered by Employees. In case  any Employee encounters any circumstance that is not covered hereunder or in case of any doubt, Employees should seek guidance from the Manager and/or from the Human Resource Department and act accordingly.
                            A breach of the Policy may result in disciplinary action against the Employee concerned including, potential dismissal or termination of employment or any other legal action as may available with the Company or all of the above together.

                        </p>
                    </div>
                    <hr/>
                    <br/>

                    <div>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>III.COVERAGE</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh"}}>
                            This Policy applies to all the Employees of NDHGO and its subsidiaries. Employee shall mean all individuals on full- time or part-time employment with the Company, with permanent, probationary, trainee, retainer, temporary, consultant or contractual appointment.
                            The Company also expects its managers to lead by example and perform their duties in accordance with this Policy and ensure that the content of this Policy are communicated to all persons reporting to them. If a business location or region has policies, practices, laws or regulations that require more than what is stated in this Policy, then the Employees must follow this policy as a minimum and comply with such policies, practices, laws, or regulations in that particular region/ country; Business units and locations are responsible for ensuring that their location specific policies and practices are consistent and in compliance with this Policy.
                            The Company's reputation and credibility are based upon its total commitment to ethical business practices and also on ethical conduct of its Employees. To safeguard the Company's reputation, Employees must conduct themselves in accordance with the highest ethical standards and also be perceived to be acting ethically at all times. Compliance with all policies of the Company, relevant applicable laws and regulations is the minimum standard which should be adhered to by all the Employees all the times.



                        </p>
                    </div>
                    <hr/>
                    <br/>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.CLAUSES COVERED UNDER THE POLICY</Box>
                    <div style={{ padding: 30 }}>



                        <div>
                        <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.i REGULATORY COMPLIANCE</Box>
                        <p style={{fontFamily:"roboto", textAlign:'center' ,fontSize:"3vh"}}>

                                Every employee of NDHGO and its subsidiaries shall, in his/ her business conduct, comply with all applicable laws & regulations, both in letter & in spirit, in all the territories in which he/she operates.



                            </p>
                        </div>
                        <hr/>
                        <br/>


                        <div>
                        <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.ii  ILLEAGEL CONSIDERATION</Box>
                        <p style={{fontFamily:"roboto", textAlign:'center' ,fontSize:"3vh"}}>
                                It is unlawful for all employees to offer or give bribe for purpose of obtaining or retaining business or obtaining an unfair advantage in any business dealing or transaction. Any employee found indulging directly or indirectly in any such activity shall be subject to disciplinary action, up to & including termination of employment & legal action even if they do not actually benefit from the deal.



                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                        <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.iii  PROFESSIONALISM</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>
                                The personal and professional behavior of Employees shall confirm to the standards expected of persons in their positions, which includes:
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>A commitment to and adherence to professional standards in their work and in their interactions with other Employees, business parents, clients of the Company;</li>
                                <li style={{fontWeight:"bold", textAlign:'LEFT'}}>A commitment to maintaining the highest standards of integrity and honesty in their work;</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>An adherence to ethical and legal standards to be maintained in business;</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>A responsibility to support the Company in its efforts to create an open and mutually supportive environment;</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>A responsibility to share information and give willing assistance in furthering the goals and objectives of the Company; and</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>A responsibility to ensure that there is no misrepresentation of facts. Wherever a misunderstanding is thought to have taken place through unclear communications, this should   be corrected promptly.</li>
                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                        <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}> IV.iv CONFLICT OF INTEREST</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh"}}>
                                Employees have an obligation to conduct business within guidelines that prohibit actual or potential conflicts of interest. Transactions with outside firms must be conducted within a framework established & controlled by the executive level of NDHGO and its subsidiaries. Business dealings with outside firms should not result in unusual gains for those firms. Unusual gain refers to bribes, product bonuses, special fringe benefits, unusual price breaks & other windfalls designed to ultimately benefit the employer, the employee, or both. Promotional plans that could be interpreted to involve unusual gain require specific executive-level approval.

                                Each Employee is expected to avoid situations in which his or her financial or other personal interests or dealings are, or may be, in conflict with the interests of the Company. Accordingly, the Company expects its Employees to act in the Company's interest at all times.

                                Employees are advised not to engage in any other business, commercial or investment activity that may conflict with their ability to perform their duties to the Company. Employees must also not engage in any other activity (cultural, political, recreational, social) which could reasonably conflict with the Company's interests and interfere with the performance of their duties.
                                Employees must not use any Company's property, information or position, or opportunities arising from these for personal gains or to compete with or to tarnish the image of the Company.
                                Employees should not engage in any business activity, which could be detrimental to, or in competition with, the Company's any business activities.
                                All Employees must avoid situations in which their personal interest could conflict with the interest of the Company. If, under any circumstance, Employees' personal interests conflict with those of the Company's', in all such cases the Employee must seek advice from his or her manager or from senior management. An actual or potential conflict of interest occurs when an employee is in a position to influence a decision that may result in a personal gain for that employee or for a relative because of the Company and its subsidiaries business dealings. For the purposes of this code of conduct, a relative is any person who is related by blood or marriage, or whose relationship with the employee is similar to that of persons who are related by blood or marriage.
                                No "presumption of guilt" is created by the mere existence of a relationship with outside firms. However, if employees have any influence on transactions involving purchases, contracts, or leases, it is imperative that they disclose to an officer of the Company and its subsidiaries as soon as possible the existence of any actual or potential conflict of interest so that safeguards can be established to protect all parties.
                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.v. CONFIDENTIALITY OF INFORMATION</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh"}}>
                           
                                As a result of employment with the Company, Employees may be entrusted with confidential information; with regard to the Company and/or its affiliates, its customers and suppliers. Upon joining, Employees are required to separately read, acknowledge and sign the 'Confidentiality Agreement' that shall explicitly mention the terms and conditions of the confidentiality obligation and treatment of confidential information and intellectual property of the Company.

                                NDHGO and its subsidiaries considers its information & infrastructure thereof a valuable corporate asset. To maintain the security of information obtained in the course of work, no employee may engage in any of the following behavior.

                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>    To let out undisclosed information to third parties (inside & outside of NDHGO and its subsidiaries) without reasonable justification.</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>    To use information for personal reasons</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>    To modify information without reasonable justification.</li>

                                Such information must be safely kept appropriately & strictly according to the internal rules concerning security.

                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>    Corporate Information: Information concerning NDHGO and its subsidiaries sales & other activities is an important asset. </li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>    Information Concerning Business Transactions with Customers & Business Partners: Employee is obliged to safely keep information concerning NDHGO and its subsidiaries customers, service provide & business partners, which is gained in the course of business transactions. </li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>    Information Concerning Employees: Employees are obliged to appropriately safely keep personal information concerning employees & not to use it for any unofficial purpose. </li>

                                The above concerning corporate information, business transaction, customer information, business partner, employee & other official information which is gained in the course of work needs to be carefully handled & may not be disclosed, modify or destroy it without reasonable justification. Use of such information should be for the purpose officially approved.


                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>
                                
                            </h4> */}
                            <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.vi  Integrity of Financial Information</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>
                                Shareholders, management and other interested parties must have complete and accurate financial information in order to make informed decisions. Many Employees participate in accounting  processes that directly impact the integrity of external financial statements and  internal  management reports. All such Employees have a responsibility to ensure that all transactions are recorded in Company's accounts accurately and promptly and they must immediately report any known inaccuracies. Misrepresentations by Employees that result from intentional acts that may conceal or obscure the true nature of a business transaction are clear contraventions of this Policy.
                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>Protection and Use of Company Property</h4>
                            <p> */}
                            <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.vii  Protection and Use of Company Property</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>

                                All Employees of the Company are responsible for protecting and taking reasonable steps to prevent the theft or misuse of, or damage to Company's assets, including all kinds of physical assets, movable, immovable and tangible property, corporate information and intellectual property such as invention, copyrights, patents, trademarks and technology and intellectual property used in carrying out their responsibilities. All Employees must use all equipment’s, tools, materials, supplies, and Employee time only for Company's legitimate business interests. Company's property must not be borrowed, loaned, or disposed of, except in accordance with appropriate Company's policies. All Employees must use and maintain Company's property and resources efficiently and with due care and diligence in order not to incite loss, leakage, theft & illegal use thereof.


                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>Acceptance of Gifts and Other Benefits</h4>
                            <p> */}
                             <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.viii Acceptance of Gifts and Other Benefits</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>

                                Employees should not give or accept gifts, entertainment, or any other personal benefit or privilege that would in any way influence or appear to influence any business decision. Accepting money, gifts, entertainment, loans or any other benefit or preferential treatment from any existing or potential customer, supplier or business associate of the Company, is strictly prohibited, except occasional gifts of modest value and entertainment on a modest scale as part of customary business practice.
                                As a general principle, gifts of minor estimated value (e.g. pens, golf balls, desk diaries) are acceptable.
                                All other prospective offers of gifts or entertainment falling outside the foregoing guideline, but which reflect customary and transparent business practice in a particular market, may be accepted. However, in case of doubts, the Employee must refer the case to his/her manager and/or the Human Resource Department who will decide on the action to be taken. It is unacceptable to directly or indirectly offer,
                                pay, solicit or accept any kind of inducements or bribes.
                                Any attempted transactions of this nature should be immediately reported to the reporting manager/ HR department. The funds or resources of the Company shall not be used directly or indirectly for any such purpose.


                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>Whole Time and Attention</h4>
                            <p> */}
                             <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.ix Whole Time and Attention</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>

                                All Employees shall devote their time and their best efforts to promote the Company's business and may not without the prior written consent of the Company (and subject to any terms and conditions as may be imposed by the Company) engage or be interested in (whether directly or indirectly) in any other business, employment  or vocation for pecuniary gain.
                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>Sexual Harassment Prevention</h4>
                            <p> */}

<Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.x Sexual Harassment Prevention</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>
                                The Company is committed to provide a safe work environment that is free of inappropriate behavior of all kinds and harassment on account of age, physical disability, marital status, race, religion, caste, sex, sexual orientation or gender identity. NDHGO has complete compliance towards various acts regarding Sexual Harassment prevention. Employees are responsible for supporting the Company in its endeavor to protect others from any form of such harassments.
                                In the course of business conduct of any Employee, wherever harassment occurs to any such Employee as a result of an act or omission by any third party or outsider, the Company shall take all steps necessary and reasonable to assist such affected Employee in terms of support and preventive action and any offence in regards to Sexual harassment will lead to Immediate termination of employee engaging in any act identified as Sexual harassment in various laws.

                            </p>
                        </div>
                        <hr/>
                        <br/>
                        <div>
                            {/* <h4>Diversity and Non Discrimination </h4>
                            <p> */}
                            <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.xi Diversity and Non Discrimination</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh"}}>
                                NDHGO and its subsidiaries is committed to fostering, cultivating and preserving a culture of diversity, equity and inclusion. Our human capital is the most valuable asset we have. The collective sum of the individual differences, life experiences, knowledge, inventiveness, innovation, self –expression, unique capabilities and talent that our employees invest in their work represents a significant part of not only our culture, nit our reputation and company’ achievement as well. We embrace and encourage our employee’s differences in age, color, disability, ethnicity, family or marital status, gender identity or expression,
                                language, national origin, physical and mental ability, race, religion, sexual orientation, socio-economic status, and other characteristics that make our employees unique.

                                NDHGO’ diversity initiatives are applicable – but not limited – to our practices and policies on recruitment and selection, compensation and benefits, professional development and training, promotions, transfers, social and recreational programs, layoffs, terminations, and the ongoing development of a work environment built on the premises of gender and diversity equity that encourages and enforces :

                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>Respectful communication and cooperation between employee’s teamwork and employee participation, permitting the representation of all groups and employee perspectives.</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>Employer and employee contributions to the communities we serve to promote a greater understanding and respect for the diversity. </li>
                                All employees of NDHGO have a responsibility to treat others with dignity and respect at all times. All employees are expected to exhibit conduct that reflects inclusion during work, at work functions on or off the work site, and at all other company-sponsored and participative events. Any employee found to have exhibited any inappropriate conduct or behavior against others may be subject to disciplinary action. Employees who believe they have been subjected to any kind of discrimination that conflicts with the company’s diversity practices should seek assistance from a supervisor or an HRD. All employees of NDHGO must deal with clients, suppliers, job applicants & other employees without regard to race, color, religion, sex, national origin, sexual orientation, age, disability, military service or marital status. All business decisions shall be considered on their own merits.


                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>Password Protection Guaranty</h4>
                            <p> */}
                            <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.xii Password Protection Guarantee</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>
                                While working, employee will be handling tools, information or networks that are protected by password. Employee must guarantee protection of password handled by him/ her & must ensure no breach on usage of these tools.
                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>Alcohol & Substance Abuse</h4>
                            <p> */}
                              <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.xiii Alcohol & Substance Abuse</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>

                                The use or possession of alcohol, illegal drugs, and other controlled substances in the workplace and being under the influence of these substances on the job and during working hours is strictly prohibited. However, possession of prescription medication for medical treatment is permitted.
                                There may be company-sponsored events where management approves the serving of alcoholic beverages. In these cases, all appropriate liquor laws must be followed, including laws regarding the prohibition of serving of alcohol to those under the legally permissible age.
                                However, under all such cases, excessive drinking, intoxication and misbehavior at these events is prohibited and will be   dealt with severely.



                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>Fraud</h4>
                            <p> */}
                            <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.xiv Fraud</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>
                                Fraud — or the act or intent to cheat, trick, steal, deceive, or lie — is both dishonest and, in most cases, criminal. Intentional acts of fraud are subject to strict disciplinary action, including dismissal and possible civil and/or criminal action against the concerned Employee.

                                Some examples of Fraud include:
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>Submitting false expense reports;</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>Forging or altering checks;</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>Misappropriating assets or misusing Company's property;</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>Unauthorized handling or reporting of transactions;</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>Inflating sales numbers by shipping inventory known to be defective or non-conforming;</li>
                                <li style={{fontWeight:"bold",textAlign:'LEFT'}}>Making any entry on Company records or financial statements that is not accurate and in accordance with proper accounting standards</li>
                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>Compliance with Laws and Agreements</h4>
                            <p> */}
                            <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.xv Compliance with Laws and Agreements</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>

                                All Employees shall conduct business in compliance with all applicable laws and regulations of the particular District, State or Country.

                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>Health, Safety and Environment</h4>
                            <p> */}
                            <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.xvi Health, Safety and Environment</Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>

                                All Employees shall comply with the company health and safety norms as communicated to them from time to time. Employees shall bring to the management's attention any workplace safety or health hazard.
                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                            {/* <h4>Constant Delivery Excellence </h4>
                            <p> */}
                            <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.xvii Constant Delivery Excellence </Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>

                                All employees must strive to serve the Company & it’s customers with excellence by using best of his/ her professional abilities at all times. He/ She must ensure quick & timely response to any query, responsibility or expectation from him/ her by the Company , its customer or partners.
                            </p>
                        </div>
                        <hr/>
                        <br/>


                        <div>
                        <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.xviii Responsibility towards team </Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>
                            

                                All employees of must strive to set an example for everyone else in company through his/ her Innovation, Work discipline, Sustained high performance, Initiatives to solve problems & Thought leadership. He/ She must share his/ her professional knowledge & experience with fellow employees for their skill enhancement & be open to learning from their experiences.

                                Employee may avoid public accusations or criticisms of other employees at any level in the Company. Address such issues privately with those involved or your supervisor for resolution.

                                An employee planning to leave the Company  should not directly or indirectly hire, solicit or encourage another employee to leave the employment of NDHGO and its subsidiaries.

                            </p>
                        </div>
                        <hr/>
                        <br/>

                        <div>
                        <Box sx={{ bgcolor: '#cfe8fc', height: '8vh',fontSize:'4vh',fontFamily: 'Muller',textAlign:'center',marginTop:"2vh"}}>IV.xix Reporting Violation </Box>
                        <p style={{fontFamily:"roboto", textAlign:'CENTER' ,fontSize:"3vh"}}>
                            
                                Every employee of the Company shall promptly report to the Management any actual or possible violation of the Code or an event he/ she become aware of that could affect the business or reputation of NDHGO and its subsidiaries.

                            </p>
                        </div>
                        <hr/>
                        <br/>
                    

                    <div>
                        {/* <h4>V.  MISCONDUCT AND NON-CONFORMANCE WITH THE POLICY </h4>
                        <p> */}
                         <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>V.  MISCONDUCT AND NON-CONFORMANCE WITH THE POLICY</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh",marginTop:"2vh"}}>
                            Non-observance of this Policy shall be construed as misconduct that could warrant disciplinary action, including dismissal in deserving cases without notice. The decision in this regard will lie with the Management and HR Department and shall be  binding on the Employees.
                            Examples of Impermissible conduct or Misconduct

                            The company requires order and discipline to succeed and to promote efficiency, productivity, and cooperation among employees. For this reason it may be helpful  to identify some types of conduct that are impermissible. Listed below are impermissible actions that may lead to inappropriate disciplinary action. Although it is not possible to provide an exhaustive list of all types of impermissible conduct and performance, the following are some examples:

                            Insubordination, including improper conduct towards a supervisor or senior from any department.

                        </p>
                    </div>
                    <hr/>
                    <br/>

                    <div>
                        {/* <h4>VI. EXCEPTIONS </h4>
                        <p> */}
                         <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>VI. EXCEPTIONS</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh",marginTop:"2vh"}}>
                            Any exceptions to the norms laid down in this Policy may be at the discretion of the Chairman/ Managing Director or any appropriate authority delegated by them.

                        </p>
                    </div>
                    <hr/>
                    <br/>
                    <div>
                        {/* <h4>VII.    CONTACT </h4>
                        <p> */}
                         <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>VII.    CONTACT</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh",marginTop:"2vh"}}>
                            All queries and clarifications on the policy and procedures may be referred to the Human Resource Department

                        </p>
                    </div>
                    <hr/>
                    <br/>
                    <div>
                        {/* <h4>VIII.   ACCOUNTABILITY</h4>
                        <p> */}
                         <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>VIII.   ACCOUNTABILITY</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh",marginTop:"2vh"}}>
                            It is a condition of an appointment and/ or employment that all Employees must understand and adhere to the Company’s Code of Conduct and at all times and abides by the standards, requirements and procedures laid down herein. They must:

                            <li style={{fontWeight:"bold",textAlign:'LEFT'}}>commit to individual conduct in accordance with this Policy.</li>
                            <li style={{fontWeight:"bold",textAlign:'LEFT'}}>observe both, the spirit and the letter of the law in their dealings on Company's behalf.</li>
                            <li style={{fontWeight:"bold",textAlign:'LEFT'}}>recognize Company's responsibility to its shareholders, customers, employees, those with whom Company does business, and to society. Assess priorities in the context of  discharging these responsibilities appropriately on Company's behalf</li>
                            <li style={{fontWeight:"bold",textAlign:'LEFT'}}>conduct themselves as responsible members of society, giving due regard to health, safety, and environmental concerns, and human rights, in the operation of Company's business.</li>
                            <li style={{fontWeight:"bold",textAlign:'LEFT'}}>report any suspected breach of the law or this Policy to the HR Office via email at hr@ndhgo.com to who will protect those who report violations in good faith.</li>

                        </p>
                    </div>

                    <div>
                        {/* <h4>IX. AMENDMENTS</h4>
                        <p> */}
                               <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>IX. AMENDMENTS</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh",marginTop:"2vh"}}>
                            The Company reserves the rights to change/ amend / add /delete/ modify this Policy in whole or in part, at any time without assigning any reason whatsoever. The Employees acknowledge that they will not be personally advised of any such change/ amendment / addition /deletion/ modification. The Employees are advised to check for any such change/ amendment / addition /deletion/ modification regularly. The Employees hereby unconditionally agree to all such changes / amendments / additions / deletions / modifications.
                        </p>
                    </div>

                    <div>
                        {/* <h4 style={{ backgroundColor: '#D3D3D3' }}>Confirmation & Acceptance</h4>
                        <p> */}
                        <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',fontSize:'5vh',fontFamily: 'Muller',textAlign:'center'}}>Confirmation & Acceptance</Box>
                        <p style={{fontFamily:"roboto", textAlign:'left' ,fontSize:"3vh",marginTop:"2vh"}}>
                            I have read & understand the Code of Conduct. I am in complete agreement with all clauses & will ensure to comply & practice them during &after my association with NDHGO and its subsidiaries. I understand that failure to comply with the Code or to respond truthfully will be a basis for disciplinary or other action, up to & including dismissal.
                        </p>
                    </div>

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
                                    </tr>
                                    
                                <tr>
                                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Signature: </td>
                                    <td>
                                    <DatePicker
                                            formState={formState}
                                            name={'employee_signature'}
                                            label={""}
                                            type={'file'}
                                            validation={validation}
                                            placeholder={""} /> </td>
                                    <td className="text-center " style={{ fontFamily: 'Muller' }}>Date: </td>
                                    <td>
                                        <DatePicker
                                            formState={formState}
                                            name={'date'}
                                            label={""}
                                            type={'date'}
                                            validation={validation}
                                            placeholder={""} />

                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
                    
               
            </form>
        </>
    )
}
export default CodeOfConduct