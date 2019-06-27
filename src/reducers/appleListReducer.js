import {GET_POST} from '../actions/appleMustionActionTypes';

const initialState = {
    dataloading: false,
    successfullyloaded: false,
    appleMusicList: []
  
}

const appleMustListReducer = ( state=initialState, action) => {
    console.log("reducer", action.payload)

    switch(action.type){
        case GET_POST:
        return {...state, ...action.payload}

        default :
        return state;
    }
    // return state;
}

export default appleMustListReducer;