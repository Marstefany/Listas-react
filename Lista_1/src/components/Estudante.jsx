function Estudante (props){
   if (props.Estudante){
    return(
        <h1>Você é um Estudante</h1>
    )
   }else{
    return(
        <h1>Você não é um estudante</h1>
    )
   }
}
export default Estudante