import React from "react";
import { useEffect } from "react";
import InsideBooksBox from "../../components/cart/bookdetails/insidebookbox";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { CheckWishList } from "../../service/wishlistservice";
import './wishlistpage.css'


function WishlistPage() {

    const [wishlistBooks, setWishListBooks] = React.useState([])

    useEffect(() => {
        CheckWishListBooks()
    }, [])


    const CheckWishListBooks = () => {

        CheckWishList().then((res) => {
            console.log(res);
            setWishListBooks(res.data.data.book)
        })
            .catch((error) => { console.log(error) })
    }



    return (

        <div className="MostMainBox">

            <Header />

            <div className="MainWishListBox">


                <div className="MyWishListTextBox">
                    My Wishlist
                </div>
                <div className="inclusiveBox">

                    <div className="WishListBooks">
                        {
                            wishlistBooks.map((InsideBook) => <InsideBooksBox InsideBook={InsideBook} value={false} />)
                        }
                    </div>

                    <div className="removeWishlistBox">
                        Remove
                    </div>
                </div>

            </div> 
            <Footer />
        </div>





    )
}

export default WishlistPage