import React, {Component} from 'react';

class ProgressBar extends Component {
  calculateProgress(progress, goal) {
    if (Number(progress) === 0) {
      return 0.75 + "%"
    }
    if (Number(goal) >= Number(progress)) {
      return (progress/goal) * 100 + "%"
    } else {
      return 100 + "%"
    }
  }
  
  render() {
    const { progress, goal } = this.props
    return (
      <div 
        className="progress-bar"
        style={{width: this.calculateProgress(progress, goal) }}
       ></div>
    )
  }
}
export default ProgressBar;