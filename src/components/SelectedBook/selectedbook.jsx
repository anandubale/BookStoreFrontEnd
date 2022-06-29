import React, { useEffect } from "react";
import './selectedbook.css'
import Button from '@mui/material/Button';
import rating from '../../assets/rating.png'
import { AddToCart, AddToWishList } from "../../service/cartservice";
import AddSubBook from "../plusminus/plusminus";
import CartPage from "../../pages/cartpage/cartpage";
import FavoriteIcon from '@mui/icons-material/Favorite';

function SelectedBook (props) {

    // const [ plusMinus, setPlusMinus ] = React.useState(true)
    const [ exist, setExist ] = React.useState(true)
    const [bookFromCart,setBookFromCart] = React.useState({})


    console.log("Alll cart books",props.booksInCart)
    
    console.log("selected Book",props.selectedBook)
    const listenToCart = () => {

        AddToCart(props.selectedBook._id).then((res)=>{
            console.log(res);
            // setPlusMinus(false)
            props.CheckBooksInsideCart()
            console.log("props.selectedBook.quantity",props.selectedBook.quantity)

        })
        .catch((error)=>{console.log(error)})

        
    }

    useEffect(()=>{

        for(var i=0; i<props.booksInCart.length; i++){
            if(props.selectedBook._id === props.booksInCart[i].productId){
                console.log("this book is in CartPage", props.booksInCart[i])
                setExist(false)
                setBookFromCart(props.booksInCart[i])
                props.CheckBooksInsideCart()
                break
            }
            else{
                console.log("this book is not in cart")
            }
        }

    },[])
    const listenToWishList = () =>{
        AddToWishList(props.selectedBook._id).then((res)=>{
            console.log(res)})
            .catch((error)=>{console.log(error)})
        }
        
    return (
        <div className="MainBookBox1">

            <div className="leftSideBox">
                <div className="bookImg">
                    <div className="insideBlock">
                    {props.selectedBook.bookImage}
                    </div>
                </div>
                <div className="buttons">
                    <div className="addToCart">

                    {/* <Button variant="contained"  style ={{width: "170px", backgroundColor:'#A03037',marginRight: "10px"}} onClick={listenToCart}>ADD TO BAG</Button>  */}

                        {
                            exist ? <Button variant="contained"  style ={{width: "170px", backgroundColor:'#A03037',marginRight: "10px"}} onClick={listenToCart}>ADD TO BAG</Button> : <AddSubBook id={bookFromCart} CheckingCart={props.CheckBooksInsideCart}/>
                        }                    
                    </div>


                    <div className="wishList">
                    <Button variant="contained"  style ={{width: '100%', backgroundColor:'#373434'}} onClick={listenToWishList}><FavoriteIcon/>&nbsp;&nbsp;WISHLIST</Button>

                    </div>
                </div>
            </div>
            <div className="rightSideBox">
                <div className="BoookTitle">{props.selectedBook.bookName}</div>
                <div className="BookAuthor2">by {props.selectedBook.author}</div>
                <div className="BookRating">4.5</div>
                <div className="BookPrice">Rs. {props.selectedBook.discountPrice} <span><strike>Rs. {props.selectedBook.price}</strike></span></div>
                <div className="BookDecreption">
                    <div className="BookDecreption1">Book Details: -</div>
                    <p>
                        {props.selectedBook.description}
                    </p>
                </div>
                <div className="CustomerFeekBack">
                    <div>Customer Feedback</div>
                </div>
                <div className="Rating">
                    <div>Overall rating</div>
                    <div><img src={rating} alt="rating starts" style={{ width: "70px", marginTop : "0"}}/></div>
                </div>
            </div>
        </div>

    )
}


export default SelectedBook