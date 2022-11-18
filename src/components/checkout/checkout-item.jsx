import './checkout-item.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const CheckOutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const {addItemToCart,deleteItemFromCart,clearItemFromCart} = useContext(CartContext);
    const addItemHandler = () => addItemToCart(cartItem);
    const deleteItemHandler = ()=>deleteItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={`${imageUrl}`} alt={`${name}`} />
            </div>
            
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={deleteItemHandler}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler} >&#10005;</div>
                        
        </div>
    );
};

export default CheckOutItem;