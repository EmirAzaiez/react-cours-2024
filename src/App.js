import './App.css';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import HomeScreen from './Screens/Home';
import ArticlesScreens from './Screens/ArticlesScreens';
import RandomUserDetailScreen from './Screens/RandomUserDetail';

import { StoreContext, StoreProvider } from "./Providers/Store"
import { useContext } from 'react';

function App() {

    return (
        <StoreProvider>
            <BrowserRouter>
                <Navigation />
                
                <Routes>
                    <Route path='/' element={<HomeScreen />}></Route>
                    <Route path='/articles' element={<ArticlesScreens />}></Route>
                </Routes>

            </BrowserRouter>
        </StoreProvider>
    )

}

function Navigation () {

    const { user } = useContext(StoreContext)

    return (<nav>
        <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/articles"> Articles </Link> </li>
        </ul>
        You're connected as: {user && user.firstname} {user && user.lastname}
    </nav>)
}

export default App;
