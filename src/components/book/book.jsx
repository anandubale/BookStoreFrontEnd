import React from "react";
import './book.css'

function Books(props){


    const listenToBookFunction = (book)=>{
        props.listenToBookFunction(book)
    } 

    return(

        <div className="MainBookBox">   
            <div className="BookImgOutsideBox">
                <div className="BookImgInsideBox" onClick={()=>listenToBookFunction(props.book)}>
                    <img src={props.book.bookImage} alt=""/>
                </div>
            </div>
            <div className="BookName">
                {props.book.bookName}
            </div>
            <div className="BookAuthor">
            {props.book.author}
            </div>
            <div className="BookDiscountPrice">{props.book.price}</div>
           
        </div>
    )
}

export default Books