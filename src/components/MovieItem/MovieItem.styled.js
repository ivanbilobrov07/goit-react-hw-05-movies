import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  display: block;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 300px;
  height: 450px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.p`
  height: 48px;
  padding: 10px 50px;
  border-top: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
