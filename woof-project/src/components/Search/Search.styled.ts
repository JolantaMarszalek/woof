import styled from "styled-components";

export const SearchContainer = styled.div`
  display: column;
  height: auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  color: hsl(0, 0%, 55%);
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: auto;
  border-radius: 50%;
  margin: 10rem;
  text-transform: capitalize;
  transition: 0.2s linear;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) {
    height: 200px;

    img {
      width: auto;
      height: 100%;
    }
  }
`;

export const TextContainer = styled.label`
  position: static;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  font-size: 1rem;
  width: auto;
  height: 15vh;
  margin-top: 15px;
  color: hsl(0, 0%, 55%);

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
    h3 {
      font-size: 0.8rem;
    }
    h4 {
      font-size: 0.7rem;
    }
  }
`;
