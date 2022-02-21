import styled from "styled-components";

export const Container = styled.div`   
    display: flex;
    height: 100vh;
    width: 100%;
`
export const Content = styled.div`
    width: 90%;
    background-color: white;

    h1 {
        padding: 2rem;
    }

    div {
        margin-left:5%;
        
        div{
            div{
                display: flex;
                width: 60%;
                div{
                    display: flex;
                    flex-direction: column;
                    h3 {
                        display: inline;
                    }
                    input{
                        padding: 1rem;
                        border: 1px solid black;
                        border-radius: 5px;
                        width: 70%;                        
                        display: inline;
                    }
                }
            }
            margin-left: 1.3%;
            button {
                display: block;
                margin-top: 1rem;
                padding: 1rem;
                background-color: blue;
                color: white;
                border-radius: 10px;
                
            }
        }
    }
`

