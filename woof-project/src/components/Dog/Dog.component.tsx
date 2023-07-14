import { DogContainer } from "./Dog.styled";
import { useEffect, useState } from "react";

interface DogProps {
  dog: string;
}
interface DogData {
  message: string;
}

function Dog({ dog }: DogProps) {
  const [dogName, setDogName] = useState<string | null>(null);

  useEffect(() => {
    const fetchDogName = async () => {
      try {
        const response = await fetch(`https://dog.ceo/api/breeds/${dog}`);
        const data = (await response.json()) as DogData;
        const fetchedDogName = data.message;
        setDogName(fetchedDogName);
      } catch (error) {
        console.error("Error fetching dog name:", error);
      }
    };
    fetchDogName().catch((error) => {
      console.error("Error in fetchDogName:", error);
    });
  }, [dog]);
  return (
    <DogContainer>
      <h1>Pieseczek: {dogName}</h1>
    </DogContainer>
  );
}

export default Dog;
