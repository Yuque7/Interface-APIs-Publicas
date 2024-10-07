import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

export const SearchText = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const ButtonSearch = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    background-color: #2980b9;
  }
`;

export const SearchInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 20px;

  p {
    margin: 5px 0;
  }

  img {
    margin-top: 15px;
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 10px;
  }
`;

export const SearchInfoTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;
