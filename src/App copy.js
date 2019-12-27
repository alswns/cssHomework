import React from 'react';
import Banner from './banner';
import { createGlobalStyle } from 'styled-components'
import First from './Fisrt';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration:none;
    color:white;
  }
body{
  
}
`
function App() {
  return (
    <>
    <GlobalStyle/>
    <Banner></Banner>
    <First></First>
    </>
  );
}

export default App;
