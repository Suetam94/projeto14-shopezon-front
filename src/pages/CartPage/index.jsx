import { useState, useEffect } from "react"
import {Container} from "./styles"
import jwtDecode from "jwt-decode";
import ProductInCart from "../ProductInCart";
import { Button } from "react-bootstrap";
import { app } from "../../api/axios";

export default function CartPage(){
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(()=>{
        const token = localStorage.getItem("myWalletToken");

    try {
      const tokenPayload = jwtDecode(token);
      if(tokenPayload.userId){
        const request = app.get(`/cart/${tokenPayload.userId}`);
        request.then((res)=> setProducts(res))
        request.catch((err)=> console.log(err))
    }
    } catch (e) {
      console.log("Token is invalid");
    }
    },[]);

    return(
        <Container>
            {/*cartProducts.map(({name, imgUrl, price})=><ProductInCart name={name} imgUrl={imgUrl} price={price}/>)*/}
            <ProductInCart name={"dsaasdasdas"} imgUrl={"https://cf.shopee.com.br/file/77b55c01a0fd3621a89bf8d1803ea8da_tn"} price={40}/>
            <h3>Total:{}</h3>
            <Button variant="danger">Fechar pedido</Button>
        </Container>
    )
}