import { useState, useEffect } from 'react';
import Logo from '../../../Assets/Img/Logo.svg'
import { message, Modal } from 'antd'
import Account from '../../../API/Account'
import Auth from '../../../middleWare/Auth/Auth'
import axios from 'axios'
import Confirmed from '../../../Assets/Img/Confirmed.png'
import { Navigate, useNavigate } from 'react-router-dom';


const ForgotPass = () => {
    const history = useNavigate();

    const [Error, setError] = useState('')

    const [user, setUser] = useState({
        email: "",
        password: "",
        path: '/Login',
        sendingReq: false,
    })

    useEffect(() => {

        if (Auth.isAuthenticated()) {
            history(user.path)
        }
        if (window.history.state) {
            console.log(window.history)
            if (window.history.state.state) {
                // Because we are passing props from both side from link and Redirect so redirect can be get from window.history

                setUser({ ...user, path: window.history.state.state.from.pathname })
            }
        }

    }, [])


    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const onLogin = async (e) => {
        setUser({ ...user, sendingReq: true })
        e.preventDefault()
        const res = Account.LoginApi(user, setError)
        res.then((value) => {
            setUser({ ...user, sendingReq: false })
            console.log('Login', value)
            if (value?.data?.success) {
                localStorage.setItem('x-auth-token', value.data.token)
                localStorage.setItem('uid', value.data.uid)
                localStorage.setItem('loggedIn', 'true')
                // localStorage.setItem('Detail', JSON.stringify(value.data.user))
                Auth.login()
                axios.defaults.headers =
                {
                    'x-auth-token': value.data.token
                }
                goToDashboard()
            } else {
                message.error(value?.response?.data?.status)
            }
        })
    }


    const goToDashboard = () => {
        history(user.path)
    }

    return (
        <div className="main">
            {console.log({ user })}
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="ModalForm bg-white p-3">
                        <img className="logo d-block mx-auto" src={Logo} alt="Logo" />
                        <p className="tc-plum tf-light fw-700 fs45 mt-3">Reset Your Password</p>
                        <p className="tc-grey  fw-600 fs30 mt-3">Enter your email and we'll send you instructions
                            on how to reset your password.</p>
                        <form onSubmit={onLogin}>
                            <div>
                                <input type="email"
                                    className="email w-100 fs30 mt-3 px-1 py-3 lghtBdr"
                                    name="email"
                                    required
                                    placeholder="Email Address"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                                <button
                                    className="filledBtn mt-5 bg-blue text-white w-100 py-3"
                                    type="submit">

                                    {user.sendingReq ? (
                                        // <div className="spinner-border text-light" role="status">
                                        //     <span className="visually-hidden">Loading...</span>
                                        // </div>
                                        <div className="whitespinner">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                    ) : (
                                        <>Submit</>
                                    )}

                                </button>
                                <p className="mt-1 tc-err fs30 fw-600" >{Error}</p>
                            </div>
                        </form>
                        <hr className="mt-3" />
                        <div className="d-flex justify-content-center">
                            <p className="text-center tc-grey mt-3 px-1" >Go back to </p>
                            <p className="text-center tc-blue mt-3 px-1 cursorPointer" onClick={history('/login')} > Sign In.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPass;