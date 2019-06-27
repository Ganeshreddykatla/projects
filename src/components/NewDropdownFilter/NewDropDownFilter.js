import React, { Component } from 'react';
import './NewDropDownFilter.css';

class NewDropDownFilter extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
            cities: ["hyderabad", "banglore", "chennai", "pune", "mumbai"],
            newCity: "",
            newcities: [],
            cursor: 0,

        }
    }

    toggleHanlder = () => {
        const { toggle } = this.state;
        this.setState({ toggle: !toggle })
    }

    RemoveCityHanlder = (ind) => { 
        const { cities } = this.state;
        const FindCity = cities.find((city, i) => i == ind)
        const RemoveCity = cities.filter((city, i) => i !== ind)
        this.setState({ cities: RemoveCity, newCity: FindCity }, () => { this.StoreCityHanlder() })
    }
    StoreCityHanlder = () => {
        const { newCity, newcities } = this.state;
        newcities.push(newCity)
        this.setState({ newcities })
    }

    RemoveNewCityHanlder = (ind) => {
        const { newcities, newCity } = this.state;
        const findNewCity = newcities.find((newcity, i) => i === ind)
        const RemoveNewcity = newcities.filter((newcity, i) => i !== ind)
        this.setState({ newcities: RemoveNewcity, newCity: findNewCity }, () => { this.StoreNewCityHanlder() })
    }
    StoreNewCityHanlder = () => {
        const { cities, newCity } = this.state;
        cities.push(newCity)
        this.setState({ cities })

    }
    handleKeyDown = (e) => {
        const { cursor, cities } = this.state
        if (e.keyCode === 38 && cursor > 0) {
            this.setState(prevState => ({
                cursor: prevState.cursor - 1
            }))
        } else if (e.keyCode === 40 && cursor < cities.length - 1) {
            this.setState(prevState => ({
                cursor: prevState.cursor + 1
            }))
        }
    }



    render() {

        return (
            <div class="dropdown">
                <div className="dropdown-wrapper" >
                    <div className="new-dropdown-list"  >
                        <input className="input-wrapper" type="text" onKeyDown={this.handleKeyDown} />
                        <div className="drop-down-icons" onClick={this.toggleHanlder}>  {this.state.toggle ? <i class="fa fa-chevron-down"></i> : <i class="fa fa-chevron-up"></i>}</div>
                        <ul className="new-drop-down-newcity-list">
                            {
                                this.state.newcities.map((newcity, index) => {
                                    return <li onClick={() => this.RemoveNewCityHanlder(index)} className="new-drop-down-newcity-item">{newcity}</li>

                                })
                            }
                        </ul>
                    </div>
                </div>
                <ul className={this.state.toggle ? "new-drop-down-listhide" : "new-drop-down-listshow"}>
                    {
                        this.state.cities.map((city, index) => {
                            return <li onClick={() => this.RemoveCityHanlder(index)} className={this.state.cursor === index ? "new-drop-down-list-item-active" : "new-drop-down-list-item"}>{city}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default NewDropDownFilter;