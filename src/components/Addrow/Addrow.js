import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Addrow.css';
class Addrow extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:"",
            items:[],
            row:null,
            age:"",
            name:"",
            rows:[{}]
        }
    }

    handleChange = (e) => {
    // this.setState({item:e.target.value})
    this.setState({[e.target.name]:e.target.value})
    // console.log("item", this.state.item);
    // console.log("name", this.state.name);
    // console.log("age", this.state.age);
    }

    handleSubmit = () => {
        const {item, items} = this.state;
        items.push(item)
        this.setState({items}, () => {this.resetfield()})
        // console.log("items", this.state.items)
    }
    resetfield = () => {
        this.setState({item: ""})
    }
    handleAddrow = () => {debugger
        const {row, rows } = this.state;
        rows.push(row)
        this.setState({row})
        console.log("rows", this.state.rows)
    }
    

    render(){

        return(
            <div className="addrow-container">
                 <Link to="/">
          <button className="back-btn">Back </button>
          </Link>
                <div className="addrow">
                    <ul className="list-items">
                    {
                        this.state.items.map((item,index) => {
                            return <li className="item" key={index}>{item}</li>
                        })
                    }
                    </ul>
              <input type="text" value={this.state.item} name="item" onChange={this.handleChange} />
              <button onClick={this.handleSubmit} >Add#{this.state.items.length}</button>
              </div>
              <div className="addrow-wrapper">
                  <table>
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>NAME</th>
                              <th>AGE</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.rows.map((row,ind) => {
                                      return <tr key={ind}>
                                          <td>#{ind+1}</td>
                                          <td><input type="text" name="name" onChange={this.handleChange}/></td>
                                          <td><input type="text" name="age" onChange={this.handleChange} /></td>
                                      </tr>
                                  })
                              }
                              </tbody>
                      </table>
                      <button className="addrow-btn"  onClick={this.handleAddrow}>Addrow </button>
                  </div>
                </div>
        )
    }
}

export default Addrow;