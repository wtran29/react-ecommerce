import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as BGLogo } from '../../assets/bg-head1.svg';
// import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";

import { selectCurrentUser } from "../../store/user/user-selector";

import { signOutUser } from "../../utils/firebase/firebase";

import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { NavigationContainer, LogoContainer, Logo, NavTitle, NavLinks, NavLink } from "./navigation.styles";

// import './navigation.scss';

const Nav = () => {
    // const { currentUser } = useContext(UserContext);
    // console.log(currentUser);

    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);
    
    return (
      <Fragment>
        <NavigationContainer className="nav">
            <LogoContainer className="logo-container" to='/'>
                <Logo className="logo"/>
            </LogoContainer>
            <NavTitle className="nav-title">
                <h1>Billy Goat Apparel</h1>
                <NavLinks className="nav-links">
                    <NavLink className="nav-link" to='/shop'>SHOP</NavLink>
                    {currentUser ? (<NavLink as='span' className="nav-link" onClick={signOutUser}>SIGN OUT</NavLink>):
                    (<NavLink className="nav-link" to='/auth'>SIGN IN</NavLink>)}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavTitle>
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}

export default Nav;