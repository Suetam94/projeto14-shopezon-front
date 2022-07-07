import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        outline: none;
    }
    h1{
        font-size: 40px;
        color: white;
    }
    button{
        width: 100%;
        color: white;
        background-color: #ee4d2d;
        height: 40px;
        font-size: 30px;
        box-shadow: 0 1px 1px rgb(0 0 0 / 9%);
        outline: none;
        padding: 0 0.625rem;
        border: 0;
        border-radius:5px;

    }
    input{
        width: 100%;
        height: 40px;
        font-size: 20px;
        padding: 10px;
    }
    body{
        background-color: #232F3E;
    }
`;
