import IPSForm from "./Routes/Form/IPSForm";
import SignUp from "./Routes/Account/SignUp";
import Login from "./Routes/Account/Login";
import ProtectedRoutes from "../middleWare/ProtectedRouting/ProtectedRute";
import { Routes, Switch, Route, Navigate } from 'react-router-dom'
import SentEmail from "./Routes/Account/SentEmail";
import EmailVerified from "./Routes/Account/EmailVerified";
import ForgotPass from "./Routes/Account/ForgotPass";
import IPSFormSubmitted from "./Routes/Form/FormSubmitted";
import Submission from "./Routes/Account/Submission";
import ResetCredentials from "./Routes/Account/ResetCredentials";
import PasswordReset from "./Routes/Account/PasswordReset";
import PasswordResetForm from "./Routes/Account/PasswordResetForm";
import AccountReview from "./Routes/Account/AccountReview";



const MainComponent = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<SignUp />} />
            <Route path='/SentEmail' element={<SentEmail />} />
            <Route path='/EmailVerified' element={<EmailVerified />} />
            <Route path='/ForgotPass' element={<ForgotPass />} />
            <Route path='/presubmission' element={<Submission />} />
            <Route path='/accountReview' element={<AccountReview />} />

            <Route path='/ResetCredentials' element={<ResetCredentials />} />
            <Route path='/passwordReset' element={<PasswordReset />} />
            <Route path='/passwordResetForm' element={<PasswordResetForm />} />




            <Route element={<ProtectedRoutes />}>
                <Route path="/IPSForm" element={<IPSForm />} />
                <Route path="/FormSubmitted" element={<IPSFormSubmitted />} />
            </Route>
            <Route
                path="*"
                element={<Navigate to="/IPSForm" replace />}
            />
        </Routes>
    );
}

export default MainComponent;