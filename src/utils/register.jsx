import '../styles/register.css'

function Registercard() {

    return (
        <div className="containercardregister">
        <div className="bordacardregister">
        <div className="containerregister">
        <form onChange={(e) => {e.preventDefault()}}>
        <input placeholder="Digite seu email" className="emaillogin" type='email'></input>
        <input placeholder="Digite sua senha" className="senhalogin" type='password'></input>
        <button type="submit" className="botaoregister">Registrar</button>
        <button type='submit' className="Ess">Esqueceu sua senha?</button>
        </form>
        </div> {/* Container login */}
        </div> {/* Bordacardlogin */}
        </div>
    )
}

export default Registercard