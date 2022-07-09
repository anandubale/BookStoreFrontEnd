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
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { getBookFromCart } from "../../components/redux/cartAction";


function DashBoard() {

    const dispatch = useDispatch()
    const countOfBook = 8;

    const [listOfBooks, setListOfBooks] = React.useState([])
    const [dashboardView, setDashboardView] = React.useState(true)
    const [selectedBook, setSelectedBook] = React.useState({})
    const [booksInCart, setBooksInCart] = React.useState([])
    const [page, setPage] = React.useState(1)
    const [pagination, setPagination] = React.useState({
        count: 0,
        from: 0,
        to: countOfBook
    })
    const [pageNumber, setPageNumber] = React.useState([])
    const [input, setInput] = React.useState('')
    const [serchedBook, setSearchedBook] = React.useState(true)
    const [foundBook, setFoundBook] = React.useState([])


    const listenToBookFunction = (book) => {
        setSelectedBook(book)
        setDashboardView(false)

    }

    React.useEffect(() => {
        getAllBooks()
        CheckBooksInsideCart()

        console.log("get note get called in use Effect")
    }, [pagination.from, pagination.to])

    const CheckBooksInsideCart = () => {
        console.log("loading..")
        CheckCart().then((res) => {
            console.log(res)
            console.log(res.data.data.book)
            console.log("api is get hitted")
            setBooksInCart(res.data.data.book)
            dispatch(getBookFromCart(res.data.data.book))
        })
    }


    const getAllBooks = () => {

        getBooks({ from: pagination.from, to: pagination.to }).then((res) => {
            console.log("Responce", res);
            setListOfBooks(res.data.data)
            setPagination({ ...pagination, count: res.data })
        })
            .catch((error) => { console.log(error) })
    }


    const paginationMethod = (event, page) => {
        const from = (page - 1) * countOfBook  //0  //8
        const to = (page - 1) * countOfBook + countOfBook  //8  //16
        setPagination({ ...pagination, from: from, to: to })
        setPage(page)
    }

    useEffect(() => {

    }, [])

    const pageCount = (pagination.count)
    const calculatePagination = () => {

        const arr = [];
        for (let i = 1; i <= Math.ceil(pageCount.data.length / countOfBook); i++) {
            arr.push(i)
        }
        setPageNumber(arr)
    }

    const TakeInput = (event) => {
        setInput(event.target.value)
        console.log(input)
        searchBook()
    }

    const searchBook = () => {

        for (let i = 0; i < listOfBooks.length; i++) {
            if (listOfBooks[i].bookName === input) {
                console.log(listOfBooks[i])
                console.log("done")
                setFoundBook(listOfBooks[i])
                setSearchedBook(false)
                break
            }
            else {
                console.log(`${listOfBooks[i].bookName} === ${input}`)
            }
        }
    }





    return (
        <div>
            <Header TakeInput={TakeInput} />

            <div>
                {
                    serchedBook ?

                        (
                            <div className="AllBooksFlexBox">
                                {
                                    dashboardView
                                        ? listOfBooks
                                            .slice(pagination.from, pagination.to)
                                            .map((book) => <Books book={book} listenToBookFunction={listenToBookFunction} />)
                                        : <SelectedBook selectedBook={selectedBook} booksInCart={booksInCart} CheckBooksInsideCart={CheckBooksInsideCart} />
                                }
                            </div>

                        )

                        :

                        (
                            dashboardView
                                ?
                                (
                                    <div className="AllBooksFlexBox">
                                        <Books book={foundBook} listenToBookFunction={listenToBookFunction} />
                                    </div>
                                )
                                :
                                (<div className="AllBooksFlexBox">
                                    <SelectedBook selectedBook={selectedBook} booksInCart={booksInCart} CheckBooksInsideCart={CheckBooksInsideCart} />

                                </div>
                                )
                        )
                }
            </div>

            <div className="Pagination">
                <Pagination count={3} variant="outlined" page={page} onChange={paginationMethod} />
            </div>
            <Footer />
        </div>
    )
}

export default DashBoard