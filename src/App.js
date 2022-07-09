import './App.css';
import AddSubBook from './components/plusminus/plusminus';
import Router from './components/router/router';
import SuccessPage from './components/successpage/successpage';
import WishlistPage from './pages/wishlistpage.jsx/wishlistpage';
import { Provider } from 'react-redux/es/exports';
import { store } from './components/redux/store';


function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Router/>
    </Provider>
  
   </div>
  );
}

export default App;
