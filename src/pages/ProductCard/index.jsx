import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardSummary,
  ProductCardSummaryTitle,
  ProductCardSummarySellerInfo,
  ProductCardSummaryPrice,
} from "./productCardStyle";

export function ProductCard() {
  return (
    <ProductCardContainer>
      <ProductCardImage
        src={
          "https://cf.shopee.com.br/file/5f9dc1b8940e11ea0f055be34a7abbe8_tn"
        }
      />
      <ProductCardSummary>
        <ProductCardSummaryTitle>
          Eliana Cristal Desodorante Colônia Feminina Jequiti
        </ProductCardSummaryTitle>
        <ProductCardSummarySellerInfo>
          Vendedor Local
        </ProductCardSummarySellerInfo>
        <ProductCardSummaryPrice>R$ 10,00</ProductCardSummaryPrice>
      </ProductCardSummary>
    </ProductCardContainer>
  );
}
