import { Link } from 'react-router-dom';
import './cartwidget.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <div>
            <Link to='/cart'>
            <i class="bi bi-cart3 A nav-item" >{getItemQuantity()}</i>
            </Link>
            
        </div>
    );
}

export default CartWidget;
