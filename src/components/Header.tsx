import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import Account from '../img/icons/Account.svg';

const Header = () => {
    return (
        <>
        <div className='header'>
            <Link className='header_link' to={'/profile'}>
                    <img className={'header__avatar'} src={Account} alt=''/>
            </Link>
        </div>
        <Outlet/>
        </>
    );
};

export default Header;
