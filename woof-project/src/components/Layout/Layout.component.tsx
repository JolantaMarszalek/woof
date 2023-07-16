import { ReactNode } from "react";
import { Main } from "./Layout.styled";
import { Footer } from "../Footer/Footer.component";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
