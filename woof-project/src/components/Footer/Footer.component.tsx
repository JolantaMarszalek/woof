import { Link } from "react-router-dom";
import { FooterStyled, IconContainer, Links } from "./Footer.styled";
import { useState } from "react";

export const Footer = () => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const handleIconClick = (index: number) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };
  return (
    <FooterStyled>
      <Links>
        <IconContainer
          active={isActive === 0}
          onClick={() => handleIconClick(0)}>
          <Link to="/">
            <img src="../../../public/dog.png" alt="Ikona" />
          </Link>
        </IconContainer>
        <IconContainer
          active={isActive === 1}
          onClick={() => handleIconClick(1)}>
          <Link to="dog-search">
            <img
              src="../../../public/search-interface-symbol.png"
              alt="Ikona"
            />
          </Link>
        </IconContainer>
      </Links>
    </FooterStyled>
  );
};
