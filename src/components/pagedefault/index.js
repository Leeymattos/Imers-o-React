import React from 'react';
import MenuPages from '../MenuPages';
import FooterPages from '../FooterPages';
import styled from 'styled-components'

const Main = styled.main`
  background-color: black;
  color: white;
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;

`

export default function PageDefault({children}){
  return(
    <>
      <MenuPages/>
        <Main>
          {children}
        </Main>
      <FooterPages/>
    </>
  )
}