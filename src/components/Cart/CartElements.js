import styled from 'styled-components';
import ImgBg from '../../images/pizza-1.jpg';

export const Container = styled.div`
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
    gap:10px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-repeat:repeat;
 
 `;
  
export const OneItem = styled.div`
    position:relative;
    overflow:hidden;
    height:350px;
    min-height:350px;
    width:650px;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    display:flex;
    border-radius:15px;
    flex-direction:column;
    padding-left:20px;
    @media screen and (max-width: 650px) {
    width: 50%;
    height:50%;
    align-content:center;
    min-height:400px;
  }
    h1{
        font-size:1.5rem;
        color:black;
    }
    h2{
        font-size:1rem
    }
    h2:nth-child(3){
        color:green;
    };
`
export const Btn = styled.div`
    z-index: 156561;
    position: relative;
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    text-transform: uppercase;
    color: rgba(255, 255, 255,0.4);
    background: #262c37;
    letter-spacing: 2px;
    font-size: 16px;
    transition: 0.5s;
    cursor: pointer;
    margin-bottom:60px;
    color:white;
    border-style: solid;
  border-width: 35px;
  border-color: #150f0f;
 
`
export const Sdiv = styled.div`
 position:relative;
 margin-top:100px;
 display:flex;
 align-items:center;
 justify-content:flex-start;
 flex-direction:column;
 height:100%;
 gap: 10px;

`
export const Img = styled.img`
position:absolute;
height:100%;
width:100%;
@media screen and (max-width: 650px) {
    width:100%;
    height:80%;
    margin:97px 50px 0px 15px;
  }
`
