import React from "react";
import './successpage.css'

function SuccessPage (){
    return (
        <div className="MainSuccessBox">
            <div className="fireworkMainBox">

            <div className="fireworkBox1"></div>
            <div className="MiddleTextkBox">
                Order Placed Successfully
            </div>
            <div className="fireworkBottomBox"></div>
            </div>
            
            <div className="ConfirmationTextBox">
            hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
            </div>
            <div className="ContactDetails">
                <div className="commonBox">
                    <div className="textvalues">Email Us</div>
                    <div className="values">
                    admin@bookstore.com
                    </div>
                </div>
                <div className="commonBox">
                <div className="textvalues">Contact Us</div>
                    <div className="values">
                    +91 8163475881
                    </div>  
                </div>
                <div className="commonBox">
                <div className="textvalues">Address</div>
                    <div className="values">
                    42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034

                    </div>
                </div>
            </div>
            <div className="ContinueShopping">
                Continue Shoping
            </div>
        </div>

    )
}

export default SuccessPage
