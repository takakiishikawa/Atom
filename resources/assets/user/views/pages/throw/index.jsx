import React, {Component} from 'react';
import HeaderContainer from '../../components/header/HeaderContainer';

class Throw extends Component {
    render (){
        return (
            <div>
                <HeaderContainer activeMenu="throw" />
                <h1>Throw</h1>
            </div>
        )
    }
}

export default Throw;