import styled from "styled-components";

export const SavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const ImageDog = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center;
  width: 100%;
`;

export const SavedText = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #420493;
`;
