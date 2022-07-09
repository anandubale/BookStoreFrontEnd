import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signup.css'
import LeftSideLogo from '../../assets/LeftSideLogo.png'


const nameRegex = /[A-Z]{1}[a-z]{2,}/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

function SignUp(props) {

  
    const [signUpObj, setSignUpObj] = React.useState({ fullName: '', mobileNumber: '', emailID: '', password: '' })
    const [regexObj, setRegexObj] = React.useState({ nameBorder: false, nameHelper: '', phoneBorder: false, phoneHelper: '', emailBorder: false, emailHelper: '', passwordBorder: false, passwordHelper: '' })

    const ListenToSignUp = () => {
        console.log("listening to signup")
        props.ListenToSignUp()
    }


    const takeName = (event) => {
        setSignUpObj(prevState => ({ ...prevState, fullName: event.target.value }))
    }

    const takePhone = (event) => {
        setSignUpObj(prevState => ({ ...prevState, mobileNumber: event.target.value }))
    }

    const takeEmail = (event) => {
        setSignUpObj(prevState => ({ ...prevState, emailID: event.target.value }))

    }

    const takePassword = (event) => {
        setSignUpObj(prevState => ({ ...prevState, password: event.target.value }))
    }


    const submit = () => {
        console.log(signUpObj)

        let nametest = nameRegex.test(signUpObj.fullName);

        let phonetest = phoneRegex.test(signUpObj.mobileNumber);

        let emailtest = emailRegex.test(signUpObj.emailID);

        let passwordtest = passwordRegex.test(signUpObj.password);

        if (nametest === false) {
            setRegexObj(prevState => ({ ...prevState, nameBorder: true, nameHelper: 'Enter valid name' }))
        }
        else if (nametest === true) {
            setRegexObj(prevState => ({ ...prevState, nameBorder: false, nameHelper: '' }))
        }
        if (phonetest === false) {
            setRegexObj(prevState => ({ ...prevState, phoneBorder: true, phoneHelper: 'Enter valid phone number' }))
        }
        else if (phonetest === true) {
            setRegexObj(prevState => ({ ...prevState, phoneBorder: false, phoneHelper: '' }))
        }

        if (emailtest === false) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: 'Enter valid email ID' }))
        }
        else if (emailtest === true) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: '' }))
        }

        if (passwordtest === false) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: 'Enter valid password' }))
        }
        else if (passwordtest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: '' }))
        }
        if (nametest === true && phonetest === true && emailtest === true && passwordtest === true) {
            SignUp(signUpObj).then((res) => {
                console.log(res);
            })
                .catch((error) => { console.log(error) })
        }
    }



    return (
        <div className="MainSignUpDiv">
            {/* <div className="TopButtons">

                <div className="loginTitle">
                    <Button variant="text" style={{ width: '100%', color: '#878787' }} onClick={ListenToSignUp}>Login</Button>
                </div>
                <div className="signUpLogoBox">
                    <Button variant="text" style={{ width: '100%', color: '#0A0102' }}>SignUp</Button>
                </div>

            </div> */}
            <div className="FullNameBox">
                <TextField id="outlined-basic" error={regexObj.nameBorder} helperText={regexObj.nameHelper} label="Full Name" variant="outlined" style={{ width: '100%' }} size="small" onChange={takeName} />
            </div>
            <div className="EmailBox">
                <TextField id="outlined-basic" error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Email Id" variant="outlined" style={{ width: '100%' }} size="small" onChange={takeEmail} />
            </div>
            <div className="PasswordBox">
                <TextField id="outlined-basic" error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} label="Password" variant="outlined" style={{ width: '100%' }} size="small" onChange={takePassword}  />
            </div>
            <div className="MobileNoBox">
                <TextField id="outlined-basic" error={regexObj.phoneBorder} helperText={regexObj.phoneHelper} label="Mobile Number" variant="outlined" style={{ width: '100%' }} size="small" onChange={takePhone}  />
            </div>
            <div className="SignUPButtonBox">
                <Button variant="contained" style={{ width: "100%", backgroundColor: "#A03037" }} onClick={submit}>SignUp</Button>
            </div>
        </div>
    )
}

export default SignUp