import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';


@inject('BirdStore')
@observer
class SingleBird  extends Component {
    static propTypes = {

    };



    render(){

        const {BirdStore} = this.props;

        return(
            <div>
                {this.props.bird}

            </div>
        )
    }
}

export default SingleBird;