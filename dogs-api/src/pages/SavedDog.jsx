import React from "react";
import { FaDog } from "react-icons/fa";
import {
  SavedContainer,
  SavedText,
  ImageDog,
  ImageGrid,
} from "../styles/StyledSavedDog";

export function SavedDog({ savedDogs }) {
  return (
    <SavedContainer>
      <SavedText>
        <FaDog /> Cachorros Salvos
      </SavedText>
      {savedDogs && savedDogs.length > 0 ? (
        <ImageGrid>
          {savedDogs.map((dog, index) => (
            <ImageDog key={index} src={dog.url} alt={`Dog ${index}`} />
          ))}
        </ImageGrid>
      ) : (
        <p>Você ainda não salvou nenhum doguinho</p>
      )}
    </SavedContainer>
  );
}
