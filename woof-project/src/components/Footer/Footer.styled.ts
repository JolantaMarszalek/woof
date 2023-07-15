import styled from "styled-components";

export const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px 0;
  height: 70px;
  width: 100%;
  background-color: hsl(40, 100%, 55%);
  font-size: 0.6rem;
  color: hsl(0, 0%, 55%);
  border-top-style: solid;
  border-width: 1px;
  border-color: hsl(0, 0%, 55%);
  gap: 50px;

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 1024px) {
    font-size: 0.5rem;
    gap: 0px;
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    width: 100%;
  }
`;

export const IconContainer = styled.div<{ active: boolean }>`
  img {
    width: 50px;
    height: 50px;
    transition: background-color 0.2s ease;

    ${({ active }) => active && "background-color: hsl(0, 0%, 55%);"}

    &:hover {
      background-color: hsl(0, 0%, 55%);
    }

    border-radius: 10px;
    overflow: hidden;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 100px;
`;
