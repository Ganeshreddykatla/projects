import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }

    toggleState = () => {
        const { isEditing } = this.state;
        this.setState({
            isEditing: !isEditing
        })
    }

    updateItem = (e) => {
        e.preventDefault();
        this.props.EditTaskItem(this.props.index, this.input.value);
        this.toggleState();
    }

    renderItem = () => {
        return (
            <li>
                {this.props.task.name}
                <button onClick={() => {
                    this.props.DeleteTaskItem(this.props.index)
                }}>Delete</button>
                <button onClick={() => {
                    this.toggleState()
                }}>Edit Item</button>

            </li>
        )
    }

    renderForm = () => {
        return (
            <form onSubmit={this.updateItem}>
                <input type="text"
                    ref={(value) => { this.input = value }}
                    defaultValue={this.props.task.name}
                />
                <button type="submit">Update Item</button>
            </form>
        )
    }
    render() {
        const { isEditing } = this.state;
        return (
            <div>
                <section>
                    {
                        isEditing ? this.renderForm() : this.renderItem()
                    }
                </section>
            </div>
        )
    }
}

export default TodoItem;