import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleText = styled.h1`
  font-size : 2rem;     //32px 기본은 16 !!! 
  font-weight : 600;
  color : #323232;

`;

export {TitleContainer, TitleText};