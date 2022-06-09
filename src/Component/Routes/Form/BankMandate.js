import { Select } from 'antd';



const { Option } = Select;

const BankMandate = ({
    handleDrctChange,
    prevStep,
    nextStep,
    handleChange,
    values,
}) => {

    return (

        <div className="row mt-40">

            <div className="col-12 col-sm-6 col-lg-4  d-flex flex-column mb-3">
                <label
                    htmlFor="BankTitle"
                    className="col-12 col-form-label fw-500"
                >
                    Bank Title
                </label>
                <input
                    type="text"
                    name="BankTitle"
                    className="form-control mt-auto"
                    placeholder="Bank Title"
                    value={values.BankTitle}
                    onChange={handleChange}
                    id="BankTitle"
                    required
                />
            </div>

            <div className="col-12  col-sm-6 col-lg-4 d-flex flex-column mb-3">
                <label
                    htmlFor="BankNum"
                    className="col-12 col-form-label fw-500"
                >
                    Bank Account Number
                </label>
                <input
                    type="text"
                    name="BankNum"
                    className="form-control mt-auto"
                    placeholder="Account Number"
                    value={values.BankNum}
                    onChange={handleChange}
                    id="BankNum"
                    maxLength="24"
                    required
                />
            </div>
            {/* <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column mb-3">
            <label
                htmlFor="BankBranch"
                className="col-12 col-form-label fw-500"
            >
                Bank and Branch Name with Code
            </label>
            <input
                type="text"
                name="BankBranch"
                className="form-control mt-auto"
                placeholder="Bank Branch"
                value={values.BankBranch}
                onChange={handleChange}
                id="BankBranch"
                required
            />
        </div> */}
            <div className="col-12 col-lg-8  d-flex flex-column mb-3">
                <label
                    htmlFor="BankAddress"
                    className="col-12 col-form-label fw-500"
                >
                    Bank Branch Address Name
                </label>
                <input
                    type="text"
                    name="BankAddress"
                    className="form-control mt-auto"
                    placeholder="Address"
                    value={values.BankAddress}
                    onChange={handleChange}
                    id="BankAddress"
                    required
                />
            </div>


        </div>
    );
};

export default BankMandate;
