import { useEffect, useState } from "react";
import {
  DogContainer,
  PhotoDogContainer,
  TextDogContainer,
  TitleDogContainer,
} from "./Dog.styled";

interface DogProps {
  dog: string;
}

interface DogData {
  message: string | string[];
}

function Dog({ dog }: DogProps) {
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [dogExists, setDogExists] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${dog}/images/random`
        );
        const data = (await response.json()) as DogData;
        const fetchedDogImage = Array.isArray(data.message)
          ? data.message[0]
          : data.message;
        setDogImage(fetchedDogImage);
        setDogExists(true);
      } catch (error) {
        console.error("Error fetching dog image:", error);
        setDogExists(false);
      }
    };
    fetchDogImage().catch((error) => {
      console.error("Error in fetchDogImage:", error);
      setDogExists(false);
    });
  }, [dog]);

  if (!dogExists) {
    return (
      <DogContainer>
        <TitleDogContainer>Brak takiego psa w bazie danych.</TitleDogContainer>
      </DogContainer>
    );
  }

  return (
    <DogContainer>
      <PhotoDogContainer>
        {dogImage && <img src={dogImage} alt="Dog" />}
      </PhotoDogContainer>
      <TitleDogContainer>{dog}</TitleDogContainer>
      <TextDogContainer>
        Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje się w
        roli rodzinnego towarzysza. Dobrze dogaduje się z dziećmi, uwielbia
        pieszczoty i wspólne zabawy. Jest łatwy w prowadzeniu, choć bywa uparty.
        Sprawdzi się zarówno w małym mieszkaniu jak i w domu z ogrodem. <br />
        Wysokość w kłębie 30 - 35 cm, masa ciała 22 - 25 kg. Sierść krótka,
        delikatna. lśniąca, umaszczenie płowe, pręgowane lub łaciate. Charakter
        czujny, śmiały, oddany, odważny, łagodny, czasem uparty. W zależności od
        dnia pokazuje różne oblicza swojej natury.
      </TextDogContainer>
    </DogContainer>
  );
}
export default Dog;
