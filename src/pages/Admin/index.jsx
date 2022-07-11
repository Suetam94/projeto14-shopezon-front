import { Button, Form } from "react-bootstrap";

import { AdminScreenContainer } from "./adminStyle";
import { useState } from "react";

export function Admin() {
  const [validated, setValidated] = useState(false);

  function handleSubmit(event) {
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  return (
    <AdminScreenContainer>
      <Form
        noValidate
        validated={validated}
        className="w-100"
        onSubmit={(event) => handleSubmit(event)}
      >
        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Control type="text" placeholder="Nome do produto" required />
          <Form.Text className="text-muted">
            Digite aqui o nome do novo produto.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            O nome do produto é obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImgProduct">
          <Form.Control type="text" placeholder="Imagem do produto" required />
          <Form.Text className="text-muted">
            Coloque aqui uma URL válida de uma imagem que represente o produto.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            O nome do produto é obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescProduct">
          <Form.Control
            type="text"
            placeholder="Descrição do produto"
            required
          />
          <Form.Text className="text-muted">Descreva o produto.</Form.Text>
          <Form.Control.Feedback type="invalid">
            O nome do produto é obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPriceProduct">
          <Form.Control type="number" placeholder="Preço do produto" required />
          <Form.Text className="text-muted">
            Digite o preço do produto em reais (R$).
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            O nome do produto é obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstProduct">
          <Form.Control
            type="number"
            placeholder="Estoque do produto"
            required
          />
          <Form.Text className="text-muted">
            Digite o número de unidades do produto.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            O nome do produto é obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="danger" type="submit">
          Criar produto
        </Button>
      </Form>
    </AdminScreenContainer>
  );
}
