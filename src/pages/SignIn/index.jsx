import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Imgs/shopezon-logo.png'
import * as Styled from './styles'

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function userLogin(e){
        e.preventDefault();

    }
    
    
    return (
        <Styled.Container>
            <Styled.TopBar>
                <img src={Logo} alt="" />
                <h1>Shopezon</h1>
            </Styled.TopBar>
            <form onSubmit={userLogin}>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    minLength={6}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Entre</button>
            </form>
            <Link to='/cadastrar'>Não tem uma conta? Cadastre-se!</Link>
        </Styled.Container>
    )
}