import './App.css';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import HomeScreen from './Screens/Home';
import RandomUserScreen from './Screens/RandomUser';

function App() {

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/randomuser"> Randomuser </Link> </li>
                </ul>
            </nav>
            
            <Routes>
                <Route path='/' element={<HomeScreen />}></Route>
                <Route path='/randomuser' element={<RandomUserScreen />}></Route>
            </Routes>

        </BrowserRouter>
    )

}

export default App;
