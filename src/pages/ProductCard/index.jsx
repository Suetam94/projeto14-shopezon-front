import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardSummary,
  ProductCardSummaryTitle,
  ProductCardSummarySellerInfo,
  ProductCardSummaryPrice,
} from "./productCardStyle";

export function ProductCard({ productData }) {
  return (
    <ProductCardContainer href={`/product/${productData._id}`}>
      <ProductCardImage src={productData.imgUrl} />
      <ProductCardSummary>
        <ProductCardSummaryTitle>{productData.name}</ProductCardSummaryTitle>
        <ProductCardSummarySellerInfo>
          Vendedor Local
        </ProductCardSummarySellerInfo>
        <ProductCardSummaryPrice>
          R$ {(productData.price.toFixed(2) / 100).toString().replace(".", ",")}
        </ProductCardSummaryPrice>
      </ProductCardSummary>
    </ProductCardContainer>
  );
}
