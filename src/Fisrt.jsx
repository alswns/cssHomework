import React from "react"
import styled from 'styled-components'
import logo from './logo192.png'

const Wrapper=styled.div`
    margin-top:200px;
    width:100%;
    justify-content:center;
    text-align:center;
`
const Text=styled.div`
font-size: 48px;
font-weight: 600;
    color: #404040;
    margin-top: 30px !important;
    font-family: 'Roboto', sans-serif;
`
const Sub_text=styled.div`
    margin-right:auto;
    margin-left:auto;
    font-family: 'Roboto', sans-serif;
    opacity: 0.9;
    font-size: 20px;
    font-weight: 400;
    color: #3C4B5D;
    line-height: 1.4;
    margin-top: 20px;
    margin-bottom: 20px;
    width:60%;
`
const Move=styled.img`
    width:200px;
    height:80px;
    border-radius:8%;
    margin:8px;
`
const Phone=styled.img`
    margin-top:50px;
    width:600px;
    height:300px;
    
    overflow:hidden;
    
`
const First = props => {

        return (
        <>
        <Wrapper>
        <img src={logo} style={{width:100+'px'}}/> 
        <Text>
            This is React
        </Text>
        <Sub_text>
            React is amazing~!<br></br>
            Ract is wonderful<br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel adipisci tenetur hic obcaecati excepturi, dolore, quod ipsa, dolorum soluta repellendus consequatur quis maiores facilis explicabo sunt dolorem. Officia, architecto tempora?

        </Sub_text>
            <a href="https://reactjs.org/"> <Move src={"data:image/png;base64,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"}></Move> </a>
            <a href="https://www.tensorflow.org/"><Move src={"data:image/png;base64,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"}></Move></a>
        <br></br>
        <Phone src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMx6Bbot44SAu_S1ta080gRzEOTB0wYCawVGrttHAWbw5KE6jR&s"></Phone>
        </Wrapper>
              </>
        )


}
export default First