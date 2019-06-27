import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './FormpopupModal.css';

class FormpopupMoal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            name: "",
            email: "",
            personalDetails: []
        }
    }

    handlePopmodal = () => {
        const { isOpen } = this.state
        this.setState({ isOpen: !isOpen }, () => { this.resetFeilds() })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, personalDetails } = this.state;
        personalDetails.push({ name, email })
        this.setState({ personalDetails }, () => { this.handlePopmodal() })
    }

    resetFeilds = () => {
        this.setState({ name: "", email: "" })
    }
    render() {
        const { isOpen } = this.state
        return (
            <div className="formpopupmodal-container">
                <Link to="/">
                    <button className="back-btn">Back </button>
                </Link>
                <div className="formpopupmodal">
                    <button className="isOpen" onClick={this.handlePopmodal}>clickme</button>
                    {
                        this.state.isOpen ? <div>
                            <div className="bg-modal">
                                <div className="modal-contents">
                                    <div className="close" onClick={this.handlePopmodal} >+</div>
                                    <img className="popimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfM8leIaaVLMrn5yzoR5xJ5_LUOJUf0wW8H9rYYd2GQ8j3eCS" alt="" />
                                    <form onSubmit={this.handleSubmit}>
                                        <input
                                            className="input-Wrapper"
                                            value={this.state.name}
                                            name="name"
                                            type="text"
                                            placeholder="Name"
                                            onChange={this.handleChange}
                                        />
                                        <input
                                            className="input-Wrapper"
                                            value={this.state.email}
                                            name="email"
                                            type="email"
                                            placeholder="E-Mail"
                                            onChange={this.handleChange}
                                        />
                                        <button type="submit" className="submit-btn">Submit</button>
                                    </form>

                                </div>
                            </div>
                        </div> : null
                    }
                </div>
                <div className="table-container">
                    <table className={isOpen ? "hide" : "show"}>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>EMAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.personalDetails.map((person, index) => {
                                    return <tr key={index}>
                                        <td>{person.name}</td>
                                        <td>{person.email}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default FormpopupMoal;