import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const MainPageTitle = styled.h1`
  color: #323232;
  font-size: 32px;
  font-weight: 600;
`;

const NavigationButton = styled.button`
  background-color: #0067A3;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  padding: 6px;
`;

export { 
  PageWrapper, 
  MainPageTitle, 
  NavigationButton, 
};