
function Noticias ({nome_fulano, show}){

    return (
        <div>
        {(
            show ? 
            <h1>Yrdsyr {nome_fulano}</h1>
            :
            <p></p>
        )}
         
        </div>
    )
}
export default Noticias;