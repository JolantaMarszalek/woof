import styled from "styled-components";

export const DogContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PhotoDogContainer = styled.div`
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

  @media (max-height: 600px) {
    margin-top: 10px;
    height: 10vh;
  }

  @media (max-width: 470px) {
    margin: 5rem;
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 375px) {
    margin: 2rem;
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

export const TitleDogContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  text-transform: capitalize;
  font-weight: bold;
  justify-content: center;
  gap: 10px;

  @media (max-height: 600px) {
    margin-top: 10px;
    height: 10vh;
  }
`;

export const TextDogContainer = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  width: auto;
  height: auto;
  margin-top: 5px;
  font-size: 15px;
  line-height: 1.5;

  @media (max-height: 600px) {
    margin-top: 10px;
    height: 10vh;
  }
`;
