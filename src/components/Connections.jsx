import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants.js';
import { useDispatch, useSelector } from 'react-redux';
import {addConnections} from '../utils/connectionSlice.js';

const Connections = () => {
    const connections = useSelector(state => state.connection);
    const dispatch = useDispatch();

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(`${BASE_URL}/request/review/${status}/${_id}`, {}, {withCredentials: true})
        } catch (error) {
            
        }
    }

    const fetchConnections = async ()=>{
        try {
           const res = await axios.get(`${BASE_URL}/user/connections`, {withCredentials: true});
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
        <div className='flex flex-col justify-center my-10'>
            <h1 className='text-bold text-2xl'>Connections</h1>
            {connections.map((connect, index)=>{
                const {firstName, lastName, photoUrl, skills, gender, age, about} = connect;
                 return (
                    <div className='flex justify-between item-center m-4 p-4 border rounded-lg bg-base-300 w-2/3'>
                      <div>
                        <img alt="photo" className='w-20 h-20 rounded-full' src={photoUrl}/>
                     </div>
                      <div className='text-left mx-4'>
                      <h2 className="font-bold text-xl"> {firstName + " " + lastName}</h2> 
                      <p>{age + " , " + gender}</p>
                      <p>{about}</p>
                      </div>
                      <div>
                      <button className="btn btn-primary"onClick={()=>{reviewRequest("accepted", connect._id)}}>Select</button>
                      <button className="btn btn-secondary" onClick={()=>{reviewRequest("rejected", connect._id)}}>Reject</button>
                      </div>
                    </div>
                 )
            })}
        </div>
    );
};

export default Connections;