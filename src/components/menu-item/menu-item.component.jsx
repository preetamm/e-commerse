import React from 'react';
import {withRouter} from 'react-router-dom';
const MenuItem = ({title, imageUrl, id, size, history, linkUrl,match }) => (
    <div  className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}>

        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop now</span>
        </div>
    </div>
)

export default withRouter( MenuItem);


