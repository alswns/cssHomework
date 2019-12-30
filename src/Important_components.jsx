import React from "react"
import styled from "styled-components"
import client from "./client.png"
const Wrapper=styled.div`
width:100%;
height:600px;
margin-top:60px;
text-align:center;
& h1{
  font-weight:bold;

}
.container{
  align-items:center;
}
h6{
  font-weight:400;
}
`
const Main_text=styled.div`
font-weight:700;
font-size:34px;
font-family: Poppins;
`
const Sub_text=styled.div`
margin-top:6px;
margin-bottom:30px;
font-family: 'Roboto';
opacity: 0.8;
`
const Img=styled.img`
width:80px;
height:80px;
margin-right:10px;
box-sizing:border-box;
`
const Flex_div=styled.div`
display:flex;
flex-direction:row;
margin-bottom:15px;
`
function Important_components(props){

    return(



        <Wrapper>
            
        <Main_text>
        React is Imortant 
        </Main_text>
        <Sub_text>
            React is so powerful so can rule the other<br></br>
            So people should use react
        </Sub_text>
        
        <div className="container">
  <div className="row">
    <Flex_div className="col-md-4 col-sm-12">
      <Img src={client}></Img>
      <div>
      <h1>박민준</h1>
      <h6>1학년 4반<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, reprehenderit dolor sunt repellat cumque nobis eius distinctio at nemo tempore modi, esse delectus placeat doloremque, unde culpa iste dolorum architecto.</h6>
      </div>
    </Flex_div>
    <Flex_div className="col-md-4  col-sm-12">
      
    <Img src={client}></Img>
      <div>
      <h1>박민준</h1>
      <h6>1학년 4반<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, reprehenderit dolor sunt repellat cumque nobis eius distinctio at nemo tempore modi, esse delectus placeat doloremque, unde culpa iste dolorum architecto.</h6>
      </div>



      
    </Flex_div>
    <Flex_div className="col-md-4  col-sm-12">
      

    <Img src={client}></Img>
      <div>
      <h1>박민준</h1>
      <h6>1학년 4반<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, reprehenderit dolor sunt repellat cumque nobis eius distinctio at nemo tempore modi, esse delectus placeat doloremque, unde culpa iste dolorum architecto.</h6>
      </div>

      
    </Flex_div>
  </div>
  <div className="row">
    <Flex_div className="col-md-4  col-sm-12">
      
    <Img src={client}></Img>
      <div>
      <h1>박민준</h1>
      <h6>1학년 4반<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, reprehenderit dolor sunt repellat cumque nobis eius distinctio at nemo tempore modi, esse delectus placeat doloremque, unde culpa iste dolorum architecto.</h6>
      </div>


      
    </Flex_div>
    <Flex_div className="col-md-4  col-sm-12">
      
    <Img src={client}></Img>
      <div>
      <h1>박민준</h1>
      <h6>1학년 4반<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, reprehenderit dolor sunt repellat cumque nobis eius distinctio at nemo tempore modi, esse delectus placeat doloremque, unde culpa iste dolorum architecto.</h6>
      </div>


      
    </Flex_div>
    <Flex_div className="col-md-4 col-sm-12">
      
    <Img src={client}></Img>
      <div>
      <h1>박민준</h1>
      <h6>1학년 4반<br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, reprehenderit dolor sunt repellat cumque nobis eius distinctio at nemo tempore modi, esse delectus placeat doloremque, unde culpa iste dolorum architecto.</h6>
      </div>


      
    </Flex_div>
  </div>
</div>


        </Wrapper>
    )
}
export default Important_components