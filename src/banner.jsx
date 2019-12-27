import React from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Wrapper=styled.div`
width:100%;
height:130px;
display:flex;
padding:20px 58px;
box-sizing:border-box;
position:fixed;
    top:0;
    left:0;
    right:0;
z-index:9000;
transition:0.2s;
`

const Logo=styled.img`
height:100%;
margin-right:30px;
`

const NavText=styled.ul`
align-items:center;
display:flex;
flex:1;
`
const NavTextItem=styled.li`
font-weight:625;
list-style:none;


`
const NavIcon=styled.ul`
        margin-top:auto;
        margin-bottom:auto;
 
        display: flex;
        
`
const NavIconItem=styled.li`
        
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size:20px;
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
        list-style:none;
        height: 100%;
`
const setFont=(event)=>{
        let asd =document.getElementsByClassName('asd')
        for(let a=0;a<asd.length;a++){
                asd[a].style.fontWeight='normal'
                asd[a].style.color='#e5e5e5'
        }
        event.target.style.fontWeight='bold'
        event.target.style.color='#fff'
                
}
const myFunction=(e)=>{
        console.log(e.target.parentNode)
        e.target.parentNode.style.height=68+'px'
    
}
const Banner = props => {

        return (
        <>
                <Wrapper onWheel  = {myFunction}>
                        
                        <div style={{width:11+'%'}}></div>
                        <NavText>
                        <NavTextItem  style={{fontSize:40+'px'}}>advnt.</NavTextItem>
                        
                        </NavText>

                        <NavIcon>
                                <NavIconItem>
                                product
                                </NavIconItem>
                                <NavIconItem>
                                        
                                Features
                                </NavIconItem>
                                <NavIconItem>
                                        
                                Pricing
                                </NavIconItem>
                                <NavIconItem>
                                        
                                review
                                </NavIconItem>
                                <NavIconItem>
                                        
                                contact
                                </NavIconItem>
                        </NavIcon>

                        <div style={{width:20+'%'}}></div>
                        
                </Wrapper>
        </>
        )


}
export default Banner