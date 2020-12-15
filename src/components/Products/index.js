import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Addin } from '../../redux/action/storeaction'
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';

const Products = ({ heading, data }) => {
  const Cart = useSelector(state => state.changein.list)
  const dispatch = useDispatch();

  const AddToCart = (e) => {
    let newCart = [...Cart, e]
    dispatch(Addin(newCart))
  }
  return (
    <ProductsContainer id="Pizza">
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton onClick={() => AddToCart({ name: product.name, img: product.img, desc: product.desc, price: product.price })}>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;