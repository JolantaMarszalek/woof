import { useParams } from "react-router-dom";
import Dog from "../components/Dog/Dog.component";

function BreedDogPage() {
  const { dog, subBreed } = useParams<{ dog?: string; subBreed?: string }>();

  if (!dog || !subBreed) {
    return <div>Brak wybranego psa.</div>;
  }

  return (
    <>
      <Dog dog={dog} subBreed={subBreed} />
    </>
  );
}

export default BreedDogPage;
