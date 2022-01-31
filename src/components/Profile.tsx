import React, {FC} from 'react';
import {IUser} from "../types/types";

interface ProfileProps{
    user: IUser
}

const Profile: FC<ProfileProps> = (user) => {

    return (
        <div className='user'>
            <h3 className='user__title'>Персональные данные</h3>
            <p className='user__row'>
                <span className='user__param'>Name</span>
                <span className='user__value'>{user.user.name}</span>
            </p>
            <p className='user__row'>
                <span className='user__param'>Username</span>
                <span className='user__value'>{user.user.username}</span>
            </p>
            <p className='user__row'>
                <span className='user__param'>Email</span>
                <span className='user__value'>{user.user.email}</span>
            </p>
            <p className='user__row'>
                <span className='user__param'>Address</span>
                <span className='user__value'>{user.user.address.street}{user.user.address.suite}{user.user.address.city}</span>
            </p>
            <p className='user__row'>
                <span className='user__param'>Phone</span>
                <span className='user__value'>{user.user.phone}</span>
            </p>
            <p className='user__row'>
                <span className='user__param'>Website</span>
                <span className='user__value'>{user.user.website}</span>
            </p>
            <p className='user__row'>
                <span className='user__param'>Company</span>
                <span className='user__value'>{user.user.company.name}</span>
            </p>
        </div>
    );
};

export default Profile;