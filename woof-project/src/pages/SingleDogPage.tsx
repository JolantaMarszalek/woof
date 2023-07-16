import { useParams } from "react-router-dom";
import Dog from "../components/Dog/Dog.component";

function SingleDogPage() {
  const { dog } = useParams<{ dog: string }>();

  return (
    <>
      {dog ? <Dog dog={dog} /> : <div>Nie ma takiego psa w bazie danych.</div>}
    </>
  );
}

export default SingleDogPage;
