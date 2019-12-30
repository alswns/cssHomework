import React from "react"
import styled from 'styled-components'
import list from "./list-24px (1).svg"


const Wrapper=styled.div`
background:white;
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
@media only screen and (max-width: 768px) {
                .ss{
                        display:none;
                }
                .hidden{display:${props=>props.clicked ? "block":"none"};}
        }
        &{
                height:65px;
        }

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
font-family: 'Roboto', sans-serif;
font-weight:625;
list-style:none;


`
const NavIcon=styled.ul`
        margin-top:auto;
        margin-bottom:auto;
 
        display: flex;
        
        @media only screen and (max-width: 768px) {
                display:none;
        }
        
`
const NavIconItem=styled.li`
        
        opacity: 0.9;
        font-family: 'Roboto', sans-serif;
        font-size:19px;
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
        height: 150%;
        display:none;
        margin:auto 0;
        @media only screen and (max-width: 768px) {
                margin-left:auto;
                display:flex;
                margin-right:0;
        }
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
const Hidden_ul=styled.ul`

width:100%;
display:none;
`
const Hidden_li=styled.li`
transition:2s;
background:white;
list-style:none;
opacity: 0.9;
        font-family: 'Roboto', sans-serif;
        font-size:19px;
        margin-top:4px;
        
`


const Wra = styled.div`
ul{

}
li{

}
`
const Banner = props => {
        const [test,setTest]=React.useState(false)
        return (
        <>
                <Wrapper onWheel  = {myFunction} clicked={test}>
                        
                        <div className='ss' style={{width:11+'%'}}></div>
                        <NavText>
                        <NavTextItem  style={{fontSize:40+'px'}}>React.</NavTextItem>
                        
                        </NavText>

                        <NavIcon >
                                <NavIconItem>
                                Product
                                </NavIconItem>
                                <NavIconItem>
                                        
                                Features
                                </NavIconItem>
                                <NavIconItem>
                                        
                                Pricing
                                </NavIconItem>
                                <NavIconItem>
                                        
                                Review
                                </NavIconItem>
                                <NavIconItem>
                                        
                                Contact
                                </NavIconItem>
                        </NavIcon>


                        <a><Img src={list} onClick={()=>setTest(!test)}></Img>
                        <div>
                        <Hidden_ul className='hidden'  >
                                <Hidden_li>
                                Product
                                </Hidden_li>
                                <Hidden_li>
                                        
                                Features
                                </Hidden_li>
                                <Hidden_li>
                                        
                                Pricing
                                </Hidden_li>
                                <Hidden_li>
                                        
                                Review
                                </Hidden_li>
                                <Hidden_li>
                                        
                                Contact
                                </Hidden_li>
                        </Hidden_ul>
                        </div>
                        
                        
                        </a>
                        
                        <div className='ss' style={{width:20+'%' }}></div>
                        
                </Wrapper>
        </>
        )


}
export default Banner