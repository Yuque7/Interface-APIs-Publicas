import React, { useState } from 'react';
import axios from 'axios';
import {SearchContainer,SearchText,ButtonSearch,SearchInfo,SearchInfoTitle} from '../styles/StyledSearchDog'

export function SearchDog() {
  const [breed, setBreed] = useState('');
  const [breedInfo, setBreedInfo] = useState(null);

  const handleSearch = async () => {
    const res = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`, {
      headers: {
        'x-api-key': "live_NbWBjQjAq3aScfcGB0RvOxdZDODEqdEuFDDOKwGUDbbR7isBL9cEY65QYAVcj88X",
      },
    });
    if (res.data.length > 0) {
      setBreedInfo(res.data[0]);
    } else {
      setBreedInfo(null);
    }
  };

  return (
    <SearchContainer>
      <SearchText>Pesquisar Raça</SearchText>
      <input
        type="text"
        placeholder="Digite o nome da raça"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <ButtonSearch onClick={handleSearch}>Buscar</ButtonSearch>

      {breedInfo && (
        <SearchInfo>
          <SearchInfoTitle>{breedInfo.name}</SearchInfoTitle>
          <p>Temperamento: {breedInfo.temperament}</p>
          <p>Peso: {breedInfo.weight.metric} kg</p>
          <p>Altura: {breedInfo.height.metric} cm</p>
          {breedInfo.image && <img src={breedInfo.image.url} alt={breedInfo.name} />}
        </SearchInfo>
      )}
    </SearchContainer>
  );
}
