import { MagnifyingGlass } from "phosphor-react";
import shopezonLogo from "../../assets/Imgs/shopezon-logo.png";

import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderTitle,
  HeaderLogoContainer,
  HeaderSearchForm,
  HeaderSearchFormButton,
  HeaderSearchFormInput,
  HeaderLoginContent,
} from "./headerStyle";
import { useEffect, useState } from "react";

export function Header() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const myWalletToken = localStorage.getItem("myWalletToken");

    if (myWalletToken) {
      setToken(myWalletToken);
    }
  }, [handleLogOff]);

  function handleLogOff() {
    return localStorage.removeItem("myWalletToken");
  }

  function handleSetToken() {
    return setToken(localStorage.getItem("myWalletToken"));
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogoContainer href={"/"}>
          <HeaderLogo src={shopezonLogo} />
          <HeaderTitle>Shopezon</HeaderTitle>
        </HeaderLogoContainer>
        <HeaderSearchForm>
          <HeaderSearchFormInput
            type="text"
            placeholder="Digite o que procura"
          />
          <HeaderSearchFormButton>
            <MagnifyingGlass size={12} />
          </HeaderSearchFormButton>
        </HeaderSearchForm>
        <HeaderLoginContent>
          {token ? (
            <>
              <a onClick={handleLogOff} href="/">
                Sair
              </a>
            </>
          ) : (
            <>
              <a href="/cadastrar">Cadastrar</a>
              <span>|</span>
              <a onClick={handleSetToken} href="/login">
                Entre
              </a>
            </>
          )}
        </HeaderLoginContent>
      </HeaderContent>
    </HeaderContainer>
  );
}
