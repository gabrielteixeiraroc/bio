import '../styles/profileinfo.css'

function Profileinfo() {
    return (
        <div className="containerprofileinfo">

            <div className='bordaprofileinfo'>

            <div className='Cimacardp'>

            <div className="fotoprofileinfo">
                    <img src="/fotopessoa.png" className="fotopessoaperfil"></img>
         
   </div>
            <div className='containernomeefuncao'>
                <div className='primeiralinha'> {/* Modo offline, botão e enviar cartão */}
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" >
                   <path strokeLinecap="round" strokeLinejoin="round"  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>

                    <button className='SalvarnaAgendabutton'> Salvar na Agenda </button>

                    <img src='/icons/credit-card.svg' className='icone-com-filtro'></img>
                    
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
                <img src='/icons/mail.svg' alt='Logo do Email'></img>
                <span>Email</span>
            </button>

             <button>
                <img src='/icons/instagram.svg' alt='Logo do Instagram'></img>
                <span>Instagram</span>
            </button>


            </div> {/* Baixocardp */}

            </div> {/* bordaprofileinfo */}

        </div> 
    )
}

export default Profileinfo