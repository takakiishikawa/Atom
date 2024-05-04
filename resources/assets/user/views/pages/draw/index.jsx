import React, {Component} from 'react';
import HeaderContainer from '../../components/header/HeaderContainer';

class Draw extends Component {
    render (){
        return (
            <div>
                <HeaderContainer activeMenu="draw" />
                <h1>Draw</h1>
            </div>
        )
    }
}

export default Draw;