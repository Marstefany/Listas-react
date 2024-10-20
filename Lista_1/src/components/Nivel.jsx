function Nivel (promp){
    return(
    <h1> {promp.nivel === "iniciante" ? "Bem vindo iniciante" : promp.nivel === "intermediario" ? "Você está progredindo!" : promp.nivel === "avançado" ? "Parabens especialista" : "Você não é nada ainda" } </h1>
    )
}
export default Nivel