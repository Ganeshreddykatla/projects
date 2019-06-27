import React, { Component } from 'react';
import './DropDownFilter.css';


class DropDownFilter extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            cities: ["hyderabad", "mumbai", "chennai", "pune", "banglore"],
            city: "",
            newcities: [],
            currentList:0
        
        };
    }

    toggleHanlder = () => {
        const {toggle} = this.state;
        this.setState({ toggle: !toggle })
    }

    removeCityHandler = (ind) => { 
        const { cities } = this.state;
        const findcity = cities.find((city, i) => i === ind)
        const Removecities = cities.filter((city, i) => i !== ind)
        this.setState({ cities: Removecities, city: findcity }, () => { this.storeCityHandler() })
    }


    storeCityHandler = () => {
        const { city, newcities } = this.state;
        newcities.push(city);
        this.setState({ newcities })
    }

    removeNewcityHandler = (ind) => {
        const { newcities, cities, city } = this.state
        const findNewcity = newcities.find((newcity, i) => i === ind)
        const removeNewcities = newcities.filter((newcity, i) => i !== ind)
        this.setState({ newcities: removeNewcities, city: findNewcity }, () => { this.StoreNewcityHandler() })
    }


    StoreNewcityHandler = () => {
        const { cities, city } = this.state;
        cities.push(city);
        this.setState(cities)

    }

    selectItemkeyDownHandler = (e) => {
       console.log("selectdownahndler", e.target.value)

    }


    render() {
        const { cities, newcities } = this.state;
        const newStorecities = newcities.map((newcity, index) => {
            return <li className="newcity-list-item" >{newcity}<span><button onClick={() => { this.removeNewcityHandler(index) }} className="btn-remove">+</button></span></li>
        })

        return (
            <div className="dropdown-container">
                <div className="dropdown">
                    <div className="dropdown-input">

                        <input className="input-wrapper"
                            id="input"
                            type="text"
                            onClick={this.toggleHanlder}
                        />
                        <ul className="newcity-list">
                            {newStorecities}
                        </ul>
                        <img className="drop-img"
                            src={this.state.toggle ?  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBDYcIB9KO_IuX7uWNKrrc4RP5IqDG34F3ge7jUp7tGhtT2uz":"https://image.flaticon.com/icons/png/512/7/7645.png"  } />
                    </div>
                    <div className={this.state.toggle ? "selectivesshow" : "selectiveshide" }>
                        <ul  className="dropdown-list">
                            {
                                cities.map((city, index) => {
                                    return <li class="list-item" onClick={() => { this.removeCityHandler(index) }}>{city}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default DropDownFilter;



// https://stackoverflow.com/questions/50257057/how-to-navigate-through-li-elements-using-arrow-keys-jquery