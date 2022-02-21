import { useState } from 'react'
import api from '../api/api'
import { Container, Content } from './style'
import SideBar from '../components/SideBar'

export default function Metodo3(){
    const [setences, setSetences] = useState([])
    const [count, setCount] = useState(0)
    const [minWord, setminWord] = useState(0)

    const callApi = async () =>{
        try{
            console.log(count, minWord)
            const response = await api.post('/documents/top-words', {count, minWordLength:minWord})
            
            setSetences(response.data)
            console.log(setences)
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
                <h1>Método 3</h1>
                <div>
                    <div> 
                        <div>                      
                            <h3>Count</h3>
                            <input type='number' onChange={(e) => setCount(e.target.value)} min='0' />
                        </div>
                        <div>
                            <h3>Minimun Word Length</h3>
                            <input type='number' onChange={(e) => setminWord(e.target.value)} min='0' />
                        </div>                       
                    </div>
                   <button onClick={callApi}>Verificar</button>
                   { setences.length > 0 ? setences.map( (setence, index) => 
                       <p key={index}> {setence.word}: <b> {setence.count}</b> ocorrências no texto.</p>
                   ) : ''}
                </div>
            </div>
            </Content>            
    
        </Container>
    )    
}