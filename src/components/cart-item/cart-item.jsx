import { CartItemContainer, ItemDetails, Title } from "./cart-item.styles";


const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <Title>{name}</Title>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
            
        </CartItemContainer>
    )
}

export default CartItem;