import { 
    CheckoutItemContainer, 
    ImageContainer, 
    Name, 
    Quantity, 
    Arrow, 
    Value, 
    Price, 
    RemoveButton 
} from './checkout-item.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const CheckOutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const {addItemToCart,deleteItemFromCart,clearItemFromCart} = useContext(CartContext);
    const addItemHandler = () => addItemToCart(cartItem);
    const deleteItemHandler = ()=>deleteItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={`${imageUrl}`} alt={`${name}`} />
            </ImageContainer>
            
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={deleteItemHandler}>&#10094;</Arrow>
                    <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemHandler} >&#10005;</RemoveButton>
                        
        </CheckoutItemContainer>
    );
};

export default CheckOutItem;