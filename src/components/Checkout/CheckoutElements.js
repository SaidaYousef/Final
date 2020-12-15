import styled from 'styled-components';
import BgPic from '../../images/pizza-1.jpg';

export const Container1 = styled.div`
    position:absolute;
    height:100%;
    top:0%;
    left:0px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#1f242d;
    margin:0px;
    padding:0px;
    align-items:center;
    display:flex;
    flex-direction:column;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${BgPic});
  height: 100vh;
  background-position: cover;
  `


export const Btn = styled.button`
    z-index: 156561;
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    margin-top:50px;
    text-decoration: none;
    text-transform: uppercase;
    color: rgba(255, 255, 255,0.4);
    background: #262c37;
    letter-spacing: 2px;
    font-size: 16px;
    transition: 0.5s;
    cursor: pointer;
    margin-bottom:30px;
    color:white;
`
export const Sdiv1 = styled.div`
 position:relative;
 margin-top:100px;
 display:flex;
 align-items:center;
 justify-content:flex-start;
 flex-direction:column;
 height:100%;
 color:white;
 text-align:center;
 border-style:groove;
 width:50%;
 height:55%;
 ;
`
