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
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

interface ApiResponse {
  breeds: string[];
}

function Search() {
  const [searchDog, setSearchDog] = useState("");
  const [dogExists, setDogExists] = useState(true);
  const [dogList, setDogList] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        setDogList(data.breeds);
      })
      .catch((error) => {
        console.error("Error fetching dog breeds:", error);
      });
  }, []);

  // const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchDog(event.target.value);
    setDogExists(true);
  };

  const handleSearch = () => {
    if (!dogList.includes(searchDog.toLowerCase())) {
      setDogExists(false);
    } else {
      setDogExists(true);
      // navigate(`/dog-page/${searchDog}`);
    }
  };

  // const renderButton = () => {
  //   if (dogExists) {
  //     return (
  //       <Link to={`/dog-page/${searchDog}`}>
  //         <Button onClick={handleSearch}>Szukaj</Button>
  //       </Link>
  //     );
  //   } else {
  //     return (
  //       <Button disabled={true} onClick={handleSearch}>
  //         Szukaj
  //       </Button>
  //     );
  //   }
  // };
  return (
    <>
      <SearchContainer>
        <SearchTitleContainer>Szukaj a znajdziesz ;)</SearchTitleContainer>
        <SearchBarContainer>
          <Input
            placeholder="np. Owczarek niemiecki"
            value={searchDog}
            onChange={handleInputChange}
          />

          {dogExists ? (
            <Link to={`/dog-page/${searchDog}`}>
              <Button onClick={handleSearch}>Szukaj</Button>
            </Link>
          ) : (
            <Button disabled={true} onClick={handleSearch}>
              Szukaj
            </Button>
          )}
        </SearchBarContainer>
        {suggestions.length > 0 && (
          <ul>
            {suggestions.map((breed) => (
              <li key={breed}>{breed}</li>
            ))}
          </ul>
        )}
        <PhotoContainer>
          <img src="../../../public/pexels-pixabay-236622.jpg" alt="Dog" />
        </PhotoContainer>
        <TextContainer>
          {dogExists ? (
            <p>Tu wyświetlimy informacje o interesującym Cię pupilu</p>
          ) : (
            <p>Nie ma takiego psa w bazie danych.</p>
          )}
        </TextContainer>
      </SearchContainer>
    </>
  );
}

export default Search;
