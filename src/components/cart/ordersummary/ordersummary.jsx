import React from "react";
import './ordersummary.css'
import Button from '@mui/material/Button';
import InsideBooksBox from "../bookdetails/insidebookbox";
import { PurchaseBook } from "../../../service/cartservice";
import { useHistory } from 'react-router-dom'



function OrderSummary(props) {

    
    const history = useHistory()
 
    const pushToSuccess = () =>{

        history.push('/success')
        history.go(0)
    }

    const purchased=()=>{

        for(var i=0; i<props.booksInCart.length; i++){
            PurchaseBook(props.booksInCart[i]._id).then((res)=>{
                console.log(res)
            })
            .catch((error)=>{console.log(error)})
        }
        pushToSuccess()
    }


    return (
        <div className="orderSummaryMainBox">
            <div className="orderSummaryTextBox">
                <span>Order summery</span>
            </div>
            <div>
                {
                    props.booksInCart.map((InsideBook)=><InsideBooksBox InsideBook={InsideBook} value = {false}/>)
                }
            </div>
            <div className="checkOutBox">
            <Button variant="contained" style={{ width:"100%" }} onClick={purchased}>CHECKOUT</Button>

            </div>
        </div>
    )
}

export default OrderSummary