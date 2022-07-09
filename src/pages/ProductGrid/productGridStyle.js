import styled from "styled-components";

export const ProductGridContainer = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
`;

export const ProductGridContent = styled.div`
  max-width: 1260px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 10px 0;
`;

export const ProductGridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 25px;
  padding-left: 10px;
`;

export const ProductGridTitles = styled.h2`
  font-size: 1.5em;
  line-height: 1.2;
  text-align: left;
  align-self: flex-start;
  margin-left: 10px;
`;
