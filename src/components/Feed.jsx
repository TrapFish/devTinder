import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {addFeed} from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
    const feed = useSelector(store=> store.feed);
    const dispatch = useDispatch();

    const getFeed = async () => {
        if(feed) return;
        try {
            const res = await axios.get(`${BASE_URL}/user/feed`,{withCredentials: true});
            dispatch(addFeed(res?.data));
        } catch (error) {
            console.log("Line 11::", error)
        }

    }

    useEffect(()=> {
        getFeed();
    }, []);

    return (
        <div className="flex justify-center my-10">
            {feed?.map((feedInfo, index)=>{
                return (
                    <React.Fragment key={index}>
                            <UserCard user={feedInfo}/>
                    </React.Fragment>
                )
                  
            })}
           
        </div>
    );
};

export default Feed;