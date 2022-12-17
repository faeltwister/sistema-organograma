import './CampoTexto.css'
//Função mais normal

const CampoTexto = (props)=>{
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            
            <input placeholder={props.placeholder} />
        </div>
    )

}

export default CampoTexto