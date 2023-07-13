import { Button } from "../Button/Button.styled";
import { Input } from "../Input/Input.component";
import {
  PhotoContainer,
  SearchBarContainer,
  SearchContainer,
  TextContainer,
  TitleContainer,
} from "./Search.styled";

function Search() {
  return (
    <>
      <SearchContainer>
        <TitleContainer>Szukaj a znajdziesz ;)</TitleContainer>
        <SearchBarContainer>
          <Input placeholder="np. Owczarek niemiecki" />
          <Button>Szukaj</Button>
        </SearchBarContainer>
        <PhotoContainer>
          <img src="../../../public/pexels-pixabay-236622.jpg" />
        </PhotoContainer>
        <TextContainer>
          Tu wyświetlimy informacje o interesującym Cię pupilu
        </TextContainer>
      </SearchContainer>
    </>
  );
}

export default Search;
