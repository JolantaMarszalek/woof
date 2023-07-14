import { Link } from "react-router-dom";
import {
  ListContainer,
  ListDogContainer,
  ListTitleContainer,
} from "./List.styled";
import { useEffect, useState } from "react";

interface DogData {
  message: {
    [breed: string]: string[];
  };
  status: string;
}

function List() {
  const [dogs, setDogs] = useState<string[]>([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = (await response.json()) as DogData;
        const breeds: string[] = Object.keys(data.message);
        setDogs(breeds);
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
          {dogs.map((dog, index) => (
            <div key={index}>
              <Link to={`dog-page/${dog}`}>
                <h4>{dog}</h4>
              </Link>
            </div>
          ))}
        </ul>
      </ListDogContainer>
    </ListContainer>
  );
}

export default List;
