import React, {Component} from 'react';
import HeaderContainer from '../../components/header/HeaderContainer';

class Issues extends Component {
    render (){
        return (
            <div>
                <HeaderContainer activeMenu="issues" />
                <h1>Issues</h1>
            </div>
        )
    }
}

export default Issues;