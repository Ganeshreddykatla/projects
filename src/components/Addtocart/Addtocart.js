import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Addtocart.css';
class addtocart extends Component {
    constructor() {
        super();
        this.state = {
            item: "",
            items: []
        }
    }

    handleChange = (e) => {
        this.setState({ item: e.target.value })
        console.log("item", this.state.item)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { item, items } = this.state;
        items.push(item)
        this.setState({ items }, () => { this.resetfield() })
        console.log("items", this.state.items)
    }

    resetfield = () => {
        this.setState({ item: "" })
    }
    handelDelete =(ind) =>{
        const {items} = this.state
        let filterItems = items.filter((item,i) => i !== ind)
        this.setState({items:filterItems})
    }


    render() {
        return (
            <div className="addtocart-container">
                <Link to="/">
                    <button className="back-btn">Back </button>
                </Link>
                <form className="add-form" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.item} onChange={this.handleChange} />
                </form>
                <ol className="add-list-items">
                    {
                        this.state.items.map((item, index) => {
                            return <li className="add-item" key={index}>{item.toUpperCase()}
                            <button className="Remove-btn" onClick={() => this.handelDelete(index)}>+</button></li> 
                        })
                    }
                </ol>
            </div>
        )
    }
}

export default addtocart;