import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartPage from "../../pages/cartpage/cartpage";
import DashBoard from "../../pages/dashboard/dashboard";
import SignUpLoginUI from "../../pages/signUp_Login/signUp_Login";
import WishlistPage from "../../pages/wishlistpage.jsx/wishlistpage";
import SuccessPage from "../successpage/successpage";


function Router(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route  exact path = "/" component={SignUpLoginUI}/>
                    <Route  exact path = "/dashboard" component={DashBoard}/>
                    <Route  exact path = "/cart" component={CartPage}/>
                    <Route  exact path = "/wishlist" component={WishlistPage}/>
                    <Route  exact path = "/success" component={SuccessPage}/>
                    
                </Switch>

            </BrowserRouter>
        </div>
    )
}

export default Router