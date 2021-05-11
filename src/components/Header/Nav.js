import React,{useState} from 'react'
import styled from 'styled-components'
import {MenuFoldOutlined,HeartFilled} from '@ant-design/icons'
import { Button,Drawer } from '@material-ui/core';
import Logo from '../../assets/logo.png'

const StyledList=styled.div`
min-width:300px;
background-color:red;


`;

const StyledNav=styled.div`
width:100%;
height:100px;
position:fixed;
background-color:#188FB7;
box-shadow:0px 0px 10px rgba(0,0,0,0.5);
display:flex;
flex-direction:row;
z-index:100;
top:0;
.logo{
    padding:20px;
    span{
        margin-left:10px;
        font-size:18px;
        font-weight:bolder;
        color:white;
    }
    img{
        width:70px;
        height:70px;
    }
}
.aside{
    margin-left:auto;
    padding:30px;
    display:flex;
    flex-direction:row;
    svg{
        width:30px;
        height:30px;
        color:white;
    }
    .menu svg{
       margin-left:25px;
       cursor: pointer;
    }
    
}
`;


export default function Nav() {
    const [open,setOpen]=useState(false)
    return (
    <>
      <StyledNav>
          <div className='logo'>
          <img src={Logo} alt="React Logo" />
          <span>AICD.org</span>
          </div>
          <div className='aside'>
        <Button
        variant='outlined'
        endIcon={<HeartFilled></HeartFilled>}
      >
        Donate
      </Button>
      <div className='menu'>
          <MenuFoldOutlined onClick={()=>{
              setOpen(true)
          }}/>
      </div>
          </div>
    
      </StyledNav>
      <Drawer anchor='right' open={open} onClose={()=>{
          setOpen(false)
      }}>
         <StyledList></StyledList>
      </Drawer>
      </>
    )
}
