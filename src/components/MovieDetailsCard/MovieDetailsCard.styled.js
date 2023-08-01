import { styled } from 'styled-components';

export const MovieCardWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const MovieCardImage = styled.img`
  width: 400px;
  height: 550px;
`;

export const MovieCardInfo = styled.div`
  flex-basis: 450px;
`;

export const MovieCardName = styled.h2`
  margin-bottom: 20px;
  font-size: 45px;
  font-weight: 600;
`;

export const MovieCardTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 500;
`;

export const MovieCardText = styled.p`
  margin-bottom: 10px;
`;

export const MovieCardGenres = styled.ul`
  display: flex;
  gap: 15px;
`;
