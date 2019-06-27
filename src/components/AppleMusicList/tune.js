import React, {Component} from 'react';



class Tune extends Component{

    render(){
        console.log("tunes--->", this.props.tune)
        return(
            <React.Fragment>
                <div className="col">
            <img src={this.props.tune.artworkUrl100} alt={this.props.tune.name} />
            { this.props.tune.contentAdvisoryRating ? <span className="explicit-rating">E</span> : null }

            <div className="text-container">
              <p>{this.props.tune.name}</p>
              <p className="artistName">{this.props.tune.artistName}</p>
            </div>
            </div>
          </React.Fragment>
        )
    }
}

 export default Tune;