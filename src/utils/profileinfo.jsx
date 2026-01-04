import '../styles/profileinfo.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function Profileinfo() {
    const { username } = useParams();
    const [ perfil, setPerfil ] = useState('null')

    useEffect(() => {
       
                setPerfil({
                    nome: 'Gabriel Teixeira',
                    descricao: 'Designer com 5 anos de atividade, experiência em Social Media, produção de vídeo, cortes de Reels, etc. Situado em Fortaleza/CE.',
                    email: 'contato.gtrocha@gmail.com'
                });
    }, [username]);

    if (!perfil) return <div style={{color:'white', textAlign:'center', marginTop:'50px'}}>Carregando cartão...</div>;


    return (
        <div className="containerprofileinfo">

            <div className='bordaprofileinfo'>

            <div className='Cimacardp'>

            <div className='containerprofileinfop'>

            <div className="fotoprofileinfo">
                <img src="Foto-de-profile.webp" className="fotopessoaperfil"></img>
                <strong>{perfil.nome}</strong>
                <span>Designer</span>
            </div>

         </div> {/* containerprofileinfop */}

            <div className='containerbotoesesvg'>
                <div className='primeiralinha'> {/* Modo offline, botão e enviar cartão */}
                    {/* <a href='' target='_blank' rel='noopenner noreferrer'>
                    <button className='buttoniconcima'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" >
                   <path strokeLinecap="round" strokeLinejoin="round"  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <span>Modo offline</span>
                    </button>
                    </a> */}

                    <a href='tel:+558599957393' target='_blank' rel='noopenner noreferrer'>
                    <button className='SalvarnaAgendabutton'> Salvar na Agenda </button>
                    </a>

                    {/* <a href='' target='_blank' rel='openner noreferrer'>
                    <button className='buttoniconcima'>
                    <img src='/icons/card.svg'></img>
                    <span>Enviar cartão</span>
                    </button>
                    </a> */}


                </div>

                <div className='segundalinha'> {/* Email, Whatsapp e maps */}


                <a href={`mailto:${perfil.email}`}>
                <button>
                    <img src='/icons/mail.svg' alt='Logo do Email'></img>
                    <span>Gmail</span>
                </button>
                </a>

                <a href='https://wa.me/5585999957393' target='_blank' rel='noopenner noreferrer'>
                <button>
                    <img src='/icons/whatsapp.svg' alt='Logo do Whatsapp'></img>
                    <span>Whatsapp</span>
                </button>
                </a>

                <a href='https://maps.app.goo.gl/8HwSN6yCE74rZGkSA' target='_blank' rel='noopenner noreferrer'>
                <button>
                    <img src='/icons/maps.svg' alt='Logo do Whatsapp'></img>
                    <span>Mapa</span>
                </button>
                </a>


                </div>

            </div>

            </div> {/* Cimacardp */}

            <div className='Mediocardp'>

            <div className='Descricaomediop'>

            </div> {/* Descricaomediop */}
            <div className='barracimadescricao'>

            </div>

            <span style={{padding: 2 + 'em'}}>{perfil.descricao}</span>

            <div className='barrabaixodescricao'>


            </div>

            </div> {/* Mediocardp */}

            <div className='Baixocardp'>
            {/* <a href='' target='_blank' rel='noopener noreferrer'>
             <button>
                <img src='/icons/pix.svg' alt='Logo do Pix'></img>
                <span>Pix</span>
            </button>
            </a> */}


            <a href={`mailto:${perfil.email}`} target='_blank' rel='noopener noreferrer'>
            <button>
                <img src='/icons/mail.svg' alt='Logo do Email'></img>
                <span>Email</span>
            </button>
            </a>

            <a href='https://www.instagram.com/gezao.design' target='_blank' rel='noopener noreferrer'>
             <button>
                <img src='/icons/instagram.svg' alt='Logo do Instagram'></img>
                <span>Instagram</span>
            </button>
            </a>


            <a href='https://wa.me/5585999957393' target='_blank' rel='noopener noreferrer'>
             <button>
                <img src='/icons/whatsapp.svg' alt='Logo do Whatsapp'></img>
                <span>Whatsapp</span>
            </button>
            </a>


            </div> {/* Baixocardp */}

            </div> {/* bordaprofileinfo */}

        </div> 
    )
}

export default Profileinfo