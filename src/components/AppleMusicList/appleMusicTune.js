import React, {Component} from 'react';
import Tune from './tune'

class appleMusicTune extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        console.log("applemusiclist in appletune", this.props.tuneList)
        // console.log("applemusiclist in appletune", this.props.isLoading)
        return(
     <div className="appleMusic-row">
       
       { this.props.tuneList.map((tune, ind) => {
           return <div col="appleMusic-col"> <Tune key={ind}  tune={tune}  /> </div>
         }) 
        }
       </div>
      
        )
    }
}

export default appleMusicTune;