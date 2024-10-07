import styled from "styled-components";

export const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #f7e6bf;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.2);
    //text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768) {
    font-size: 3rem;
  }
`;
