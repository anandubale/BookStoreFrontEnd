export const getBookFromCart= (booksInArray)=>{
    return{
        type: 'BOOKS_IN_ARRAY',
        payLoad: booksInArray
    };
} 