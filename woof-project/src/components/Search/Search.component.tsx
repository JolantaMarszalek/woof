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
import DogNot from "../DogNot/DogNot.component";
// import { useDogContext } from "../../Context/DogContext";

interface ApiResponse {
  message: {
    [breed: string]: string[];
  };
}

function Search() {
  const [searchDog, setSearchDog] = useState("");
  const navigate = useNavigate();
  // const [dogExists, setDogExists] = useState(true);
  // const { dogExists, setDogExists } = useDogContext();
  const [dogList, setDogList] = useState<string[]>([]);
  const [isDogFound, setIsDogFound] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        const breeds = Object.keys(data.message);
        // const breeds = data.breeds;
        // setDogExists(true);
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
    console.log("Button clicked!");
    console.log("SearchDog:", searchDog);
    console.log("DogList:", dogList);
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

          {/* <Link to={`/dog-page/${searchDog}`}> */}
          <Button disabled={searchDog === ""} onClick={handleSearch}>
            Szukaj
          </Button>
          {/* </Link> */}
        </SearchBarContainer>

        <PhotoContainer>
          <img src="../../../public/pexels-pixabay-236622.jpg" alt="Dog" />
        </PhotoContainer>
        <TextContainer>
          {isDogFound === true && <Dog dog={searchDog} />}{" "}
          {isDogFound === false && <DogNot />}{" "}
          {isDogFound === null && (
            <p>Tu wyświetlimy informacje o interesującym Cię pupilu</p>
          )}{" "}
        </TextContainer>
      </SearchContainer>
    </>
  );
}

export default Search;
