import React, { Component } from 'react';
import { musicListData } from './MusicListData'
import './MusicPlayLst.css';

class MusicplayList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            musicData: null,
            play: false,
            pause: true,
            nameList:null
        }

    }
    componentWillMount = () => {
        this.getMusicData()
    }

    getMusicData = () => {
        this.setState({ musicData: musicListData })
    }

    playSong = (ind) => {
        const { musicData } = this.state;
        const songindex = musicData.find((song, i) => i === ind)
        console.log("name", songindex)
        this.audio = new Audio(songindex.song);
        this.setState({ play: true, pause: false ,nameindexList:songindex })
        this.audio.play();

    }

    pauseSong = (ind) => {
        const {musicData,songindex} = this.state;

        const index = (ind === songindex)
        //  const pause = musicData.find((song,i) => i == ind)
        this.setState({ play: false, pause: true })
        this.audio.pause(index);
    }
    searchHandler = (event) => {
        let mp3songs = this.state.musicData.filter((mp3song) => {
            return mp3song.name.toLowerCase().indexOf(
                event.target.value.toLowerCase()) !== -1;
        })
        this.setState({ mpUrl: mp3songs })

    }

    render() {
        // console.log("musicdata", this.state.musicData)
        return (
            <div className="musicList-container">
                <div className="musicList">
                    <input type="text" onChange={this.searchHandler} />
                    <br />
                    <br />
                    <br />
                    <div className="music">
                        <ul classNam="music-list">
                            {
                                this.state.musicData.map((song, index) => {
                                    return <li className="music-list-item" key={index}>
                                        <div className="music-item-group">
                                            <div className="list-thumb">
                                                <img className="song-img" src={song.thumb} alt="song" />
                                            </div>
                                            <div className="song">
                                                <h3>{song.name}</h3>
                                                <p>{song.artist}</p>
                                            </div>
                                            <span>
                                                <button onClick={() => this.playSong(index)}>Play</button>
                                                 <button onClick={() => this.pauseSong(index)}>Pause</button>
                                            </span> 
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MusicplayList;




