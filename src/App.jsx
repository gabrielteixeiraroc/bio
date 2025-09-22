import './styles/App.css'
import Navbar from './utils/navbar.jsx';
import Card from './utils/card.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Logincard from './utils/logincard.jsx';

function App() {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/login' element={<Logincard/>}/>
        <Route path='/' element={<Card/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App