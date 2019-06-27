import React, { Component } from 'react';
import { NewMusicList } from './NewMusicListData';
import './NewMusicList.css';


class Newmusiclist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicList: NewMusicList,
            play: false,
            name: "",
            index: 0,
        }
    }


    toggleHanlder = (ind) => {
        const { play, index } = this.state;
        (play && index === ind) ? this.pauseSong(ind) : this.playSong(ind);
    }

    playSong = (ind) => {
        this.audio && this.audio.pause()
        const { musicList } = this.state;
        const songindex = musicList.find((song, i) => i === ind)
        this.currentIndex = ind;
        this.audio = new Audio(songindex.song);
        this.setState({ play: true, pause: false, name: songindex.name, index: ind })
        this.audio.play();

    }

    pauseSong = (i) => {
        const { index } = this.state;
        if (this.currentIndex && this.currentIndex === i || index === i) {
            this.setState({ play: false, pause: true })
            this.audio.pause();
        }

    }


    nextbutton = () => {
        this.audio && this.audio.pause()
        this.playSong(this.state.index + 1)

    }

    prevButton = () => {
        this.audio && this.audio.pause()
        this.playSong(this.state.index - 1)

    }


    render() {
        console.log("index", this.state.index)
        console.log("toggle", this.state.toggle)

        return (
            <div className="newmusic-container">
                <div className="muscilist">
                    <p className="playsong">{this.state.name}</p>
                    <div className="btn-wrapper">
                    <button className="forward-btn" onClick={() => this.nextbutton()} disabled={this.state.index > 8}><i class="fa fa-step-forward" style={{fontSize:"36px"}}   ></i></button>
                    <button className="toggle-btn" onClick={() => this.toggleHanlder(this.state.index)}>
                        <i
                            class={"fa " + (this.state.play && this.state.index === this.state.index ? "fa-pause-circle-o" : "fa-play-circle")} style={{ fontSize: "36px" }} />
                    </button>
                    <button className="backward-btn" onClick={() => this.prevButton()} disabled={this.state.index < 1}><i class="fa fa-step-backward" style={{fontSize:"36px"}}></i></button>
                   </div>
                    <ul className="muisc-itemslist">
                        {
                            this.state.musicList.map((song, index) => {
                                return <li  > 
                                     <button className="toggle-btn-list" onClick={() => this.toggleHanlder(index)}>
                                        <i
                                            class={"fa " + (this.state.play && this.state.index === index ? "fa-pause-circle-o" : "fa-play-circle")} style={{ fontSize: "24px" }} />
                                    </button><span className="toggle-icon-span"><strong>{index + 1}.</strong></span>{song.name}
                                   

                                </li>
                            })

                        }
                    </ul>

                </div>
            </div>
        )
    }
}

export default Newmusiclist;