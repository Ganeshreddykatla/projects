import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Datepicker.css';


class Datepicker extends Component {
    constructor() {
        super();
        this.state = {
            startDate: "",
            endDate: "",
            // date : new Date(),
            error: ""
        };
    }


    changeHandler = (e) => {
        const { startDate, endDate } = this.state;
        this.setState({ [e.target.name]: e.target.value })

        // // {startDate >= endDate ? console.log("suceess") : console.log("error")}
        // if(startDate>= endDate) {
        //        console.log("succfully")
        // }
        // else {
        //   console.log("date is not in right format")
        // }
        if (startDate >= endDate) {
            // console.log("Please ensure that the End Date is greater than or equal to the Start Date.")
            this.setState({ error: "Please ensure that the End Date is greater than or equal to the Start Date." })

        }
    }
    // console.log("startDate", this.state.startDate.toString());
    // console.log("endDate", this.state.endDate
    render() {
        console.log("startDate", this.state.startDate)
        console.log("endDate", this.state.endDate)

        return (
            <div className="datepicker-container">
                <Link to="/">
                    <button className="back-btn">Back </button>
                </Link>
                <div className="datepicker">
                    <div>
                        startDate:  <input type="date" className="startDate" name="startDate" data-date="" data-date-format="DD MMMM YYYY" onChange={this.changeHandler} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        endData:  <input type="date" className="endDate" name="endDate"
                            onChange={this.changeHandler} />
                        <h1>startDate:{this.state.startDate}</h1>
                        <h1>endDate:{this.state.endDate}</h1>
                        <p>{this.state.error}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Datepicker;