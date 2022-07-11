import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
  min-height: 80vh;
`;

export const ProductDetailContent = styled.div`
  max-width: 1260px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 10px 25px;
`;

export const ProductDetailImageContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    width: 100%;
  }
`;

export const ProductDetailInfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: #0f1111;
    margin-bottom: 60px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    text-align: justify;
    color: #0f1111;
    margin-bottom: 40px;
  }

  span {
    display: block;
    font-size: 28px;
    color: #0f1111;
    margin-bottom: 20px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 204px;
    height: 30px;
    background: #FFA41C;
    border: 1px solid transparent;
    border-radius: 1.25rem;
    font-size: 14px;
    color: #0f1111;
    
    &:hover {
      filter: brightness(0.95);
    }
  }
`;
