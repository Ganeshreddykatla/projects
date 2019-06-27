import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TodoItem from './TodoItem';
import './Todoproduct.css';


class TodoProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [{
                name: "Buy Milk",

            },
            {
                name: "Buy Cheese",

            },
            {
                name: "Buy Bread",

            }],
            currentName: "",
        }
    }

    changeHandler = (e) => {
        this.setState({ currentName: e.target.value })

    }


    addtaskHandler = (e) => {
        e.preventDefault();
        const { tasks, currentName } = this.state;
        tasks.push({ name: currentName })
        this.setState({ tasks })
    }


    DeleteTaskItem = (ind) => {
        const { tasks } = this.state;
        const DeleteTaskItem = tasks.filter((item, i) => i !== ind)
        this.setState({ tasks: DeleteTaskItem })
    }

    EditTaskItem = (index, editItem) => {
        const { tasks } = this.state;
        var task = tasks[index];
        task['name'] = editItem;
        this.setState({
            tasks
        })
    }


    render() {
        return (
            <div className="Todoproduct-container">
                <Link to="/">
                    <button className="back-btn">Back </button>
                </Link>
                <form className="todo-from" onSubmit={this.addtaskHandler}>
                    <input className="inputwrapper" type="text" value={this.state.currentName} onChange={this.changeHandler} />
                    <button type="submit">submit</button>
                </form>

                <section>
                    <ul className="todo-listItems">

                        {
                            this.state.tasks.map((task, index) => {
                                return <TodoItem
                                    key={index}
                                    index={index}
                                    DeleteTaskItem={this.DeleteTaskItem}
                                    EditTaskItem={this.EditTaskItem}
                                    task={task}
                                />
                            })
                        }
                    </ul>
                </section>
            </div>
        )
    }
}

export default TodoProduct;