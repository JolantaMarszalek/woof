import { Link } from "react-router-dom";
import { FooterStyled, Links } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <Links>
        <Link to="/">
          <img src="../../../public/dog.png" />
        </Link>
        <Link to="dog-search">
          <img src="../../../public/search-magnifier-black-shape.png" />
        </Link>
      </Links>
    </FooterStyled>
  );
};
