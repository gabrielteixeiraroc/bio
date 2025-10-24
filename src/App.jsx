import './styles/App.css'
import Card from './utils/card.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Logincard from './utils/logincard.jsx';
import Registercard from './utils/register.jsx';

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/register' element={<Registercard/>}/>
        <Route path='/login' element={<Logincard/>}/>
        <Route path='/' element={<Card/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App