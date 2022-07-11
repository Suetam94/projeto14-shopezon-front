import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 80px;
  background-color: #d0011b;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  max-width: 1260px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const HeaderLogoContainer = styled.a`
  display: flex;
  align-items: self-end;
  padding: 25px 10px;
  cursor: pointer;
`;

export const HeaderLogo = styled.img`
  width: 50px;
  padding-right: 10px;
`;

export const HeaderTitle = styled.h1`
  font-size: 28px;
  line-height: 20px;
  color: #fff;
  border-left: 1px solid white;
  padding-left: 10px;
`;

export const HeaderSearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 520px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
`;

export const HeaderSearchFormInput = styled.input`
  width: 434px;
  height: 40px;
  border-radius: 3px;
  border: none;
  outline: none;
`;

export const HeaderSearchFormButton = styled.button`
  width: 60px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderLoginContent = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  
  a, span {
    font-size: 13px;
    line-height: 16px;
    color: #fff;
  }
`;
