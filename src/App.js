import './App.css';
import AddSubBook from './components/plusminus/plusminus';
import Router from './components/router/router';
import SuccessPage from './components/successpage/successpage';
import WishlistPage from './pages/wishlistpage.jsx/wishlistpage';

function App() {
  return (
    <div className="App">
    <Router/>
    {/* <SuccessPage/> */}
    {/* <WishListComponent/> */}
    {/* <WishlistPage/> */}
   </div>
  );
}

export default App;
