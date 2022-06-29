import React from "react";
import './dashboard.css'
import { getBooks } from "../../service/dataservice";
import Header from "../../components/header/header";
import Books from "../../components/book/book";
import Footer from "../../components/footer/footer";
import SelectedBook from "../../components/SelectedBook/selectedbook";
import CartPage from "../cartpage/cartpage";
import { CheckCart } from "../../service/cartservice";
import Pagination from '@mui/material/Pagination';


function DashBoard() {

    const [listOfBooks, setListOfBooks] = React.useState([])
    const [dashboardView, setDashboardView] = React.useState(true)
    const [selectedBook, setSelectedBook] = React.useState({})
    const [booksInCart, setBooksInCart] = React.useState([])


    const listenToBookFunction = (book) => {
        setSelectedBook(book)
        setDashboardView(false)

    }



    React.useEffect(() => {
        getAllBooks()
        CheckBooksInsideCart()

        console.log("get note get called in use Effect")
    }, [])

    const CheckBooksInsideCart = () => {
        CheckCart().then((res) => {
            console.log(res)
            console.log(res.data.data.book)
            console.log("api is get hitted")
            setBooksInCart(res.data.data.book)
        })
    }


    const getAllBooks = () => {
        getBooks().then((res) => {
            console.log(res);
            setListOfBooks(res.data.data)
        })
            .catch((error) => { console.log(error) })
    }



    return (
        <div>
            <Header />

            <div className="AllBooksFlexBox">
                {
                    dashboardView ? listOfBooks.map((book) => <Books book={book} listenToBookFunction={listenToBookFunction} />) : <SelectedBook selectedBook={selectedBook} booksInCart={booksInCart} CheckBooksInsideCart={CheckBooksInsideCart} />
                }
                {/* i have given state so how to update it */}
            </div>
            <div className="Pagination">
                <Pagination count={10} variant="outlined"   />
            </div>
            <Footer />
        </div>
    )
}

export default DashBoard