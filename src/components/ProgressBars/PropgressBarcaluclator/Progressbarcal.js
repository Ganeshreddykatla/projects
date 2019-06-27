import React, {Component} from 'react';
import ProgressBarsub from './progressbarcalsub';
import './Progressbarcal.css';


class progressbarcal extends Component{
    constructor() {
        super()
        const progressInit = 2
        const goalInit = 5
        this.state = {
          progress: progressInit,
          validProgress: progressInit,
          goal: goalInit,
          validGoal: goalInit
        };
        
        this.changeProgress = this.changeProgress.bind(this);
        this.changeGoal = this.changeGoal.bind(this);
      }
      
      changeProgress(event) {
        if (event.target.value) {
          this.setState({progress: event.target.value}) 
          this.setState({validProgress: event.target.value}) 
        } else {
          this.setState({progress: event.target.value}) 
        }
      }
      
      changeGoal(event) {
        if (event.target.value) {
          this.setState({goal: event.target.value}) 
          this.setState({validGoal: event.target.value}) 
        } else {
          this.setState({goal: event.target.value}) 
        }
      }
      
      
      render() {
        return(
          <div>
            <label className="block mbq">Progress</label>
            <input type="text" className="mb1" value={this.state.progress} onChange={this.changeProgress}/>
            <label className="block mbq">Goal</label>
            <input type="text" value={this.state.goal} onChange={this.changeGoal} />
            <div className="progress-container">
              <ProgressBarsub 
                progress={this.state.validProgress}
                goal={this.state.validGoal}
                />
            </div>
          </div>
        )
      }
    }

export default progressbarcal