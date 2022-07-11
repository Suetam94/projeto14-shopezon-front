import {
  ProductDetailContainer,
  ProductDetailContent,
  ProductDetailImageContainer,
  ProductDetailInfoContainer,
} from "./productDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { app } from "../../api/axios";

export function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const request = await app.get(`products/product/${id}`);

      if (request.status === 200) {
        setProduct(request.data);
      }
    }

    getProduct();
  }, []);

  return (
    <ProductDetailContainer>
      <ProductDetailContent>
        <ProductDetailImageContainer>
          <img src={product.imgUrl} alt="" />
        </ProductDetailImageContainer>
        <ProductDetailInfoContainer>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span>
            R$ {(product.price / 100).toFixed(2).toString().replace(".", ",")}
          </span>
          <a href={`/cart/${product._id}`}>Comprar</a>
        </ProductDetailInfoContainer>
      </ProductDetailContent>
    </ProductDetailContainer>
  );
}
