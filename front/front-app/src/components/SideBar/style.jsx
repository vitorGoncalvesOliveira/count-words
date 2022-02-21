import styled from "styled-components";


export const SideBar = styled.nav`
    width: 10%;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap ;
    


    a {
        text-decoration: inherit;
        color: white;
        padding: 0.9rem;
        border-radius: 0.8rem;
        margin-left: 0.5rem;
        padding-top: 1rem;
        margin-top: 1rem;
    }

    a:hover{
        color: black;
        background-color: white;


    }
`