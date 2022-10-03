import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const {name,  username,  email, phone, website} = friend;
    console.log(friend)
    return (
        <div>
            <h1>Friend Details</h1>
            <h3>name: {name}</h3>
            <p>User Name: {username}</p>
            <p>Email: {email}</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
        </div>
    );
};

export default FriendDetails;