import React from "react";
import './header.css'
import  SvgBook  from '../../assets/education.svg'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CheckCart } from "../../service/cartservice";
import { useHistory } from 'react-router-dom'



function Header(props){

    const history = useHistory()
 
    const listenToCart = () =>{

        history.push('/cart')
        history.go(0)
    }
    const TaketoDashBoard = () =>{

        history.push('/dashboard')
        history.go(0)
    }

    

    const listenToHeaderFunction = () =>{
        props.listenToHeaderFunction()
    }   
    
    return( 
        <div className="MainHeaderBox">
            <div className="BookLogo">
                <img src={SvgBook} alt="AppLogo" onClick={TaketoDashBoard}/>
            </div>
            <div className="AppName" >
                <span>Bookstore</span>
            </div>
            <div className="SearchBar">
                <div className="SearchIcon">
                <SearchIcon fontSize="10" />
                </div>
                <div className="InputFields">
                    <input type="text" placeholder="Search..."/>
                </div>

            </div>
            <div className="Profile">
                <div className="ProfileLogo">
                    <PermIdentityIcon style={{ color: 'white' }}/>
                </div>
                <div className="ProfileText">
                    <span>Profile</span>
                </div>
            </div>
            <div className="Cart">
                <div className="CartLogo">
                <ShoppingCartOutlinedIcon style={{ color: 'white' }} onClick = {listenToCart}/>
                </div>
                <div className="CartText">
                    <span>Cart</span>
                </div>
            </div>
        </div>

    )
}

export default Header