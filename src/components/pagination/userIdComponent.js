import React from 'react';

const userIdComponent = (props) => {
    return(
        <button className="the-btn" value={props.name} onClick={props.onClick}>{props.name}</button>
    )
}

export default userIdComponent