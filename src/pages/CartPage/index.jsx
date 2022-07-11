import { useState } from "react"
import {Container} from "./styles"
import ProductInCart from "../ProductInCart";
import { useEffect } from "react";

export default function CartPage(){
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(()=>{
        //buscar na api
    },[]);
    return(
        <Container>
            {cartProducts.map(({name, imgUrl, price})=><ProductInCart name={name} imgUrl={imgUrl} price={price}/>)}
        </Container>
    )
}