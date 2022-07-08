import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

import Logo from '../../assets/Imgs/shopezon-logo.png'
import * as Styled from './styles'

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function userLogin(e){
        e.preventDefault();
        const body ={
            email,
            password
        }
        try{

            const res = await axios.post("http://localhost:5000/api/users/login",body);
            localStorage.setItem('token',res.data.token);
            navigate('/');
        
        }catch(e){

            alert(e);
        
        }

    }
    
    
    return (
        <Styled.Container>
            <Styled.TopBar>
                <img src={Logo} alt="" />
                <h1>Shopezon</h1>
            </Styled.TopBar>
            <form onSubmit={userLogin}>
                <input
                    required
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    required
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