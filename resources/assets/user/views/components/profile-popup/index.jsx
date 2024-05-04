import React, {Component} from 'react';
import logo from '../header/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
import './ProfilePopup.scss';


class ProfilePopup extends Component {
    render () {

        return (
            <div className="popup">
                <div className="popup__header">
                    <div className='popup__header__icon'>
                        <img src={logo} alt="logo" className="img" />
                        <span className='text'>Atom</span>
                    </div>
                    <span className="popup__header__text">Sign Out</span>
                </div>
                <div className="popup__body">
                    <AccountCircleIcon className="popup__body__icon" />
                    <div className="popup__body__profile-info">
                        <div className="name">T.K</div>
                        <div className="email">email@email.com</div>
                        <Link to="/profile" className="manage-account">Manage account</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePopup;