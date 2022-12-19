import { useState } from 'react'
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
        console.log('Form foi submetido!',nome , cargo , imagem, time);

    }

    const [nome,setNome] = useState('');
    const [cargo,setCargo] = useState('');
    const [imagem,setImagem] = useState('');
    const [time,setTime] = useState('');
    
    return(
        <section className='formulario'>
            <form onSubmit={AoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                 valor={nome}
                 aoAlterado={valor=>setNome(valor)}
                 obrigatorio={true} 
                 label="Nome do Funcionário"
                 placeholder="Informe o nome" 
                />
                
                <CampoTexto
                 obrigatorio={true} 
                 label="Cargo"
                 placeholder="Informe o cargo"
                 valor={cargo}
                 aoAlterado={valor=>setCargo(valor)}
                 
                />


                <CampoTexto 
                 label="Imagem" 
                 placeholder="Informe a imagem"
                 valor={imagem}
                 aoAlterado={valor=>setImagem(valor)}
                />

                <ListaSuspensa valor={time} aoAlterado={valor=>setTime(valor)} label="Time" itens={times}/>  

                <Botao>Criar Card</Botao>             
            </form>
        </section>
    )
}

export default Formulario