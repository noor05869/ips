import React, { useState, useEffect } from "react";
import { Select } from 'antd';
import RequiredFeild from "../../Atoms/RequiredFeild";
import UpperNavigation from "../../Atoms/UpperNavigation";
import BottomNavigation from "../../Atoms/BottomNavigation";
import BankMandate from "./BankMandate";
import ForiegnAccount from "./ForiegnAccount";
const { Option, OptGroup } = Select;
const SourceIncome = ({
  handleDrctChange,
  prevStep,
  nextStep,
  handleChange,
  values,
}) => {



  const Professions = [
    { value: "P001", label: "Govt Employee" },
    { value: "P002", label: "Businessman" },
    { value: "P003", label: "Private Service" },
    { value: "P006", label: "House Wife" },
    { value: "P015", label: "Student" },
    { value: "P014", label: "Self Employed Profession" },
    { value: "P013", label: "Retired Person" },
    { value: "P999", label: "Other" },
  ];
  const IncomeSources = [
    { value: "P001", label: "Salaried" },
    { value: "P002", label: "Business" },
    { value: "P003", label: "Inheritance" },
    { value: "P005", label: "Gift" },
    { value: "P006", label: "Retired" },
    { value: "P007", label: "Other" },
  ];

  const AnualIncomes = [
    { value: "J07", label: "Up to 100,000" },
    { value: "J08", label: "100,001 - 250,000" },
    { value: "J09", label: "250,001 - 500,000" },
    { value: "J10", label: "Above 500,000" },
  ];

  const AnualIncomesNormal = [
    { value: "J01", label: "Up to 100,000" },
    { value: "J02", label: "100,001 - 250,000" },
    { value: "J03", label: "250,001 - 500,000" },
    { value: "J04", label: "500,001 - 1,000,000" },
    { value: "J05", label: "1,000,001 - 2,500,000" },
    { value: "J06", label: "Above 2,500,000" },
  ];




  return (
    <div className="container-fluid pb-3">
      <div className="container">
        <div className="mt-3">
          <div className="">
            <UpperNavigation
              Title="Financial Details"
              prevSec="Personal Details"
              prevStep={prevStep} />
            <form onSubmit={nextStep}>
              <div className="row mt-40">

                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                  <label
                    htmlFor="Professions "
                    className="col-12 col-form-label fw-500"
                  >
                    Profession
                  </label>

                  <div className="mt-auto">
                    <Select defaultValue={values.BussType ? values.BussType : undefined} placeholder="Type of Business" onSelect={(value, event) => handleDrctChange("BussType", event)} rules={[{ required: true }]} >

                      {Professions.map(Professions => (
                        <Option key={Professions.value}>{Professions.label}</Option>
                      ))}

                    </Select>
                    {!values?.BussType?.value && <RequiredFeild />}
                  </div>
                  {/* {!values.BussType.value && values.continues ? <span className="text-danger fs10" >Please Select Occupation</span> : ""} */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4 mb-3 d-flex flex-column">
                  <label
                    htmlFor="IncomeSource "
                    className="col-12 col-form-label fw-500"
                  >
                    Source of Income
                  </label>

                  <div className="mt-auto">
                    <Select defaultValue={values.IncomeSource ? values.IncomeSource : undefined} placeholder="Source of Income" onSelect={(value, event) => handleDrctChange("IncomeSource", event)} rules={[{ required: true }]} >

                      {IncomeSources.map(IncomeSource => (
                        <Option key={IncomeSource.value}>{IncomeSource.label}</Option>
                      ))}

                    </Select>
                    {!values?.IncomeSource?.value && <RequiredFeild />}
                  </div>
                  {/* {!values.BussType.value && values.continues ? <span className="text-danger fs10" >Please Select Occupation</span> : ""} */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                  <label
                    htmlFor="CompName"
                    className="col-12 col-form-label fw-500"
                  >
                    Business / Employer Name
                  </label>
                  <input
                    type="text"
                    name="CompName"
                    className="form-control mt-auto"
                    placeholder="Google Inc"
                    value={values.CompName}
                    onChange={handleChange}
                    id="CompName"
                    maxLength="80"
                    required
                  />
                </div>

                <div className="col-12 col-sm-6 mb-3 col-lg-4 d-flex flex-column">
                  <label
                    htmlFor="AnualIncomes "
                    className="col-12 col-form-label fw-500"
                  >
                    Gross Annual Income (PKR)
                  </label>

                  <div className="mt-auto">

                    <input
                      type="text"
                      name="AnnualIncome"
                      className="form-control mt-auto"
                      placeholder="100000"
                      value={values.AnnualIncome}
                      onChange={handleChange}
                      id="AnnualIncome"
                      required
                      maxLength={10}
                    />
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                  <label
                    htmlFor="OtherIncome"
                    className="col-12 col-form-label fw-500"
                  >
                    Other Income
                  </label>
                  <input
                    type="text"
                    name="OtherIncome"
                    className="form-control mt-auto"
                    placeholder="12345"
                    value={values.OtherIncome}
                    onChange={handleChange}
                    id="OtherIncome"
                    maxLength={10}
                  />
                </div>

                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                  <label
                    htmlFor="TaxYES"
                    className="col-12 col-form-label fw-500"
                  >
                    Tax Filer
                  </label>
                  <div className="mt-auto">
                    <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                      <li className="w-50">
                        <input
                          type="radio"
                          id="TaxYES"
                          name="TaxFiler"
                          value="YES"
                          defaultChecked={values.TaxFiler == "YES"}
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
                          name="TaxFiler"
                          value="NO"
                          defaultChecked={values.TaxFiler == "NO"}
                          onChange={handleChange}
                        />
                        <label htmlFor="TaxNO" className="py-1 mb-0">
                          NO
                        </label>
                      </li>
                    </ul>
                    {!values?.TaxFiler && <RequiredFeild />}
                  </div>
                </div>
                <div className="col-12 col-sm-6 my-auto col-lg-4 d-flex flex-column mb-3">
                  <label
                    htmlFor="PoliticalYES"
                    className="col-12 col-form-label fw-500"
                  >
                    Politically Exposed Person
                  </label>
                  <div className="mt-auto">
                    <ul className="text-center combineButton RadioToButton px-0 d-flex justify-content-center">
                      <li className="w-50">
                        <input
                          type="radio"
                          id="PoliticalYES"
                          name="PoliticalExpose"
                          value="YES"
                          defaultChecked={values.PoliticalExpose == "YES"}
                          onChange={handleChange}
                        />
                        <label htmlFor="PoliticalYES" className="py-1 mb-0">
                          YES
                        </label>
                      </li>
                      <li className="w-50">
                        <input
                          type="radio"
                          id="PoliticalNO"
                          name="PoliticalExpose"
                          value="NO"
                          defaultChecked={values.PoliticalExpose == "NO"}
                          onChange={handleChange}
                        />
                        <label htmlFor="PoliticalNO" className="py-1 mb-0">
                          NO
                        </label>
                      </li>
                    </ul>
                    {!values?.PoliticalExpose && <RequiredFeild />}
                  </div>
                </div>

                {values?.TaxFiler === "YES" &&
                  <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
                    <label
                      htmlFor="NTN"
                      className="col-12 col-form-label fw-500"
                    >
                      National Tax Number
                    </label>
                    <input
                      type="text"
                      name="NTN"
                      className="form-control mt-auto"
                      placeholder="12345"
                      value={values.NTN}
                      onChange={handleChange}
                      id="NTN"
                      // maxLength={9}
                      // minLength={9}
                      required
                    />
                  </div>
                }

              </div>

              <hr className="mt-40" />
              <h1 className="fs24 ls4 fw-700 tc-plum mt-40">Bank Mandate</h1>

              <BankMandate

                handleDrctChange={handleDrctChange}
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
                values={values} />

              <hr className="mt-40" />

              <h1 className="fs24 ls4 fw-700 tc-plum mt-40">Foreign Account Tax Compliance Act</h1>

              <ForiegnAccount

                handleDrctChange={handleDrctChange}
                prevStep={prevStep}
                nextStep={nextStep}
                handleChange={handleChange}
                values={values} />

              <BottomNavigation first="Save & Exit" second="Next" Nextdisabled={false} Loading={false} />
            </form>
          </div>
        </div>
      </div >
    </div >
  );
};

export default SourceIncome;
