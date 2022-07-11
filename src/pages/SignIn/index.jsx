import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../api/axios";
import { Button, Form } from "react-bootstrap";
import * as Styled from "./styles";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function userLogin(e) {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    try {
      const res = await app.post(
        "/users/login",
        body
      );
      localStorage.setItem("myWalletToken", res.data.token);
      navigate("/");
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  return (
    <Styled.Container>
      <Form noValidate className="w-100" onSubmit={(event) => userLogin(event)}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">Informe seu e-mail</Form.Text>
          <Form.Control.Feedback type="invalid">
            O email é obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            Informe sua senha (deve conter letras e números apenas)
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            A senha é obrigatória
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="danger" type="submit">
          Entre
        </Button>
      </Form>
      <Link to="/cadastrar">Não tem uma conta? Cadastre-se!</Link>
    </Styled.Container>
  );
}
