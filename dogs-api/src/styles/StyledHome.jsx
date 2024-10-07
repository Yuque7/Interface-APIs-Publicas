import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ImageDog = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover; 
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const ButtonLike = styled.button`
 display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin: 10px;
  background-color: #782bdd;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #420493;
  }

  svg {
    margin-right: 8px;
  }
`;

export const ButtonSaved = styled(ButtonLike)`
background-color: #782bdd;

&:hover {
  background-color: #420493;
}
`;