import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Content, LoginForm } from './styles'
import api from '../api/api'
import UserContext from '../context/user'
import { toast } from 'react-toastify';



export default function Login(){

    const { state, setState } = useContext(UserContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    const notify = () => toast('Ops, email ou senha incorretos!', {
        position: 'bottom-left',
        autoClose:4000,
        type: 'error',
        theme: 'colored'
    });

    const submitted = async (e) =>{ 
        e.preventDefault()
        try{
            const response = await api.post('/users/login', {
                email,
                password
            })
            const { token } = response.data
            localStorage.setItem('@Netlex:token', token)
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setState(token)

            navigate('metodo1')
            
        }catch(err){
            
            notify()
        }
        
    }

    return (
        <Container>
            <Content>
                
                <h1>Login</h1>
                <hr/>
                <LoginForm onSubmit={(e) => submitted(e)}>
                    <h2>Email</h2>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Infome o email'/>
                    <h2>Senha</h2>
                    <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Infome o password'/>

                    <button type='submit'>Entrar</button>
                </LoginForm>
            </Content>
            
        </Container>
    )    
}