import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as BGLogo } from '../../assets/bg-head1.svg';
import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";

import { signOutUser } from "../../utils/firebase/firebase";

import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import './navigation.scss';

const Nav = () => {
    const { currentUser } = useContext(UserContext);
    // console.log(currentUser);
    const { isCartOpen } = useContext(CartContext);
    
    return (
      <Fragment>
        <div className="nav">
            <Link className="logo-container" to='/'>
                <BGLogo className="logo"/>
                
            </Link>
            <div className="nav-title">
                <h1>Billy Goat Apparel</h1>
                <div className="nav-links">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    {currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>):
                    (<Link className="nav-link" to='/auth'>SIGN IN</Link>)}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Nav;