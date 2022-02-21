import { useState } from 'react'

import api from '../api/api'
import { Container, Content } from './style'
import SideBar from '../components/SideBar'


export default function Metodo1(){
    const [countWord, setCountWord] = useState(0)
    const [word, setWord] = useState('')

    const callApi = async () =>{
        try{
            console.log(word)
            const response = await api.post('/documents/word-frequency', {word})
            setCountWord(response.data)
        }catch(e){
            console.log({e})
            console.log('deu ruim')
        }
    } 

    return (         
        <Container>            
        <SideBar/>      
        <Content>
            <div> 
                <h1>Método 1</h1>
                <div>
                    <h3>Digite uma palavra</h3>
                    <input type='text' onChange={(e) => setWord(e.target.value)} />
                    <button onClick={callApi}>Verificar</button>
                    { countWord > 0 ? <p> A palavra  <b>{word}</b> foi encontrada em {countWord} frases no texto.</p>: ''}

                </div>
            </div>
            </Content>            
        </Container>
               
    )    
}