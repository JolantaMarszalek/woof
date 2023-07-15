import styled from "styled-components";

export const SearchContainer = styled.div`
  display: column;
  height: auto;

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
  }
`;

export const SearchTitleContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;

  margin: 20px;
  font-size: 20px;

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    margin: 5rem;
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    margin: 2rem;
    img {
      width: 150px;
      height: 150px;
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

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
  }
`;
