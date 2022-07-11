import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import * as Styled from './styles';

export default function SignUpPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");;
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
            localStorage.setItem('myWalletToken',res.data.token);
            navigate('/');
        
        }catch(e){
            alert(e.response.data.message);
        }
    }

    return (
        <Styled.Container>
            <Form
                noValidate
                className="w-100"
                onSubmit={(event) => registerUser(event)}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type="text" placeholder="Nome" onChange={(e)=> setName(e.target.value)} required />
                    <Form.Text className="text-muted">
                        Informe seu nome
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        O email é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Control type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required />
                    <Form.Text className="text-muted">
                        Informe seu e-mail
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        O email é obrigatório
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Control type="password" placeholder="Senha" onChange={(e)=> setPassword(e.target.value)} required />
                    <Form.Text className="text-muted">
                        Informe sua senha (deve conter letras e números apenas)
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        A senha é obrigatória
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formConfirmPassword'>
                    <Form.Control type="password" placeholder="Confirme a Senha" onChange={(e)=>setConfirmPassword(password === e.target.value)} required />
                    <Form.Text className="text-muted">
                        Confirme sua Senha
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        A senha é obrigatória
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="danger" type="submit">
                    Cadastre-se
                </Button>
            </Form>
            <Link to='/login'>Já tem uma conta? Entre!</Link>
        </Styled.Container>
    )
}