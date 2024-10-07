import React, { useState } from 'react';
import axios from 'axios';
import {SearchContainer,SearchText,ButtonSearch,SearchInfo,SearchInfoTitle,SearchInput} from '../styles/StyledSearchDog'

export function SearchDog() {
  const [breed, setBreed] = useState('');
  const [breedInfo, setBreedInfo] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    try {
      const res = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`, {
        headers: {
          'x-api-key': "live_NbWBjQjAq3aScfcGB0RvOxdZDODEqdEuFDDOKwGUDbbR7isBL9cEY65QYAVcj88X",
        },
      });

      if (res.data.length === 0) {
        setError("Raça não encontrada. Tente outra.");
        setBreedInfo(null);
      } else {
        setBreedInfo(res.data[0]);
      }
    } catch (err) {
      setError("Ocorreu um erro ao buscar a raça. Tente novamente.");
    }
  };

  return (
    <SearchContainer>
      <SearchText>Pesquisar Raça</SearchText>
      <SearchInput
        type="text"
        placeholder="Digite o nome da raça"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <ButtonSearch onClick={handleSearch}>Buscar</ButtonSearch>
      {error && <p style={{ color: 'red' }}>{error}</p>}

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
