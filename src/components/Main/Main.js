import React from 'react'
import Nav from '../Header/Nav'
import styled from 'styled-components'
import Happening from './Happening'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Child from '../../assets/child.jpg'
import {MenuFoldOutlined,HeartFilled,AlertFilled} from '@ant-design/icons'
import Voice from './Voice';
import Carousell from './Carousel';
const StyledCover=styled.div`
@keyframes appear{
    0%{
        transform:translateX(-500px)
    }
    50%{
        transform:translateX(0px)
    }
    100%{
        transform:translateX(0px)
    }
}
min-width:100%;
min-height:70vh;
background-color:red;
margin-top:100px;
position: relative;
z-index:-2;
.under{
    position:absolute;
    z-index:20;
    background:linear-gradient(transparent,transparent,black);
    top:0;
    right:0;
    bottom:0;
    left:0;
    h1{
       position: absolute;
       right: 0;
       bottom:0;
       left: 0;
       font-size:50px;
       border-left:10px solid #188FB7;
       color:white;
       transform:translateX(-500px);
       animation: appear 2s linear;
       animation-fill-mode: forwards; 
       
    }
   
   
}

img{
    width:100%;
    height:70vh;
  
}

`;
const StyledWrite=styled.div`
height: 50vh;
width:100%;
background-color:black;
h1{
    color:#188FB7;
    margin-left:20px;
}
p{
    color:white;
    margin-left:20px;
    margin-right:20px;
    text-align:justify;
    font-size:20px;
}

`;
const StyledMain=styled.div`
position: relative;

`;
const StyledHappening=styled.div`
height: auto;
width:100%;
background-color:white;
padding:20px;
margin-bottom:20px;

`;
const happeningContent=[{
    content:'Most of out of school children are mostly the physically challenged/Disabled children. The loss of some part of their body made them more vulnerable in the society and people use them wrongly.'
},
{
    content:`Disabled and vulnerable children are been discriminated from normal children which made them feel neglected and stigmatized.`
},
{
    content:`Children have traumatic stress and mental disorder as a result of disturbing experience on how they are limited to have easy access to resources because of the challenge of leg is cut off, hand is cut off, eye can’t see, ear can’t hear and other challenge.`
},
]
export default function Main() {
    return (
        <StyledMain>
            <Nav></Nav>
            <StyledCover>
            <div className='under'>
                <h1>Help The Needy</h1>
            </div>
            <img src={Child} alt='child'></img> 
            </StyledCover>
           <StyledWrite>
            <h1>Our beleive @ AICD...</h1>
            <p>
            Disabled and Vulnerable children should also be inclusive in all activities both 
            academics and participation to have easy access to resources just like the normal 
            children for a sustainable development.
            </p>
           </StyledWrite>
           <StyledHappening>
        <Typography align='center' variant="h4" gutterBottom>
        <AlertFilled></AlertFilled>
        What's happening
      </Typography>
      
      {
          happeningContent.map((cont,ind)=>(
              <Happening content={cont.content} num={ind+1} key={ind}></Happening>
          ))
      }
       <Button
        variant='contained'
        endIcon={<HeartFilled></HeartFilled>}
        color='primary'
      >
        Donate Now!
      </Button>
           </StyledHappening>
        <Voice></Voice>
       
        </StyledMain>
    )
}
