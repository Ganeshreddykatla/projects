import React, {Component} from 'react';
import TodoItem from './TodoItems';
import TodoForm from './TodoForm';

class TodoList extends Component {
  constructor(){
    super();
    this.state = {
      tasks:[{
        name:"Buy Milk",
        completed:false
      },
      {
        name:"Buy Cheese",
        completed:false
      },
      {
        name:"Buy Bread",
        completed:false
      }],
      currentTask:'' 
    }
 }
deleteTask = (index) =>{
  console.log(index)

  let tasks = this.state.tasks;
  tasks.splice(index,1);

  this.setState({
    tasks
  })
  
}
addTask = (evt) => { 
  evt.preventDefault();
  let tasks = this.state.tasks;
  let currentTask = this.state.currentTask;
  tasks.push({
    name:currentTask,
    completed:false
  })

  this.setState({
    tasks,
    currentTask:'' 
  })


}
updateTask = (newValue) =>{
  this.setState({
    currentTask:newValue.target.value
  })
}

editTask = (index, newValue) =>{
 var tasks = this.state.tasks;
 var task = tasks[index];
 task['name'] = newValue;
 this.setState({
  tasks
 })
}


// changeStatus = (index) =>{
//  var tasks = this.state.tasks;
//  var task = tasks[index];
//  task.completed = !task.completed;
//  this.setState({
//    tasks:tasks
//  })
// }
 render() {
    return (
      <section>
       <TodoForm 
            currentTask={this.state.currentTask}
            updateTask={this.updateTask}
            addTask={this.addTask}
        />
        <ul>
        {
          this.state.tasks.map((task, index) => {
            return <TodoItem 
                    key={index} 
                    // clickHandler={this.changeStatus} 
                    index={index} 
                    deleteTask={this.deleteTask}
                    editTask={this.editTask}
                    details={task}
                     />
          })
        }
          
        </ul>
      </section>
    )
  }
}

export default TodoList

