import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants.js';
import { useDispatch, useSelector } from 'react-redux';
import {addConnections} from '../utils/connectionSlice.js';

const Connections = () => {
    const connections = useSelector(state => state.connection);
    console.log("Line jhhkjhkj", connections)
    const dispatch = useDispatch();

    const fetchConnections = async ()=>{
        try {
           const res = await axios.get(`${BASE_URL}/user/connections`, {withCredentials: true});
           console.log("Linjhb ", res.data.data)
           dispatch(addConnections(res.data.data))
        } catch (error) {
            //Handle Error Case
        }
    }

    useEffect(()=>{
        fetchConnections();
    } , [])

    if(!connections) return;

    if(connections.length === 0) return <h1>No connections found</h1>

    return (
        <div className='text-center my-10'>
            <h1 className='text-bold text-2xl'>Connections</h1>
            {connections.map((connect, index)=>{
                const {firstName, lastName, photoUrl, skills, gender, age, about} = connect;
                 return (
                    <div className='m-4 p-4 border rounded-lg bg-base-300'>

                      <img alt="photo" className='w-20 h-20' src={photoUrl}/>
                      <h2>{firstName + " " + lastName}</h2> 
                      <p>{about}</p>
                    </div>
                 )
            })}
        </div>
    );
};

export default Connections;