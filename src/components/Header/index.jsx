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

export function Header() {
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
          <a href="/cadastrar">Cadastrar</a>
          <span>|</span>
          <a href="/login">Entre</a>
        </HeaderLoginContent>
      </HeaderContent>
    </HeaderContainer>
  );
}
