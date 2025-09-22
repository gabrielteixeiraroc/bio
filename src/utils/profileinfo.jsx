import '../styles/profileinfo.css'
import Mailicon from '../assets/icons/mail.svg?react'

function Profileinfo() {
    return (
        <div className="containerprofileinfo">

            <div className='bordaprofileinfo'>

            <div className='Cimacardp'>

            <div className="fotoprofileinfo">
                    <img src="//fotopessoa.png" className="fotopessoaperfil"></img>
         
   </div>
            <div className='containernomeefuncao'>
                <div className='primeiralinha'> {/* Modo offline, botão e enviar cartão */}
                    <button className='SalvarnaAgendabutton'> Salvar na Agenda </button>

                </div>

                <div className='segundalinha'> {/* Email, Whatsapp e maps */}
                </div>

            </div>

            </div> {/* Cimacardp */}

            <div className='Mediocardp'>

            <div className='Descricaomediop'>

            </div> {/* Descricaomediop */}

            </div> {/* Mediocardp */}

            <div className='Baixocardp'>
            <button>
                <span>Email</span>
            </button>


            </div> {/* Baixocardp */}

            </div> {/* bordaprofileinfo */}

        </div> 
    )
}

export default Profileinfo