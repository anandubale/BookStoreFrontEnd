import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signIn.css'
import LeftSideLogo from '../../assets/LeftSideLogo.png'
import { login } from '../../service/userservice'


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function SignIn(props) {

    const ListenToSignIn = ()=>{
        console.log("listening to signup")
        props.listenToSignIn()
      }

    const [signInObj, setSignInObj] = React.useState({ emailID: '', password: '' })
    const [regexObj, setRegexObj] = React.useState({ emailBorder: false, emailHelper: '', passwordBorder: false, passwordHelper: '' })

    const takeEmail = (event) => {
        setSignInObj(prevState => ({ ...prevState, emailID: event.target.value }))

    }

    const takePassword = (event) => {
        setSignInObj(prevState => ({ ...prevState, password: event.target.value }))
    }

    const submit = () => {
        console.log(signInObj);
        let emailtest = emailRegex.test(signInObj.emailID);

        let passwordtest = passwordRegex.test(signInObj.password);

        if (emailtest === false) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: 'Enter valid email' }))
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
        if (emailtest === true && passwordtest === true) {

            login(signInObj)
                .then((res) => {
                    console.log(res);
                    localStorage.setItem('token', 'Bearer ' + res.data.data)
                })
                .catch((error) => { console.log(error) })

        }

    }


    return (


        <div className="MainDiv">

            <div className="rightPopUp">
                {/* <div className="TopButtons">

                    <div className="loginTitle">
                        <Button variant="text" style={{ width: '100%', color: '#0A0102' }} >Login</Button>
                    </div>
                    <div className="signUpLogoBox">
                        <Button variant="text" style={{ width: '100%', color: '#878787' }} onClick={ListenToSignIn}>SignUp</Button>
                    </div>

                </div> */}


                <div className="emailBox">
                    <TextField id="outlined-basic" error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Email Id" variant="outlined" style={{ width: '100%' }} size="small" onChange={takeEmail} />
                </div>
                <div className="passBox">
                    <TextField id="outlined-basic" error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} label="Password" variant="outlined" style={{ width: '100%' }} size="small" onChange={takePassword} />
                </div>
                <div className="LoginButtonBox">
                    <Button variant="contained" style={{ width: '100%', backgroundColor: '#A03037' }} onClick={submit}>Login</Button>
                </div>

                <div className="orBox">
                    <span>OR</span>
                </div>

                <div className="bottomBox">
                    <div className="faceBook">
                        <Button variant="contained" style={{ width: '100%', backgroundColor: '#4266B2' }}>FaceBook</Button>
                    </div>
                    <div className="google">
                        <Button variant="contained" style={{ width: '100%', backgroundColor: '#F5F5F5', color: '#0A0102' }}>Goggle</Button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn


