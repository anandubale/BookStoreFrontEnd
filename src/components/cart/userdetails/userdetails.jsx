import React, { useEffect } from "react";
import './userdetails.css'
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { RegisterUser } from "../../../service/cartservice";



function UserDetails(props) {


    const [showBtn,setShowBtn] = React.useState(true)


    const [userdetails, setUserDetails] = React.useState({name: '', phoneNumber: '', fullAddress: '', city:'', state: '', addressType:'', UserID:'' })

    // const inputRef = React.useRef(null)

    const takeFullName = (event) =>{
        setUserDetails({...userdetails, name: event.target.value})
    }  

    const takePhoneNumber = (event) =>{
        setUserDetails({...userdetails, phoneNumber: event.target.value})
    }  

    const takeAddress = (event) =>{
        setUserDetails({...userdetails, fullAddress: event.target.value})
    }  

    const takeCity = (event) =>{
        setUserDetails({...userdetails, city: event.target.value})
    }  

    const takeState = (event) =>{
        setUserDetails({...userdetails, state: event.target.value})
    }  

    const takeAddressType = (event) =>{
        setUserDetails({...userdetails, addressType: event.target.value})
    }  
   
    const ListenToOrderSummary = () => {
        console.log(userdetails.name.length)
        if(userdetails.name.length != 0){
            RegisterUser(userdetails).then((res)=>{
                console.log(res);  
                props.ListenToOrder();
                setShowBtn()
              
            })
            .catch((error)=>{console.log(error)})
        }

    }

    // useEffect(()=>{
    //     console.log("focus",inputRef)
        
    // },[])

    return (
        <div className="userDetailsMainBox">
            <div className="custDetailTextBox">
                <span>Customer Details</span>
            </div>
            <div className="NamePhNoBox">
                <div className="NameBox">
                    <div className="smallTextBox" >Full Name</div>
                    <div className="FNinputBox"><OutlinedInput style={{ width: "100%", height: "100%", borderRadius: "0px" }} onChange={takeFullName} autoFocus/></div>

                </div>
                <div className="PhoneBox">

                    <div className="smallTextBox" >Mobile Number</div>
                    <div className="FNinputBox"><OutlinedInput style={{ width: "100%", height: "100%", borderRadius: "0px" }} onChange={takePhoneNumber}/></div>
                </div>
            </div>

            <div className="AddressBox">
                <div className="smallTextBox">Address</div>
                <div className="addressinputBox"><TextField multiline rows={2} style={{ width: "100%", height: "100%", borderRadius: "0px" }} onChange={takeAddress}/></div>
            </div>

            <div className="LocationDetailsBox">
                <div className="cityBox">
                    <div className="smallTextBox">city/town</div>
                    <div className="FNinputBox"><OutlinedInput style={{ width: "100%", height: "100%", borderRadius: "0px" }} onChange={takeCity}/></div>
                </div>
                <div className="stateBox">
                    <div className="smallTextBox">State</div>
                    <div className="FNinputBox"><OutlinedInput style={{ width: "100%", height: "100%", borderRadius: "0px" }} onChange={takeState}/></div>
                </div>
            </div>
            <div className="custTypeDetailsBox">
                <div className="smallTextBox">Type</div>
                <div className="radioInputBoxes">
                    <RadioGroup row onChange={takeAddressType}>
                        <FormControlLabel value="Home" control={<Radio size="small"/>} label="Home" />
                        <FormControlLabel value="Work" control={<Radio size="small"/>} label="Work" />
                        <FormControlLabel value="Other" control={<Radio size="small"/>} label="Other" />
                    </RadioGroup>
                </div>
            </div>


            <div className="buttonBox">
            {
                showBtn ? <Button variant="contained" style={{ width: "100%" }} onClick={ListenToOrderSummary}>CONTINUE</Button> : null
            }
                

            </div>
        </div>

    )
}

export default UserDetails