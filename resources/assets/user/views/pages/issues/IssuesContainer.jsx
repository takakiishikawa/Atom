import React, {Component} from 'react';
import Issues from '.';

class IssuesContainer extends Component {
    render (){
        return (
            <div>
                <Issues {...this.props} />
            </div>
        )
    }
}

export default IssuesContainer;