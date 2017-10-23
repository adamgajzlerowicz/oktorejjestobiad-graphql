import React, {Component} from 'react';
import moment from 'moment';

class Clock extends Component {
    componentWillMount() {
        this.setState({time: moment().format("HH:mm:ss")});
        setInterval(() => {
            this.setState({time: moment().format("HH:mm:ss")})
        }, 1000);
    }

    render() {
        return (
            <div>{this.state.time}</div>
        )
    }
}

export default Clock;