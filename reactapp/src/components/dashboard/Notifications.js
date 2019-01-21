import React from 'react';
import momemt from 'moment'

const Notifications=(props)=>{
    const {notifications}= props
    return(
        <div className="section">
        <div className="card z-depth-0">
        <div className="card-content">
        <span className="card-titile">Notifications</span>
        <ul className="Notifications">
        {notifications && notifications.map(item => {
            return(
            <li key={item.id}>
            <span className="pink-text">{item.user}</span>
            <span className="blue=text"> {item.content}</span>
            <div className="grey-text note-date">
            {momemt(item.time.toDate()).fromNow()}
            </div>
            </li>)
        })}
        </ul>
        </div>
        </div>   
        </div>

    )
}
export default Notifications