import React from "react";
import { PiDogBold } from "react-icons/pi";
import { FaDog } from "react-icons/fa";
import {
  SavedContainer,
  SavedText,
  ImageDog,
  ImageGrid,
  MessageSaved
} from "../styles/StyledSavedDog";

export function SavedDog({ savedDogs }) {
  return (
    <SavedContainer>
      <SavedText>
      <PiDogBold />  Cachorros Salvos  <PiDogBold />
      </SavedText>
      {savedDogs && savedDogs.length > 0 ? (
        <ImageGrid>
          {savedDogs.map((dog, index) => (
            <ImageDog key={index} src={dog.url} alt={`Dog ${index}`} />
          ))}
        </ImageGrid>
      ) : (
        <MessageSaved>Você ainda não salvou nenhum doguinho <FaDog /></MessageSaved>
      )}
    </SavedContainer>
  );
}
