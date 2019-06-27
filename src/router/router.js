import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import AppleMusicList from '../components/AppleMusicList/AppleMusicList';
import Addrow from '../components/Addrow/Addrow';
import Addtocart from '../components/Addtocart/Addtocart';
import Datepicker from '../components/Datepicker/Datepicker';
import LIstItemWithClick from '../components/ListItemsWithClick/ListItemsWithClick';
import FormpopupModal from '../components/FormpopupModal/FormpopupModal';
import Pegination from '../components/pagination/pagination';
import PeginationDynamic from '../components/peginationdynamic/peginationDynamic';
import PeginationLoadMore from '../components/PeginationLoadMore/PeginationLoadMore';
import CrudOperations from '../components/Crudoperations/Crudoperations';
import NewCrud from '../components/NewCrud/Todoproduct';
import MusicPlayList from '../components/MusicPlayList/MusicPlayList';
import NewMusicList from '../components/NewMusicList/NewMusicList';
import videoPlayer from '../components/VideoPlayer/VideoPlayer';
import ProgressColor from '../components/ProgressBars/Progressbarcolors/progressbarcolors';
import Progressbarcal from '../components/ProgressBars/PropgressBarcaluclator/Progressbarcal';
import DropDownFilter from '../components/DropDownFilter/DropDownFilter';
import NewDropDwonFiler from '../components/NewDropdownFilter/NewDropDownFilter';

class routerCompoent extends Component{

    render(){
        return(
            <Router>
            <div>
                <Route exact path="/" component={Dashboard}/>
                <Route  path="/applemusiclist" component={AppleMusicList}/>
                <Route  path="/addrow" component={Addrow}/>
                <Route  path="/addtocart" component={Addtocart}/>
                <Route  path="/datepicker" component={Datepicker}/>
                <Route  path="/listitemwithclick" component={LIstItemWithClick}/>
                <Route  path="/formpopupmodal" component={FormpopupModal}/>
                <Route  path="/pegination" component={Pegination}/>
                <Route  path="/peginationdynamic" component={PeginationDynamic}/>
                <Route  path="/peginationloadmore" component={PeginationLoadMore}/>
                <Route  path="/crudoperations" component={CrudOperations}/>
                <Route  path="/newcrud" component={NewCrud}/>
                <Route  path="/musicplaylist" component={MusicPlayList}/>
                <Route  path="/newmusiclist" component={NewMusicList}/>
                <Route  path="/videoplayer" component={videoPlayer}/>
                <Route  path="/progressbarcolor" component={ProgressColor}/>
                <Route  path="/progressbarcal" component={Progressbarcal}/>
                <Route  path="/dropdownfilter" component={DropDownFilter}/>
                <Route  path="/newdropdownfilter" component={NewDropDwonFiler}/>
                </div>
                </Router>
        )
    }
}

export default routerCompoent;