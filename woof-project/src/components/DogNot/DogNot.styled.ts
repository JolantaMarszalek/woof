import styled from "styled-components";

export const DogNotContainer = styled.div`
  display: column;
  height: auto;

  font-size: 20px;

  padding: 4rem;
  transition: 0.2s linear;
`;

export const PhotoDogNotContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: auto;
  border-radius: 50%;
  margin: 10px;
  text-transform: capitalize;
  transition: 0.2s linear;

  img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
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

export const TitleDogNotContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  text-align: center;

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
  }
`;
