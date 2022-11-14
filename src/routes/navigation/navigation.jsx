import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as BGLogo } from '../../assets/bg-head1.svg';
import './navigation.scss';

const Nav = () => {
    return (
      <Fragment>
        <div className="nav">
            <Link className="logo-container" to='/'>
                <BGLogo className="logo"/>
                
            </Link>
            <div className="nav-title">
                <h1>Billy Goat Apparel</h1>
                <div className="nav-links">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Nav;