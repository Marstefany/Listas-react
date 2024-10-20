function Nota (prop) {
    if (prop.nota >= 90) {
        return(
            <h1>Excelente</h1>
        )
    }else if (prop.nota >= 70 ) {
        return(
            <h1>Muito bem</h1>
        )
    }else{
        return(
            <h1>Precisa melhorar</h1>
        )
    }
}
export default Nota