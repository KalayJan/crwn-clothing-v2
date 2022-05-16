import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../components/cart-icon/cart-icon.component';
import { ReactComponent as EljhLogo } from '../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <EljhLogo className='logo' />
                </Link>
                <div className='links-container'>

                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
<<<<<<< Updated upstream
                    <Link className='authentication-link' to='/auth'>  
                        SIGN IN
                    </Link>
=======
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>)
                    }
                    <CartIcon className='cart-icon-container' />

>>>>>>> Stashed changes
                </div>

            </div>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;