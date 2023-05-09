import React from 'react'
import { useNavigate } from "react-router-dom"

import { 
  PageWrapper, 
  MainPageTitle,
  NavigationButton, 
} from "./Main.styles"

function Main() {

  const navigate = useNavigate();

  return (
    <>
      <PageWrapper>
        <MainPageTitle>
          메인 페이지
        </MainPageTitle>
        <NavigationButton 
          type="button" 
          onClick={ () => navigate('/user')}
        >
          이동 버튼
        </NavigationButton>
      </PageWrapper>
    </>
  )
}

export default Main