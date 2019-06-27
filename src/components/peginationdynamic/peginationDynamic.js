import React, {Component} from 'react';
import axios from 'axios';
import './peginationDynamic.css';

class peginationDynamic extends Component{
    constructor(){
        super();
        this.state = {
            personList : [],
            currentPage: 1,
            personListperPage: 10
        }
    }

componentWillMount = () => {
    this.getData()
}

    getData = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => this.setState({ personList: res.data }))
            .catch(err => {
                console.log(err);
                return null;
            })
    }

    
  handleClick = (event) =>{
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

    render(){
       const {personList, currentPage, personListperPage} = this.state;
        // Logic for displaying todos
    const indexOfLastTodo = currentPage * personListperPage;
    const indexOfFirstTodo = indexOfLastTodo - personListperPage;
    const currentpersonLists = personList.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderpersonList = currentpersonLists.map((person, index) => {
      return <li className="personList-item" key={index}>{person.id} || {person.title}</li>;
    });

     // Logic for displaying page numbers
     const pageNumbers = [];
     for (let i = 1; i <= Math.ceil(personList.length / personListperPage); i++) {
       pageNumbers.push(i);
     }
      
 
     const renderPageNumbers = pageNumbers.map(number => {
       return (
         <li
           key={number}
           id={number}
           className="pageNumberList-Item"
           onClick={this.handleClick}
         >
       {number}
         </li>
       );
     });
        return(
            <div className="pagenation-container">
                <div className="personList-wrapper">
        <ul className="personList">
          {renderpersonList}
        </ul>
        </div>
        <div className="pageNumberList-wrapper">
        <ul  className="pageNumberList" id="page-numbers">
       {renderPageNumbers}
        </ul>
        </div>
      </div>
        )
    }
}

export default peginationDynamic;