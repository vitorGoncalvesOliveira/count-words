import { useState } from 'react'
import api from '../api/api'
import {  Container , Content } from './style'
import SideBar from '../components/SideBar'
export default function Metodo2(){
    const [word, setWord] = useState('');
    const [setences, setSentences] = useState([]);

    const callApi = async () =>{
        try{
            
            const response = await api.post('/documents/word-sentences', {word})
            setSentences(response.data)
        }catch(e){
            console.log({e})
            console.log('deu ruim')
        }
    }

    return (
        <Container>          
            <SideBar />
            <Content>
            <div> 
                <h1>Método 2</h1>
                <div>
                    <h3>Digite uma palavra</h3>
                    <input type='text' onChange={(e) => setWord(e.target.value)} />
                    <button onClick={callApi}>Verificar</button>
                    {setences.length > 0 ? <p> A palavra <b>{word}</b> foi encontrada em {setences.length} frases no texto.</p>: ''}
                    <ol>
                        { setences.map( (setence, index) => <li key={index}> {setence} </li> )}
                    </ol>

                </div>
            </div>
            </Content> 
        </Container>
    )    
}