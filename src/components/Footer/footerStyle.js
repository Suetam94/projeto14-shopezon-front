import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 40px;
  background-color: #d0011b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const FooterContent = styled.div`
  max-width: 1260px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  span {
    font-size: 13px;
    line-height: 16px;
    color: #fff;
  }
`;