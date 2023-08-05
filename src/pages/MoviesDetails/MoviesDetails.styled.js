import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 15px 0;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 22px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  background-color: gray;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 12px 20px;
`;
