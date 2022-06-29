import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp.jsx/signup";
import './signUp_Login.css'
import LeftSideLogo from '../../assets/LeftSideLogo.png'


function SignUpLoginUI(){

    const [view ,setView] = React.useState(false)

    const listenToSignIn= ()=>{
        setView(true)
    }

    const listenToSignUp = ()  =>{
        setView(false)
    }

    return(
      
       <>
        <Box style={{ width: '100vw',height: '100vh',backgroundColor:'gray', display: 'flex'}}>
            <Box className="MainPageContainer">
                <Box >
                    <img src={LeftSideLogo} alt="Img" className="LeftImageBox"/>
                </Box>
                <Box >
                    <h3 className="LeftImageTextBox">Online Book Shoping</h3>
                </Box>
            </Box>
            <Card ClassName="SignInSignUp">
                <CardContent>
                
                    <Typography className="switchButtons">
                        <Button onClick={listenToSignIn}>Login</Button>
                        <Button onClick={listenToSignUp}>Signup</Button>
                    </Typography>
                    {
                        view ? <SignIn/> : <SignUp/>
                    }
                </CardContent>


            </Card>
            {/* <div>
            {
                view ? <SignIn listenToSignIn={ listenToSignIn }/> : <SignUp ListenToSignUp = {listenToSignUp}/>
            }
            </div> */}
        </Box>
       </>
    )
}

export default SignUpLoginUI