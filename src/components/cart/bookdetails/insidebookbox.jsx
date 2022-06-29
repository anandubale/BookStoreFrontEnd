import React, { useEffect } from "react";
import { AddOrSub, RemoveBook } from "../../../service/cartservice";
import AddSubBook from "../../plusminus/plusminus";
import './bookdetails.css'

function InsideBooksBox(props) {

    const [check, setCheck] = React.useState(props.value)


    const ListenToRemove = () => {
        RemoveBook(props.InsideBook._id).then((res) => {
            console.log(res);
            console.log(`book ${props.InsideBook._id} of Name ${props.InsideBook.bookName} is Removed`)
            props.CheckingCart()
        })
            .catch((error) => { console.log(error) })
    }


    console.log("this is props in InsideBookBox", props.InsideBook)

    return (
        <div className="Box">
            <div className="centralBookBox" >
                <div className="bookImgBox"></div>
                <div className="bookInfoBox">
                    <div className="cartBookTitle">{props.InsideBook.bookName}</div>
                    <div className="cartBookAuthor">{props.InsideBook.author}</div>
                    <div className="cartBookPrice">{props.InsideBook.price}</div>
                </div>

            </div>

            <div>
                {
                    check ?
                        (
                            <div className="cartBookPlusMinus" >
                                <div>
                                    <AddSubBook id={props.InsideBook} CheckingCart = {props.CheckingCart}/>
                                </div>
                                <div onClick={ListenToRemove}>Remove</div>
                            </div>

                        ) : 

                        null
                        // <button>Remove</button>

            }
            </div>



            {/* <div className="cartBookPlusMinus" >    
        <div>
            <AddSubBook id={props.InsideBook}/> 
            </div>        
            <div onClick={ListenToRemove}>Remove</div>
        </div>   */}
        </div>
    )
}


export default InsideBooksBox


