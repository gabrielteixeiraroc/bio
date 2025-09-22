import '../styles/logincard.css'

function Logincard() {

    return (
        <div className="Containercardlogin">
        <div className="bordacardlogin">
        <div className="containerlogin">
        <form onChange={(e) => {e.defaultPrevented()}}>
        <input placeholder="Digite seu email" className="emaillogin" type='email'></input>
        <input placeholder="Digite sua senha" className="senhalogin" type='password'></input>
        <button type="submit" className="botaologin">login</button>
        <button type='submit' className="Ess">Esqueceu sua senha?</button>
        </form>
        </div> {/* Container login */}
        </div> {/* Bordacardlogin */}
        </div>
    )
}

export default Logincard