import { Select } from 'antd';
import { useState } from 'react';
import RequiredFeild from '../../Atoms/RequiredFeild';
import { Button, Modal } from 'antd';



const { Option } = Select;

const AccInstruct = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {


    const ZakatExemptionReason = [
        // { value: "01", label: "Self" },
        { value: "02", label: "Non-Muslim" },
        { value: "03", label: "Foriegn National" },
        { value: "04", label: "Due to Fiqah" },
        { value: "05", label: "Other" },
    ];
    const AccountOperatingInstOptn = [
        { value: "01", label: "SINGLY" },
        { value: "02", label: "JOINTLY" },
        { value: "03", label: "EITHER OR SURVIVOR" },
        { value: "04", label: "ANY ONE OF US" },
        { value: "05", label: "Other" },
    ];




    return (
        <div className="row">

            <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column mb-3">
                <label
                    htmlFor="AccountOperatingInstruction"
                    className="col-12 col-form-label fw-500"
                >
                    Account Operating Instruction
                </label>

                <div className="mt-auto">

                    <Select defaultValue={values?.AccountOperatingInstruction?.children ? values?.AccountOperatingInstruction?.children : undefined} placeholder="Select any one" onSelect={(value, event) => handleDrctChange("AccountOperatingInstruction", event)} rules={[{ required: true }]}>

                        {AccountOperatingInstOptn.map(optn => (
                            <Option key={optn?.value}>{optn?.label}</Option>
                        ))}

                    </Select>

                    {!values.AccountOperatingInstruction?.value && <RequiredFeild />}


                </div>

            </div>

            {values?.AccountOperatingInstruction?.children === "Other" &&
                <div className="col-12 col-sm-6 col-lg-4  d-flex flex-column mb-3">
                    <label
                        htmlFor="AccountOperatingInstructionOtherDetails"
                        className="col-12 col-form-label fw-500"
                    >
                        Account Operating Instruction Details
                    </label>
                    <input
                        type="text"
                        name="AccountOperatingInstructionOtherDetails"
                        className="form-control mt-auto"
                        placeholder="Other Instruction Details"
                        value={values.AccountOperatingInstructionOtherDetails}
                        onChange={handleChange}
                        id="AccountOperatingInstructionOtherDetails"
                        required
                    />
                </div>
            }

            {/* <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="ZakatYES"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Zakat Exemption
                                    </label>
                                    <div className="mt-auto">
                                        <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="ZakatYES"
                                                    name="ZakatExemption"
                                                    value="YES"
                                                    defaultChecked={values.ZakatExemption == "YES"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="ZakatYES" className="py-1 mb-0">
                                                    YES
                                                </label>
                                            </li>
                                            <li className="w-50">
                                                <input
                                                    type="radio"
                                                    id="ZakatNO"
                                                    name="ZakatExemption"
                                                    value="NO"
                                                    defaultChecked={values.ZakatExemption == "NO"}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="ZakatNO" className="py-1 mb-0">
                                                    NO
                                                </label>
                                            </li>
                                        </ul>
                                        {!values.ZakatExemption && <RequiredFeild />}
                                    </div>
                                </div>

                                {values?.ZakatExemption === "YES" && <><div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column mb-3">
                                    <label
                                        htmlFor="ReasonZakat"
                                        className="col-12 col-form-label fw-500"
                                    >
                                        Reason of Zakat Exemption
                                    </label>

                                    <div className="mt-auto">

                                        <Select defaultValue={values?.ReasonZakat?.children ? values?.ReasonZakat?.children : undefined} placeholder="Select any one" onSelect={(value, event) => handleDrctChange("ReasonZakat", event)} rules={[{ required: true }]}>

                                            {ZakatExemptionReason.map(optn => (
                                                <Option key={optn?.value}>{optn?.label}</Option>
                                            ))}

                                        </Select>

                                        {!values.ReasonZakat && <RequiredFeild />}


                                    </div>

                                </div>

                                    {values?.ReasonZakat?.children === "Other" &&
                                        <div className="col-12 col-sm-6 col-lg-4  d-flex flex-column mb-3">
                                            <label
                                                htmlFor="otherZakatReason"
                                                className="col-12 col-form-label fw-500"
                                            >
                                                Other Zakat Reason
                                            </label>
                                            <input
                                                type="text"
                                                name="otherZakatReason"
                                                className="form-control mt-auto"
                                                placeholder="Other Zakat Reason"
                                                value={values.otherZakatReason}
                                                onChange={handleChange}
                                                id="otherZakatReason"
                                                required
                                            />
                                        </div>
                                    }</>} */}

            <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                <label
                    htmlFor="TaxYES"
                    className="col-12 col-form-label fw-500"
                >
                    Tax Exemption
                </label>
                <div className="mt-auto">
                    <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                        <li className="w-50">
                            <input
                                type="radio"
                                id="TaxYES"
                                name="TaxExemption"
                                value="YES"
                                defaultChecked={values.TaxExemption == "YES"}
                                onChange={handleChange}
                            />
                            <label htmlFor="TaxYES" className="py-1 mb-0">
                                YES
                            </label>
                        </li>
                        <li className="w-50">
                            <input
                                type="radio"
                                id="TaxNO"
                                name="TaxExemption"
                                value="NO"
                                defaultChecked={values.TaxExemption == "NO"}
                                onChange={handleChange}
                            />
                            <label htmlFor="TaxNO" className="py-1 mb-0">
                                NO
                            </label>
                        </li>
                    </ul>
                    {!values.TaxExemption && <RequiredFeild />}
                </div>
            </div>
            {/* <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                <label
                    htmlFor="TransactionModeCheque"
                    className="col-12 col-form-label fw-500"
                >
                    Mode of Transaction
                </label>
                <div className="mt-auto">
                    <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                        <li className="w-50">
                            <input
                                type="radio"
                                id="TransactionModeCheque"
                                name="TransactionMode"
                                value="Cheque"
                                defaultChecked={values.TransactionMode == "Cheque"}
                                onChange={handleChange}
                            />
                            <label htmlFor="TransactionModeCheque" className="py-1 mb-0">
                                Cheque
                            </label>
                        </li>
                        <li className="w-50">
                            <input
                                type="radio"
                                id="TransactionModeRTGS"
                                name="TransactionMode"
                                value="RTGS(Prism)"
                                defaultChecked={values.TransactionMode == "RTGS(Prism)"}
                                onChange={handleChange}
                            />
                            <label htmlFor="TransactionModeRTGS" className="py-1 mb-0">
                                RTGS
                            </label>
                        </li>
                    </ul>
                    {!values?.TransactionMode && <RequiredFeild />}
                </div>
            </div> */}



        </div>
    );
};

export default AccInstruct;
