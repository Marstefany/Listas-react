function Botao (prop){
    return(
        <button> {prop.logado ? "entrar" : "sair"} </button>
    )
}
export default Botao