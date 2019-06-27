import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';


class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-container">
                <ul className="item-List" >
                    <li className="item">
                        <Link to="/applemusiclist">
                            applemusic
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/addrow">
                            Addrow
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/addtocart">
                            Addtocart
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/datepicker">
                            Datepicker
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/listitemwithclick">
                            ListItemWithclick
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/formpopupmodal">
                            FormpopupModal
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/pegination">
                            Pegination
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/peginationdynamic">
                            peginationdynamic
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/peginationloadmore">
                            PeginationLoadMore
                      </Link>
                    </li>

                    
                    <li className="item">
                        <Link to="/crudoperations">
                            Crud Operations
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/newcrud">
                           New crud
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/musicplaylist">
                           MusicPlayList
                      </Link>
                    </li>

                    
                    <li className="item">
                        <Link to="/newmusiclist">
                          NewMusicList
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/videoplayer">
                          Video Player
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/progressbarcolor">
                          ProgressBar color
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/progressbarcal">
                          ProgressBar caluclator
                      </Link>
                    </li>

                    <li className="item">
                        <Link to="/dropdownfilter">
                          DropDownfilter
                      </Link>
                    </li>

                    
                    <li className="item">
                        <Link to="/newdropdownfilter">
                          NewDropDownFilter
                      </Link>
                    </li>


                </ul>
            </div>
        )
    }
}

export default Dashboard;