function Idade (prop) {
    if (prop.idade >= 18) {
        return(
            <h1>Você é maior de idade</h1>
        )
    }else{
        return(
            <h1>Você é menor de idade</h1>
        )
    }
}
export default Idade 