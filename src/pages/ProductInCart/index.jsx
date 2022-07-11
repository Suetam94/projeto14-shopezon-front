import { Container } from "./styles"

export default function ProductInCart({name, imgUrl, price}){
    return(
        <Container>
            <div>
            <img src={imgUrl} alt="" />
            <h3>{name}</h3>
            </div>
            <input type="number" id="quantity" min="1"/>
            <h3>R$ {price}</h3>
        </Container>
    )
}