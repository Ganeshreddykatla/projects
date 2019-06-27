import React, { Component } from 'react';
import { videoPlayerData } from './VideoPlayerData';


class VideoPlayer extends Component {
    constructor() {
        super();
        this.state = {
            Videos: [],
            play: false,
            name: "",
            index: 0,

        }
    }

    componentWillMount = () => {
        this.getVideos();

    }
    getVideos = () => {
        this.setState({ Videos: videoPlayerData })
    }

    playVideo(ind) { debugger;
        console.log("play", ind);
        const { Videos } = this.state;
        const Videoindex = Videos.find((video, i) => i === ind)
        this.currentIndex = ind;
        // this.video = new this.video(Videoindex.youtubevideo);
        this.refs.vidRef.play();
        this.setState({ play: true, pause: false, name: Videoindex.name, index: ind })

    }

    pauseVideo(ind) {
        console.log("pause", ind)
        this.refs.vidRef.pause();
    }



    render() {
        console.log("video", this.state.Videos)

        return (
            <div>


                {
                    this.state.Videos.map((videoitem, index) => {
                        return <li key={index}>{videoitem.name}  <video  ref="vidRef" src={videoitem.youtubevideo}    style={{width:"400px"}} type="video/mp4" />
                            <button  onClick={() => this.playVideo(index)}>Play!</button>
                            <button  onClick={() => this.pauseVideo(index)}>Pause!</button>
                        </li>
                    })
                }


            </div>
        )
    }
}

export default VideoPlayer;