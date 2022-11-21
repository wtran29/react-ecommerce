import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

import { ShoppingBagIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingBagIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;

