import { Link } from "react-router-dom";
import {
  ListContainer,
  ListDogContainer,
  ListTitleContainer,
} from "./List.styled";
import { useEffect, useState } from "react";

interface DogData {
  message: {
    [breed: string]: string[] | string;
  };
  status: string;
}

function List() {
  const [dogs, setDogs] = useState<string[]>([]);
  const [dogBreeds, setDogBreeds] = useState<
    { breed: string; subBreeds: string[] }[]
  >([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = (await response.json()) as DogData;
        const breeds: string[] = Object.keys(data.message);
        setDogs(breeds);

        const breedsWithSubBreeds = breeds.filter((breed) =>
          Array.isArray(data.message[breed])
        );
        const dogBreedsData = breedsWithSubBreeds.map((breed) => ({
          breed,
          subBreeds: data.message[breed] as string[],
        }));
        setDogBreeds(dogBreedsData);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      }
    };
    fetchDogs().catch((error) => {
      console.error("Error in fetchDogs:", error);
    });
  }, []);

  return (
    <ListContainer>
      <ListTitleContainer>Lista ras</ListTitleContainer>
      <ListDogContainer>
        <ul>
          {dogBreeds.map((dogData, index) => (
            <div key={index}>
              <Link to={`dog-page/${dogData.breed}`}>
                <h4>{dogData.breed}</h4>
              </Link>
              {dogData.subBreeds.length > 0 && (
                <ul>
                  {dogData.subBreeds.map((subBreed, subIndex) => (
                    <div key={subIndex}>
                      <Link to={`dog-page/${dogData.breed}/${subBreed}`}>
                        <p>{subBreed}</p>
                      </Link>
                    </div>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </ListDogContainer>
    </ListContainer>
  );
}

export default List;
