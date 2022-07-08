import {
  ProductGridContainer,
  ProductGridContent,
  ProductGridTitles,
  ProductGridCards,
} from "./productGridStyle";
import { ProductCard } from "../ProductCard";

export function ProductGrid() {
  return (
    <ProductGridContainer>
      <ProductGridContent>
        <ProductGridTitles>Produtos disponíveis:</ProductGridTitles>
        <ProductGridCards>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductGridCards>
      </ProductGridContent>
    </ProductGridContainer>
  );
}
