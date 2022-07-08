import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../assets/Imgs/shopezon-logo.png';
import * as Styled from './styles';

export default function SignUpPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    async function registerUser(e){
        
        e.preventDefault();
        if(!confirmPassword) return alert("As senhas não são iguais. Tente novamente");
        
        const body ={
            name,
            email,
            password
        }
        try{

            const res = await axios.post("http://localhost:5000/api/users/create",body);
            localStorage.setItem('token',res.data.token);
            navigate('/');
        
        }catch(e){

            alert(e.response.data.message);
        
        }
    }

    return (
        <Styled.Container>
            <Styled.TopBar>
                <img src={Logo} alt="" />
                <h1>Shopezon</h1>
            </Styled.TopBar>
            <form onSubmit={registerUser}>
                <input
                    type="text"
                    id="name"
                    placeholder="Nome"
                    minLength={3}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                /> 
                <input
                    type="password"
                    id="password"
                    placeholder="Senha"
                    minLength={6}
                    pattern="[a-zA-Z0-9\s]+"
                    title='A senha pode conter apenas números e letras'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirme a Senha"
                    onChange={(e) => setConfirmPassword(e.target.value === password)}
                />
                <button>Cadastre-se</button>
            </form>
            <Link to='/login'>Já tem uma conta? Entre agora!</Link>
        </Styled.Container>
    )
}