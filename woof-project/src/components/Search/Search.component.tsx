import { useState, useEffect } from "react";
import { Button } from "../Button/Button.styled";
import { Input } from "../Input/Input.component";
import {
  PhotoContainer,
  SearchBarContainer,
  SearchContainer,
  SearchTitleContainer,
  TextContainer,
} from "./Search.styled";
import { useNavigate } from "react-router-dom";
import Dog from "../Dog/Dog.component";
import { DogNot } from "../DogNot/DogNot.component";

interface ApiResponse {
  message: {
    [breed: string]: string[];
  };
}

function Search() {
  const [searchDog, setSearchDog] = useState("");
  const [dogList, setDogList] = useState<string[]>([]);
  const [isDogFound, setIsDogFound] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        const breeds = Object.keys(data.message);
        setDogList(breeds);
      })
      .catch((error) => {
        console.error("Error fetching dog breeds:", error);
      });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchDog(event.target.value);
    setIsDogFound(null);
  };

  const handleSearch = () => {
    if (searchDog.trim() !== "") {
      const dogExists = dogList.includes(searchDog.toLowerCase());
      setIsDogFound(dogExists);

      if (dogExists) {
        navigate(`/dog-page/${searchDog}`);
      } else {
        navigate(`/dog-not`);
      }
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchTitleContainer>Szukaj a znajdziesz ;)</SearchTitleContainer>
        <SearchBarContainer>
          <Input
            placeholder="np. Germanshepherd"
            value={searchDog}
            onChange={handleInputChange}
          />
          <Button disabled={searchDog === ""} onClick={handleSearch}>
            Szukaj
          </Button>
        </SearchBarContainer>
        <PhotoContainer>
          <img src="../../../public/pexels-pixabay-236622.jpg" alt="Dog" />
        </PhotoContainer>
        <TextContainer>
          {isDogFound === true && <Dog dog={searchDog} />}{" "}
          {isDogFound === false && <DogNot />}{" "}
          {isDogFound === null && (
            <p>Wyświetlimy informacje o interesującym Cię pupilu.</p>
          )}{" "}
        </TextContainer>
      </SearchContainer>
    </>
  );
}

export default Search;
