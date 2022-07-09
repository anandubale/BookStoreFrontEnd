import React from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import BookDetails from "../../components/cart/bookdetails/bookdetails";
import CloseOrderDetails from "../../components/cart/ordersummary/closeordersummary";
import OrderSummary from "../../components/cart/ordersummary/ordersummary";
import AddressDetails from "../../components/cart/userdetails/closeaddressdetails";
import UserDetails from "../../components/cart/userdetails/userdetails";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { CheckCart } from "../../service/cartservice";
import {useDispatch,useSelector} from 'react-redux'
import './cartpage.css'
import { getBookFromCart } from "../../components/redux/cartAction";


function CartPage(){

    const dispatch = useDispatch()

    const [ userDetailsPage, setUserDetailsPage ] = React.useState(true)
    const [ ordersummary, setOrdersummary ] = React.useState(true)
    const [booksInCart, setBooksInCart] = React.useState([])



    const ListenToDetails = ()=>{
        setUserDetailsPage(false)
    }


    const ListenToOrder = () =>{
        setOrdersummary(false)
    }   

    React.useEffect(()=>{
        CheckingCart()
        console.log("useeffect run after component render")
    },[])

    const CheckingCart = () =>{
        CheckCart().then((res)=>{
            console.log('res',res);
            setBooksInCart(res.data.data.book)
            dispatch(getBookFromCart(res.data.data.book))
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const AllCartBooks = useSelector((state)=> state.cartReducer);
    console.log("this coming from redux",AllCartBooks.books)
   
    return(
        <div className="cartMainBox">
            <Header/>
            <BookDetails ListenToDetails = {ListenToDetails} booksInCart = {booksInCart} CheckingCart= {CheckingCart}/>

            <div>
            {
                userDetailsPage ? <AddressDetails/> : <UserDetails ListenToOrder={ListenToOrder}/> 
            }
            </div>
            <div>
                {
                    ordersummary ? <CloseOrderDetails/> :  <OrderSummary booksInCart = {booksInCart}/>
                }
            </div>


             <Footer/> 

        </div>
    )
}

export default CartPage
