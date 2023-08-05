import styled from 'styled-components';

export const List = styled.ul`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Item = styled.li`
  width: 300px;
  height: 500px;
  border: 2px solid black;

  border-radius: 15px;
  overflow: hidden;
`;
