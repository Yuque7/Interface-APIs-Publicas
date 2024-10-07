import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaBookmark, FaDog } from "react-icons/fa";
import ReactLoading from "react-loading";
import {
  HomeContainer,
  ImageDog,
  ButtonLike,
  ButtonSaved,
  ButtonContainer,
} from "../styles/StyledHome";

import { HeaderTitle } from "../styles/StyledHeader";

export function Home({ onLike, onSave }) {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRandomDog();
  }, []);

  const fetchRandomDog = async () => {
    setLoading(true);
    const res = await axios.get("https://api.thedogapi.com/v1/images/search", {
      headers: {
        "x-api-key":
          "live_NbWBjQjAq3aScfcGB0RvOxdZDODEqdEuFDDOKwGUDbbR7isBL9cEY65QYAVcj88X",
      },
    });
    setDog(res.data[0]);
    setLoading(false);
  };

  const handleLike = () => {
    if (dog) {
      onLike(dog);
      fetchRandomDog();
    }
  };

  const handleSave = () => {
    if (dog) {
      onSave(dog);
      fetchRandomDog();
    }
  };

  return (
    <HomeContainer>
      <HeaderTitle><FaDog /> DOGUINHOS</HeaderTitle>
      {loading ? (
        <ReactLoading type={"spin"} color={"#F6F3EC"} height={50} width={50} />
      ) : dog ? (
        <>
          <ImageDog src={dog.url} alt="Dog" />
          <ButtonContainer>
            <ButtonLike onClick={handleLike}>
              <FaHeart /> Curtir
            </ButtonLike>
            <ButtonSaved onClick={handleSave}>
              <FaBookmark /> Salvar
            </ButtonSaved>
          </ButtonContainer>
        </>
      ) : (
        <p>Carregando....</p>
      )}
    </HomeContainer>
  );
}
