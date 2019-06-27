import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {appleMusicGetpost} from '../../actions/appleMusicAction';
import AppleMusicListTune from './appleMusicTune';
import './AppleMusicList.css';
// import axios from 'axios';

class AppleMusicList extends Component {
  constructor() {
    super()
    this.state = {
      pageNo: 1,
      size: 15,
      musicList: undefined,
      allMusicList: undefined,
      isLoading: false,
      musiclist:[]

    }
  }
  componentWillMount = () => {
   this.props.appleMusicGetpost()
};
componentWillReceiveProps= (nextprops)=>{
console.log("nexprops", nextprops)
this.setState({musiclist: nextprops.appleMusicList}, () => {this.Getdata()})
}

// getUsers = () => { 
//   axios
//     .get("https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/100/explicit.json")
//     .then(res => this.setState({musiclist: res.data.feed.results}, () => {this.Getdata()}))
//     .catch(err => {
//       console.log(err);
//       return null;
//     });
// };
  Getdata = () => { 
    let tunes = this.state.musiclist
    let newtuneList = tunes.slice(0, this.state.size)
    this.setState({
      isLoading: false,
      musicList: newtuneList,
      allMusicList: tunes
    })
  }

  handleNextPage = () => { debugger
    let nextPageNo = this.state.pageNo;
    if (nextPageNo * this.state.size >= this.state.allMusicList.length) {
      nextPageNo = 1;
    }
    let allMusicList = [...this.state.allMusicList];
    let from = nextPageNo * this.state.size;
    let nextList = allMusicList.slice(from, from + this.state.size);
    nextPageNo = nextPageNo + 1;
    this.setState({
      musicList: nextList,
      pageNo: nextPageNo
    });
  };

  handlePrevPage = () => {
    let prePageNo = this.state.pageNo;
    if (prePageNo === 0 || prePageNo === 6) {
      prePageNo = 5;
    }
    let allMusicList = [...this.state.allMusicList];
    let from = prePageNo * (this.state.size - 1);
    prePageNo = prePageNo - 1;
    let newMusicList =  allMusicList.slice(from, from + this.state.size)
    this.setState({
      musicList: newMusicList,
      pageNo: prePageNo
    });
  };

  render() {
       console.log("fhdjfjdfjfkdf=======>", this.props.appleMusicList)
       console.log("mustcilist0", this.state.musiclist)
    return (
      <div className="App-container">
          <Link to="/">
          <button className="back-btn">Back </button>
          </Link>
        {
          !this.state.musicList ? <h1 className="loading">isLoading.....</h1> : <div className="container">
              <h2> Apple Music New Releases for mm/dd/yyyy </h2>
              <AppleMusicListTune
                tuneList={this.state.musicList}
              />
              <div className="pagination">
                <button className="btn" onClick={this.handlePrevPage}>
                  Previous
               </button>
                <button className="btn btn-next" onClick={this.handleNextPage}>
                  Next
               </button>
              </div>
          </div>

        }
      </div>

    )
  }

}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    appleMusicList: state.appleListReducer.appleMusicList
  }
}

const mapDispatchToProps = {
  appleMusicGetpost
}

export default connect(mapStateToProps, mapDispatchToProps)(AppleMusicList);
