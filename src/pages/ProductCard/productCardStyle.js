import styled from "styled-components";

export const ProductCardContainer = styled.a`
  width: 188px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.125rem;
  user-select: none;
  position: relative;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.015);
  }
`;

export const ProductCardImage = styled.img`
  width: 188px;
  height: 188px;
  object-fit: contain;
  pointer-events: none;
`;

export const ProductCardSummary = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCardSummaryTitle = styled.h5`
  font-size: 12px;
  line-height: 14px;
  text-overflow: ellipsis;
  text-align: center;
  margin-top: 5px;
`;

export const ProductCardSummarySellerInfo = styled.div`
  border: 1px solid rgb(0, 70, 171);
  color: rgb(0, 70, 171);
  font-size: 10px;
  line-height: 10px;
  max-width: 60%;
  padding: 2px 4px;
  text-align: center;
`;

export const ProductCardSummaryPrice = styled.span`
  display: block;
  color: #ee4d2d;
  font-size: 16px;
  line-height: 19px;
`;
