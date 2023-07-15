import {
  DogNotContainer,
  PhotoDogNotContainer,
  TitleDogNotContainer,
} from "./DogNot.styled";

export const DogNot = () => {
  return (
    <DogNotContainer>
      <PhotoDogNotContainer>
        <img src="../../../public/pexels-charles-1851164.jpg" alt="Dog" />
      </PhotoDogNotContainer>
      <TitleDogNotContainer>
        Tej rasy nie ma jeszcze w naszej bazie. <br />
        Poszukaj innej.
      </TitleDogNotContainer>
    </DogNotContainer>
  );
};
