import styled from "styled-components";

export const InputField = styled.input`
  border: 2px solid hsl(0, 0%, 55%);
  max-width: 100%;
  height: 35px;
  outline: none;
  font-size: 16px;
  padding-left: 25px;
  box-shadow: border-box;
  border-radius: 5px;
  background-color: hsl(240, 22%, 10%);
  color: hsl(0, 0%, 55%);
`;
export const InputLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 740px) {
    margin-top: 10px;
    height: 10vh;
  }
`;
