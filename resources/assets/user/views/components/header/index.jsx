import React, {Component} from 'react';
import logo from './logo.png';
import {Link} from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LabelIcon from '@mui/icons-material/Label';
import ProfilePopup from '../profile-popup';
import './Header.scss';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeMenu: 'throw',
            isOpen: false,
        };
    }

    togglePopup = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render () {
        const {activeMenu} = this.props;

        return (
            <div className='header'>
                <div className='header__left'>
                    <Link to='/' className='header__left__logo'>
                        <img src={logo} alt='logo' className='img' />
                    </Link>
                    <div className='header__left__menu'>
                        <Link to='/' className={`header__left__menu__item ${activeMenu=='throw' ? 'active' : null}`}>
                            <SendIcon className='icon' />
                            <span className='text'>THROW</span>
                        </Link>
                        <Link to='/issues' className={`header__left__menu__item ${activeMenu=='issues' ? 'active' : null}`}>
                            <RadioButtonCheckedIcon className='icon' />
                            <span className='text'>ISSUES</span>
                        </Link>
                        <Link to='/draw' className={`header__left__menu__item ${activeMenu=='draw' ? 'active' : null}`}>
                            <LabelIcon className='icon' />
                            <span className='text'>DRAW.IO</span>
                        </Link>
                    </div>
                </div>
                <div className='header__right'>
                    <div
                        className="header__right__container"
                        onClick={this.togglePopup}
                    >                    
                        <span className='header__right__container__text'>T.K</span>
                        <AccountCircleIcon className='header__right__container__icon' />
                    </div>
                    {this.state.isOpen && (
                        <ProfilePopup />
                    )}  
                </div>
            </div>
        )
    }
}

export default Header;
