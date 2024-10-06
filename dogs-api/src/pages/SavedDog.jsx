import React from 'react';
import { FaDog } from 'react-icons/fa';
import {SavedContainer,SavedText,ImageDog} from '../styles/StyledSavedDog';

export function SavedDog({ savedDogs }) {
  return (
    <SavedContainer>
      <SavedText><FaDog /> Cachorros Salvos</SavedText>
      {savedDogs && savedDogs.length > 0 ? (
        savedDogs.map((dog, index) => (
          <ImageDog key={index} src={dog.url} alt={`Dog ${index}`} />
        ))
      ) : (
        <p>Você ainda não curtiu nenhum doguinho</p>
      )}
    </SavedContainer>
  );
}
