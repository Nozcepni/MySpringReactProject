import React from 'react';
import defaultPicture from '../assets/profile.png'
import {Link} from 'react-router-dom'

const UserListItem = (props) => {

    const { user } = props
    let imageSource = defaultPicture;

    if (user.image) {
        imageSource = user.image;
    }

    return (
        <Link to={`/user/${user.username}`} className="list-group-item list-group-item-action" key={user.username}>

            <img width="32" height="32" className="rounded-circle" alt={`${user.username} profile`} src={imageSource} />
            <span className="pl-2">
                {user.username}
            </span>

        </Link>
    );
};

export default UserListItem;
