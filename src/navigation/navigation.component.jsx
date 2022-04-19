import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as EljhLogo } from '../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <div className='links-container'>
                    <Link className='logo-container' to='/'>
                        <EljhLogo className='logo'/>
                    </Link>
                    <Link className='nav-link' to='/shop'>  
                        SHOP
                    </Link>
                    <Link className='authentication-link' to='/auth'>  
                        SIGN IN
                    </Link>
                </div>
            </div>  
            <Outlet />
        </Fragment>
    )
};

export default Navigation;