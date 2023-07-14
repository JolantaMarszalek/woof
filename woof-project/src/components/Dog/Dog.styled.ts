import styled from "styled-components";

export const DogContainer = styled.div`
  display: column;
  height: auto;
  color: hsl(0, 0%, 55%);
`;

export const PhotoDogContainer = styled.div`
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

  @media (max-height: 740px) {
    margin-top: 10px;
    height: 10vh;
  }
`;

export const TitleDogContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  color: hsl(0, 0%, 55%);
  margin: 20px;
  text-transform: capitalize;
  font-weight: bold;
`;

export const TextDogContainer = styled.div`
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
