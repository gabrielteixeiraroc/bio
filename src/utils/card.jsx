import '../styles/card.css'
import Navbar from './navbar';
import Profileinfo from "./profileinfo";

function Card() {
    return (

    <div className="containercard">
        <div className="bordacard">

        <div className="cimacard">

        <div className="profileinfocard">
        <Profileinfo/>
        </div> {/* profiloinfocard */}

        </div> {/* cimacard */}

        <div className="baixocard">
        </div> {/* baixocard */}

        </div> {/* bordacard */}

        </div>

    )
}

export default Card