import React from 'react';
import Banner from './banner';
import { createGlobalStyle } from 'styled-components'

import First from './Fisrt';
import Footer from './Footer';
import Important_components from './Important_components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration:none;
    color:white;
  }
*{
  animation-name:회전s;
animation-duration:1s;

}
@keyframes 회전s{
    
    0%{
        transform:rotateZ(0deg);
        

    }
    
    100% {
        transform:rotateZ(360deg);           
    }
}


`


function App() {
  return (
    <>
    <GlobalStyle/>
    <Banner></Banner>
    <First ></First>
    <Footer></Footer>
    <Important_components></Important_components>
    </>
  );
}

export default App;
