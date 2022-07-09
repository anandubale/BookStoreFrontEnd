import React, { useEffect } from "react";
import './plusminus.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AddOrSub, CheckCart } from "../../service/cartservice";



function AddSubBook(props){
    const listenToPlus= ()=>{

        const obj={
            increase: true
        }

        AddOrSub(props.id.productId,obj).then((res)=>{
            console.log(res);
            props.CheckingCart()
            console.log("book is Added")
        })
        .catch((error)=>{console.log(error)})

    }

    const listenToMinus= ()=>{

        const obj={
            increase: false
        }
        AddOrSub(props.id.productId,obj).then((res)=>{
            console.log(res);
            props.CheckingCart()
            console.log("book is removed")

        })
        .catch((error)=>{console.log(error)})
    }

    useEffect(()=>{
        props.CheckingCart()
    },[])


    return(
        <div className="addSubBookMainBoxx">
            <div className="SubBox">
                <RemoveIcon style={{ paddingTop:"4px" }} onClick={listenToMinus}/>
            </div>
            <div className="MiddleRectBox">
                <span>{ props.id.quantity }</span>
            </div>
            <div className="AddBox">
                <AddIcon style={{ paddingTop:"4px" }} onClick={listenToPlus}/>
            </div>
        </div>
    )
}

export default AddSubBook