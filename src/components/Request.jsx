import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addRequests} from '../utils/requestSlice';

const Request = () => {
    const requests = useSelector(store => store.request);
    const dispatch = useDispatch();

    const fetchRequest  = async () =>{
            try {
                const res = await axios.get(`${BASE_URL}/user/request/recieved`, {withCredentials: true});
                console.log("linetyyyu", res)
                dispatch(addRequests(res.data.data))
                
            } catch (error) {
                
            }
    }

    useEffect(()=>{
        fetchRequest();
    },[])
    if(!requests) return;

    if(requests.length === 0) return <h1>No requests found</h1>

    return (
        <div className='flex flex-col justify-center my-10'>
            <h1 className='text-bold text-2xl'>Qequests</h1>
            {requests.map((request, index)=>{
                const {firstName, lastName, photoUrl, skills, gender, age, about} = request.fromUserId;
                 return (
                    <div key={index} className='flex m-4 p-4 border rounded-lg bg-base-300 w-1/2'>
                      <div>
                        <img alt="photo" className='w-20 h-20 rounded-full' src={photoUrl}/>
                     </div>
                      <div className='text-left mx-4'>
                      <h2 className="font-bold text-xl"> {firstName + " " + lastName}</h2> 
                      <p>{age + " , " + gender}</p>
                      <p>{about}</p>
                      </div>
                      
                    </div>
                 )
            })}
        </div>
    );
};

export default Request;