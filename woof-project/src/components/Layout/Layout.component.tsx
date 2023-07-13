import { ReactNode } from "react";
import { Main } from "./Layout.styled";
import { Footer } from "../Footer/Footer.component";
// import { Header } from "../Header/Header.component";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Header /> */}
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
