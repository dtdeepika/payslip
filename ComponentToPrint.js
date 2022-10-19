import React, { useState } from 'react';
import pic from "./digitallogo.png";
import axios from "axios";


const ComponentToPrint = React.forwardRef((props, ref) => {

    const [salary, setSalary] = useState(0);
    const [houseRentAllowance, setHouse] = useState(0);
    const [conveyanceAllowance, setConvayance] = useState(0);
    const [medicalAllowance, setMedical] = useState(0);
    const [specialAllowance, setSpecial] = useState(0);
    const [name, setName] = useState();
    const grossSalary = parseInt(salary) + parseInt(houseRentAllowance) + parseInt(conveyanceAllowance) + parseInt(medicalAllowance) + parseInt(specialAllowance) || "";
    const [department, setDepartment] = useState();
    const pf = salary * 0.12 || "";
    const [incomeTax, setIncome] = useState(0);
    const professionalTax = 210;
    const [month, setMonth] = useState(0);
    const [workingDays, setWorkingDays] = useState(30);
    const [lopDays, setLopDays] = useState(0);
    const lopAmount = lopDays * (salary / workingDays) || 0;
    const totalDeductions = parseInt(pf) + parseInt(incomeTax) + parseInt(professionalTax) + parseInt(lopAmount) || "";
    const netSalary = grossSalary - totalDeductions || "";
    const [employeeList, setEmployeeList] = useState([]);
    const [dateOfJoining, setDateOfJoining] = useState(0);
    const [bankName, setBankName] = useState();
    const [bankAccountNumber, setBankAccountNumber] = useState(0);
    const [panNumber, setPanNumber] = useState(0);

    // "http://payslip.digitaltriumph.in/create"
    const onSubmitForm = () => {
        let apiURL = "http://localhost:4000/create";
        axios.post(apiURL, {
            salary: salary,
            houseRentAllowance: houseRentAllowance,
            conveyanceAllowance: conveyanceAllowance,
            medicalAllowance: medicalAllowance,
            specialAllowance: specialAllowance,
            grossSalary: grossSalary,
            pf: pf,
            incomeTax: incomeTax,
            professionalTax: professionalTax,
            workingDays: workingDays,
            lopAmount: lopAmount,
            lopDays: lopDays,
            totalDeductions: totalDeductions,
            netSalary: netSalary,
            name: name,
            department: department,
            month: month,
            bankAccountNumber: bankAccountNumber,
            bankName: bankName,
            panNumber: panNumber,
            dateOfJoining: dateOfJoining,
        }).then(() => {
            setEmployeeList([...employeeList])
        })
    }

    // useEffect(() => {
    //     onSubmitForm();
    // }, [])


    return (
        <div ref={ref} className="m-4">
                    <div>
                        <div className='d-flex  justify-content-between' style={{ paddingBottom: "15px" }}>
                            <img src={pic} alt="logo" />
                            <p className='text-left'>AC 149, Plot No 4920, AC Block <br /> Achu Towers,3rd Floor,2nd Avenue <br /> Anna Nagar, Chennai 600040.</p>
                        </div>
                        <div className=' d-flex justify-content-between' style={{ paddingBottom: "20px" }}>
                            <div className="mb-3 row">
                                <label className="col-7 col-form-label" style={{ paddingRight: "0px", width: "54%" }} >Pay Slip for the month of</label>
                                <div className="col-5 px-0 text-left " >
                                    <input type="text" className="form-control border-0 px-0 month" name='month' onChange={(event) => setMonth(event.target.value)} />
                                </div>
                            </div>
                            <input type="Date" className='flex-shrink-1' />
                        </div>
                        <table className="table table-bordered table-sm" >
                            <tbody>
                                <tr>
                                    <th>Employee Name</th>
                                    <td><input type="text" className="border border-0 form-control" name='name' onChange={(event) => setName(event.target.value)} /></td>
                                    <th>Total Working Days</th>
                                    <td><input type="text" className="border border-0 form-control" name='workingDays' onChange={(event) => setWorkingDays(event.target.value)} /></td>
                                </tr>
                                <tr>
                                    <th>Employee ID</th>
                                    <td><input type="text" className="border border-0 form-control" /></td>
                                    <th>LOP Days</th>
                                    <td><input type="text" className="border border-0 form-control " name='lopDays' onChange={(event) => setLopDays(event.target.value)} /></td>
                                </tr>
                                <tr>
                                    <th>Designation</th>
                                    <td><input type="text" className="border border-0 form-control" /></td>
                                    <th>Bank Name</th>
                                    <td><input type="text" className="border border-0 form-control" name='bankName' onChange={(event) => setBankName(event.target.value)} /></td>
                                </tr>
                                <tr>
                                    <th>Department</th>
                                    <td><input type="text" className="border border-0 form-control" name='department' onChange={(event) => setDepartment(event.target.value)} /></td>
                                    <th>Bank A/c No.</th>
                                    <td><input type="text" className="border border-0 form-control" name='bankAccountNumber' onChange={(event) => setBankAccountNumber(event.target.value)} /></td>
                                </tr>
                                <tr>
                                    <th>Date of Joining</th>
                                    <td><input type="text" className="border border-0 form-control" name='dateOfJoining' onChange={(event) => setDateOfJoining(event.target.value)} /></td>
                                    <th>PAN</th>
                                    <td><input type="text" className="border border-0 form-control" name='panNumber' onChange={(event) => setPanNumber(event.target.value)} /></td>
                                </tr>
                                <tr>
                                    <th>UAN</th>
                                    <td><input type="text" className="border border-0 form-control" /></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-bordered table-sm" >
                            <tbody>
                                <tr>
                                    <th colSpan="2" className='text-center'><h3>Earnings</h3></th>
                                    <th colSpan="2" className='text-center'><h3>Deductions</h3></th>
                                </tr>
                                <tr>
                                    <th>Basic Salary</th>
                                    <td><input type="text" className="border border-0 form-control" name='salary' onChange={(event) => setSalary(event.target.value)} /></td>
                                    <th>PF</th>
                                    <td>{pf}</td>
                                </tr>
                                <tr>
                                    <th>House Rent Allowances</th>
                                    <td><input type="text" className="border border-0 form-control" name='houseRentAllowance ' onChange={(event) => setHouse(event.target.value)} /></td>
                                    <th>Income Tax</th>
                                    <td><input type="text" className="border border-0 form-control" name='incomeTax' onChange={(event) => setIncome(event.target.value)} /></td>
                                </tr>
                                <tr>
                                    <th>Conveyance Allowances</th>
                                    <td><input type="text" className="border border-0 form-control" name="conveyanceAllowance " onChange={(event) => setConvayance(event.target.value)} /></td>
                                    <th>Professional Tax</th>
                                    <td>{professionalTax}</td>
                                </tr>
                                <tr>
                                    <th>Medical Allowances</th>
                                    <td><input type="text" className="border border-0 form-control" name='medicalAllowance' onChange={(event) => setMedical(event.target.value)} /></td>
                                    <th>LOP Amount</th>
                                    <td>{lopAmount}</td>
                                </tr>
                                <tr>
                                    <th>Special Allowances</th>
                                    <td><input type="text" className="border border-0 form-control" name='specialAllowance' onChange={(event) => setSpecial(event.target.value)} /></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>Gross Salary</th>
                                    <td>{grossSalary}</td>
                                    <th>Total Deductions</th>
                                    <td>{totalDeductions}</td>
                                </tr>
                                <tr>
                                    <th colSpan="2" className='text-center'>Net Salary</th>
                                    <td colSpan="2">{netSalary}</td>
                                </tr>
                                <tr>
                                    <th colSpan="2" className='text-center'>Amount in Words</th>
                                    <td colSpan="2"><input type="text" className="border border-0 form-control" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <h5 style={{ paddingTop: "8px" }}>Employee Signature :</h5>
                        <div className='d-flex justify-content-between' style={{ paddingTop: "18px" }}>
                            <p>This is an autogenerated document. It does not need any official signature.</p>
                            <div>
                                <button onClick={onSubmitForm} type="button" className="btn btn-secondary btn-sm" style={{ height: "26px", paddingTop: "0px", marginRight: "12px" }}>Submit</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
})

export default ComponentToPrint;