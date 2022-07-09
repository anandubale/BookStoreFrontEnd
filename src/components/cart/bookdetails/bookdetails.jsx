import React from "react";
import './bookdetails.css'
import Button from '@mui/material/Button';
import InsideBooksBox from "./insidebookbox";
import { useSelector } from 'react-redux'

function BookDetails(props){

    const [showBtn,setShowBtn] = React.useState(true)


    console.log("this is props in Bookdetails",props)

    const ListenToBookDetails = () =>{
        props.ListenToDetails()
        setShowBtn()

    }

    const AllCartBooks = useSelector((state)=> state.cartReducer);
    const cartBooks = AllCartBooks.books
    console.log('this is from Redux',cartBooks)
    console.log('this is from props',props.booksInCart)

   return(
    <div className="MainBookDetailsBox">
        <div className="myCartTextBox"><span>My cart</span></div>
            <div>
                {
                    props.booksInCart.map((InsideBook)=><InsideBooksBox InsideBook={InsideBook} value = {true} CheckingCart = {props.CheckingCart}/>)
                    // cartBooks.map((InsideBook)=><InsideBooksBox InsideBook={InsideBook} value = {true} CheckingCart = {props.CheckingCart}/>)
                }
            </div>

            <div className="placeOrderBox">
                {
                    showBtn ? <Button variant="contained" style={{ width:"100%" }} onClick={ListenToBookDetails}>PLACE ORDER</Button> : null

                }
        </div>
    </div>
   ) 
}


export default BookDetails


