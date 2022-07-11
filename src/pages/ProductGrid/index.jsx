import {
  ProductGridContainer,
  ProductGridContent,
  ProductGridTitles,
  ProductGridCards,
} from "./productGridStyle";
import { ProductCard } from "../ProductCard";
import { useEffect, useState } from "react";
import { app } from "../../api/axios";

export function ProductGrid() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function getProductData() {
      const request = await app.get("/products/all");

      if (request.status === 200) {
        setProductData(request.data);
      }
    }

    getProductData();
  }, []);

  return (
    <ProductGridContainer>
      <ProductGridContent>
        <ProductGridTitles>Produtos disponíveis:</ProductGridTitles>
        <ProductGridCards>
          {productData.map((product, index) => {
            return <ProductCard key={index} productData={product} />;
          })}
        </ProductGridCards>
      </ProductGridContent>
    </ProductGridContainer>
  );
}
