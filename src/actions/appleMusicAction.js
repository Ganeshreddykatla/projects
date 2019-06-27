import { GET_POST } from './appleMustionActionTypes';
import Axios from 'axios';


export const updateComponentState = (type,payload) => {
    return{
        type,
        payload
    }
}

export const appleMusicGetpost = () => dispatch => {

    const url = 'https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/100/explicit.json'
    Axios.get(url)
    .then(res => {
    dispatch(updateComponentState(GET_POST, {
                dataloading: false,
                successfullyloaded: true,
                appleMusicList: res.data.feed.results
            }));
    })
}