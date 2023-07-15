import { useParams } from "react-router-dom";
import Dog from "../components/Dog/Dog.component";

function SingleDogPage() {
  const { dog } = useParams<{ dog: string }>();

  if (!dog) {
    return <div>Nie ma takiego psa w bazie danych.</div>;
  }

  return (
    <>
      <Dog dog={dog} />
    </>
  );
}

export default SingleDogPage;
