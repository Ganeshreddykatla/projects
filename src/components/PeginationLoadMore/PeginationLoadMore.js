import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './PeginationLoadMore.css';

class PeginationLoadMore extends Component{
    constructor(){
        super();
        this.state = {
            items : [],
            visible:2
        }
    }

    componentDidMount = () => {
        this.getData();
    }

    

    getData = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => this.setState({ items: res.data }))
            .catch(err => {
                console.log(err);
                return null;
            })
    }

    loadMore = () =>{ debugger;
        this.setState(
        {visible: this.state.visible + 4}
        );
      }
    
    
    render(){
        const {items,visible} = this.state

        return(
            <div className="Load-container">
                <div className="Load-wrapper">
                    {/* <section className="feed"> */}
                    <h1>Simple Load More/Pagination with React</h1>
        <h2>With Array.prototype.slice() and the power of component state!</h2>
        <div className="tiles" >
       
            {
              items.slice(0,visible).map((item,index) => {
                    return (
                        <div className="tile" key={item.id}>
                            <span className="count"> {index+1}</span>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                            </div>
                    )
                })
            }
            </div>
            {/* {visible < items.length && */}
             <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
          {/* } */}
                        {/* </section> */}
                    </div>
                </div>
        )
    }
}

export default PeginationLoadMore;