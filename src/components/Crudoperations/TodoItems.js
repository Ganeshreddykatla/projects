import React, {Component} from 'react';


class TodoItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEditing:false
    }
  }
  
  toggleState = () => {
    const { isEditing } = this.state;
    this.setState({
      isEditing:!isEditing
    })
  }

  updateItem = (evt) => { debugger
    evt.preventDefault();
    this.props.editTask(this.props.index, this.input.value);
    this.toggleState();
  }


  renderItem = () =>{
    return (
    //   <li onClick={ () => {
    //     this.props.clickHandler(this.props.index);
    //   }} className={this.props.details.completed ? 'completed' : 
    // ''}>
    <li>
        {this.props.details.name}
        <button onClick={(evt) => {
        //   evt.stopPropagation();
          this.props.deleteTask(this.props.index)
        }}>Delete</button>
          <button onClick={(evt) => {
        //   evt.stopPropagation();
          this.toggleState()
        }}>Edit Item</button>

      </li>    
    )
  }
  renderForm = () =>{
    return (
     <form onSubmit={this.updateItem}>
      <input type="text" ref={(value) => {
        this.input = value
      }}  defaultValue={this.props.details.name} />
      <button type="submit">Update Item</button>  
    </form>
    )
  }
  render(){
    const { isEditing } = this.state;
  return (
    <section>
    {
      isEditing ? this.renderForm() :  this.renderItem()
    }
     
    </section> 
       )
    }
}




export default TodoItem;