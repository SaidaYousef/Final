import React, { useState, useEffect } from 'react'
import {Container,OneItem,Btn, Sdiv} from './CartElements'
import {useSelector,useDispatch} from 'react-redux'
import {ingredients} from '../Products/data'
import { Addin} from '../../redux/action/storeaction'


const Cart =(props)=>{
    const dispatch = useDispatch();

    const [price, setPrice] = useState(0);
    const Cart = useSelector(state => state.changein.list)
    const GoToConfirm=()=>{
        props.routerProps.history.push('/Checkout')
    }

    useEffect(() => {
        console.log(Cart)
        Cart.forEach(e => {
            setPrice(el=>el+parseFloat(e.price))
        });
       
       
    }, [Cart])
    
    const AddPriceIn=(index,price,id)=>{
        setPrice(0);
        var checkBox = document.getElementById(id);
        console.log(checkBox.checked)
        if (checkBox.checked === true){
            let newCart=Cart.map((e,indexx)=>{
                if(indexx===index){
                    console.log(e.price+"==="+price)
                    e.price=parseFloat(e.price)+parseFloat(price);
                    return e
                }else{
                    return e
                }
            })
            dispatch(Addin(newCart))
        } else {
            let newCart=Cart.map((e,indexx)=>{
                if(indexx===index){
                    console.log(e.price+"==="+price)
                    e.price=parseFloat(e.price)-parseFloat(price);
                    return e
                }else{
                    return e
                }
            })
            dispatch(Addin(newCart))
        }
     
  
    }
    return (<Container id="cardGlobal">
        <Sdiv>
            
                    {Cart.map((e,index)=>{
                        return <OneItem><div>
                            <div style={{display:'flex'}}>
                                <div style={{width:'300px',height:'100%'}}>
                            <h1>{e.name}</h1>
                            <h2>{e.desc}</h2>
                            <h2>{e.price}</h2>
                            {ingredients.map((unit)=>{
                                return <div style={{display:'flex', alignItems:'center'}}>
                                    
                                    
                                    <input type="checkbox" id={Math.random().toString(36).substring(7)}  value={unit.price}  onChange={(e)=>AddPriceIn(index,unit.price,e.target.id)}/> 
                                    <p>{unit.name}   {unit.price}</p>
                                    </div>
                            })}
                            </div>
                            <div style={{height:'350px',width:'350px',position:'relative',overflow:'hidden'}}>
                                <img src={e.img} style={{position:'absolute',height:'100%',width:'100%'}} alt="itempic"/>
                            </div>
                            </div>
                        </div>
                        </OneItem>
                        
                    })}
                    <Btn onClick={()=>GoToConfirm()}>
                        Confirm Order {parseFloat(price).toFixed(4)}
                    </Btn>
        </Sdiv>
    </Container>)
}
export default Cart;