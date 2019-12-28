import React from "react"
import styled from 'styled-components'

import client1 from './client1.png'
import client2 from './client2.png'
import client3 from './client3.png'
import client4 from './client4.png'
import client5 from './client5.png'
import client6 from './client6.png'

const Wrapper=styled.div`

width:100%;
height:130px;
display:flex;
padding:20px 58px;
box-sizing:border-box;
transition:0.2s;
background:#f3f3f3;
`



const NavIcon=styled.ul`
        
        
        flex:10;
        margin-top:auto;
        margin-bottom:auto;
        display: flex;
        overflow:auto;
        scroll-margin-inline:none;
        &::-webkit-scrollbar { 
    display: none !important; // 윈도우 크롬 등
  }
`
const NavIconItem=styled.li`
        transform:${props => `translateX(-${(props.translate)*350}px)`};
        transition:0.3s;
        color:#333333;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size:50px;
        font-family: sans-serif;
        height: 100%;
        width: fit-content;
        list-style:none;
        margin-right:8%;
        &:hover{
        font-weight:normal;
        color: #b3b3b3
}; 
        transition:0.2s;
`
const Img=styled.img`
        width:150px;
        opacity:0.5;
        margin-right:80px;
`
const Flex_div=styled.div`
flex:2;
`
const move=()=>{
        
}
const Footer = props => {
        const [start,setStart]=React.useState(0);
        const [page,setPage]=React.useState(1);
        const onClickLeft = () => {
                
                if(page==0){
                        console.log(page)
                    setPage(1);}

                    else{
                            setPage(0)
                    }
                
                
            }
            if(start==0){
                setInterval(onClickLeft,3000)
                setStart(1)
            }
        return (
        <>
                <Wrapper >
                        
                        
                        <Flex_div></Flex_div>
                        <NavIcon>
                                <NavIconItem translate={(page)}>
                                <Img src={client1}></Img>
                                </NavIconItem>
                                <NavIconItem translate={(page)}>
                                        
                                <Img src={client2}></Img>
                                </NavIconItem>
                                <NavIconItem translate={(page)}>
                                        
                                <Img src={client3}></Img>
                                </NavIconItem>
                                <NavIconItem translate={(page)}>
                                        
                                <Img src={client4}></Img>
                                </NavIconItem>
                                <NavIconItem translate={(page)}>
                                        
                                <Img src={client5}></Img>
                                </NavIconItem>
                                <NavIconItem style={{marginRight:0+'px'}} translate={(page)}>
                                        
                                <Img src={client6} style={{marginRight:0+'px'}}></Img>
                                </NavIconItem>
                        </NavIcon>

                        <Flex_div></Flex_div>
                       
                </Wrapper>
        </>
        )


}
export default Footer