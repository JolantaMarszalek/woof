import { useParams } from "react-router-dom";
import Dog from "../components/Dog/Dog.component";

function SingleDogPage() {
  const { dog } = useParams<{ dog?: string }>();

  if (!dog) {
    return <div>No dog selected.</div>;
  }

  return (
    <>
      <Dog dog={dog} />
    </>
  );
}

export default SingleDogPage;
