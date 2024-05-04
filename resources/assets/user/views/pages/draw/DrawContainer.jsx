import React, {Component} from 'react';
import Draw from '.';


class DrawContainer extends Component {
    render (){
        return (
            <div>
                <Draw {...this.props} />
            </div>
        )
    }
}

export default DrawContainer;