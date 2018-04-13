import React, {Component} from 'react';

export default class Home extends Component {
    state = {
        count: 0,
    };

    handleClick = () => {
        this.setState({
            count: ++this.state.count,
        })
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                Home<br />
                当前计数：{count}
                <button onClick={this.handleClick}>自增</button>
            </div>
        )
    }
}