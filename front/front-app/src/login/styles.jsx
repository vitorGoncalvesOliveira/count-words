import styled from "styled-components";

export const Container = styled.div`   
    display: flex;
    height: 100vh;
    width: 100%;
`

export const Content = styled.div`
    background: white;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 40%;    
    
    margin: auto;
    
    border-radius: 1rem;
    padding: 1rem;
    padding-top: 2rem;
    padding-bottom: 5rem;
    margin-top: 10%;

        h1{
            padding: 1rem;            
        }
        hr {            
            height: 10px;
            color: black;
            margin-bottom: 4rem;
        }
`

export const LoginForm = styled.form`
    width: 100%;
    margin: 0% 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: space-around;
    

    input {
        border: 1px solid black;
        border-radius: 9px;
        width: 80%;
        padding: 1rem;
        margin: 1rem 0;

    }

    button {
        display: block;
        width: 80%;
        height: 3rem;
        font-size: large;
        background-color: blue;
        color: white;
        font-weight: bold;
        border-radius:9px;
        margin-top: 4rem;
    }
`