import styled from "styled-components";

export const ListContainer = styled.div`
  display: column;
  height: auto;
`;

export const ListTitleContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  color: hsl(0, 0%, 55%);
  margin: 20px;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const ListDogContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  color: hsl(0, 0%, 55%);
  margin: 20px;
  text-align: left;

  a {
    text-decoration: none;
    color: hsl(0, 0%, 55%);
    text-transform: capitalize;
  }

  ul {
    font-size: 15px;
    text-align: left;
  }

  p {
    font-size: 15px;
    text-align: left;
  }
`;
