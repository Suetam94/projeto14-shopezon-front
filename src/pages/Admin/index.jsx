import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import { AdminScreenContainer } from "./adminStyle";
import { app } from "../../api/axios";
import { useNavigate } from "react-router-dom";

export function Admin() {
  const [validated, setValidated] = useState(false);
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();

    const token = localStorage.getItem("myWalletToken");
    const priceFormatted = Number(productPrice.toString().replace(",", "."));

    setValidated(true);

    const requestBody = {
      name: productName,
      price: priceFormatted * 100,
      stock: productStock,
      description: productDescription,
      imgUrl: productImage,
    };

    try {
      const request = await app.post("/products/create", requestBody, {
        headers: {
          Authorization: "Bearer" + token,
        },
      });

      if (request.status === 201) {
        navigate("/");
      } else {
        alert("Não foi possível criar o produto, tente de novo");
      }
    } catch (e) {
      console.log(e);
      alert("Não foi possível criar o produto, tente de novo");
    }
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
          <Form.Control
            type="text"
            placeholder="Nome do produto"
            required
            onChange={(event) => setProductName(event.target.value)}
          />
          <Form.Text className="text-muted">
            Digite aqui o nome do novo produto.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            O nome do produto é obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImgProduct">
          <Form.Control
            type="text"
            placeholder="Imagem do produto"
            required
            onChange={(event) => setProductImage(event.target.value)}
          />
          <Form.Text className="text-muted">
            Coloque aqui uma URL válida de uma imagem que represente o produto.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            A imagem do produto é obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescProduct">
          <Form.Control
            type="text"
            placeholder="Descrição do produto"
            required
            onChange={(event) => setProductDescription(event.target.value)}
          />
          <Form.Text className="text-muted">Descreva o produto.</Form.Text>
          <Form.Control.Feedback type="invalid">
            A descrição do produto é obrigatória
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPriceProduct">
          <Form.Control
            type="number"
            placeholder="Preço do produto"
            required
            onChange={(event) => setProductPrice(Number(event.target.value))}
          />
          <Form.Text className="text-muted">
            Digite o preço do produto em reais (R$).
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            O preço do produto é obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstProduct">
          <Form.Control
            type="number"
            placeholder="Estoque do produto"
            required
            onChange={(event) => setProductStock(Number(event.target.value))}
          />
          <Form.Text className="text-muted">
            Digite o número de unidades do produto.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            O estoque do produto é obrigatório
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="danger" type="submit">
          Criar produto
        </Button>
      </Form>
    </AdminScreenContainer>
  );
}
