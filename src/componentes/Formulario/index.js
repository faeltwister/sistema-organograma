import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ()=>{
    const times = [
        'Programação',
        'Front-END',
        'Back-END',
        'Data-Science',
        'Devops',
        'UX',
        'Mobile',
        'Inovação & Gestão'
    ]

    const AoSalvar = (e)=>{
        e.preventDefault();
        console.log('Form foi submetido!');

    }
    
    return(
        <section className='formulario'>
            <form onSubmit={AoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome do Funcionário" placeholder="Informe o nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Informe o cargo"/>
                <CampoTexto label="Imagem" placeholder="Informe a imagem"/>
                <ListaSuspensa label="Time" itens={times}/>   
                <Botao>Criar Card</Botao>             
            </form>
        </section>
    )
}

export default Formulario