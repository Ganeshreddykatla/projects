import React, {Component} from 'react';
import {ListItemData} from './ListItemsWithClickData';
import './LIstItemsWithClick.css';

class ListItemWithClick extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeList: null,
            activeListType: null
        }
    }
        onClickList(index, key) {debugger
            this.setState(prevState => ({
                [key]: prevState[key] === index ? null : index
            }))
        }
        render() {
            console.log("listItemData", ListItemData)
            const { activeList, activeListType } = this.state;
            return (
                <div className="itemListContiner">
                    <h5 className="hadingName">COLLECTIONS</h5>
                    <ul className="ItemsList">
                        {
                            ListItemData.map((item, index) => {
                                return <li className="itemCategory" key={index} >
                                    <span className={activeListType === index ? "active listCategoryName" : "listCategoryName"} onClick={() => { this.onClickList(index, 'activeListType') }}>
                                        {item.itemCategory}
                                        <span className="carot">
                                            <img src={activeListType === index ?  "https://cdn4.iconfinder.com/data/icons/podcast-collection/100/caret-512.png": "https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronRight-512.png" } /></span>
                                    </span>
    
                                    <ul className="categoryList" >
                                        {activeListType === index &&
                                            item.ItemList ? item.ItemList.map((newItem, i) => {
                                                return <li key={i} onClick={() => { this.onClickList(i, 'activeList') }}>
                                                    <span className={activeList === i ? "active" : ""}>{newItem.itemType} </span>
                                                    <span className="carot">
                                                        <img src={activeList === i ?  "https://cdn4.iconfinder.com/data/icons/podcast-collection/100/caret-512.png" : "https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronRight-512.png"}  />
                                                    </span>
                                                    <ul className="categoryList show" >
                                                        {activeList === i &&
                                                            newItem.itemSubTypes ? newItem.itemSubTypes.map((subItem, ind) => {
                                                                return <li key={ind}>{subItem.Item}</li>
                                                            }) : null
                                                        }
                                                    </ul></li>
                                            }) : null
                                        }
                                    </ul>
                                </li>
                            })
                        }
                    </ul>
                </div>
            )
        }
}

    
export default ListItemWithClick;