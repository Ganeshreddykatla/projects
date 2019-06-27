import React, { Component } from 'react';
import Axios from 'axios';
import Useridcomponent from './userIdComponent'

class pegination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 1,
            data: [],
            loading: false
        }
    }

    componentDidMount = () => {
        this.getData()
    }
    getData = () => {
        const { userId } = this.state;
        this.setState({
            data: [],
            loading: true
        })
        Axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(res => this.setState({ data: res.data }))
            .catch(err => {
                console.log(err);
                return null;
            })
    }
    btnClick = (e) => {
        const userId = e.target.value
        this.setState({
            userId
        })
        this.getData()

    }


    render() {
        return (
            <div>
                {!this.state.loading ? <p> Loading.... </p> :
                    <div>
                        <ul>
                            {this.state.data.map(item => {
                                return <li key={item.id}>
                                    <h3>{item.title}</h3>
                                    <h3>{item.body}</h3>

                                </li>

                            })}
                        </ul>
                    </div>
                }
                <Useridcomponent name="1" onClick={this.btnClick} />
                <Useridcomponent name="2" onClick={this.btnClick} />
                <Useridcomponent name="3" onClick={this.btnClick} />
                <Useridcomponent name="4" onClick={this.btnClick} />
            </div>
        )
    }

}




export default pegination;