import React, {Component} from 'react';
import logo from './logo.png';
import SendIcon from '@mui/icons-material/Send';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LabelIcon from '@mui/icons-material/Label';
import './Header.scss';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeMenu: 'throw',
        }
    }

    render () {
        const {activeMenu} = this.props;
        console.log(activeMenu, 'activeMenu')

        return (
            <div className='header'>
                <div className='header__left'>
                    <div className='header__left__logo'>
                        <img src={logo} alt='logo' className='img' />
                    </div>
                    <div className='header__left__menu'>
                        <div className={`header__left__menu__item ${activeMenu=='throw' ? 'active' : null}`}>
                            <SendIcon className='icon' />
                            <span className='text'>THROW</span>
                        </div>
                        <div className={`header__left__menu__item ${activeMenu=='issues' ? 'active' : null}`}>
                            <RadioButtonCheckedIcon className='icon' />
                            <span className='text'>ISSUES</span>
                        </div>
                        <div className={`header__left__menu__item ${activeMenu=='draw' ? 'active' : null}`}>
                            <LabelIcon className='icon' />
                            <span className='text'>Draw.io</span>
                        </div>
                    </div>
                </div>
                <div className='header__right'>
                    <span className='header__right__text'>T.K</span>
                    <AccountCircleIcon className='header__right__icon' />
                </div>
            </div>
        )
    }
}

export default Header;