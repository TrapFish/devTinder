import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import Footer from './Footer.jsx';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants.js';
import { useDispatch,useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(state => state.user);
    const [isLoading, setIsLoading] = useState(false)
    const fetchUser = async () =>{
        if(userData) return;
        try {
            setIsLoading(true);
            const res = await axios.get(`${BASE_URL}/profile/view`, {withCredentials: true});
            dispatch(addUser(res?.data))
        } catch (error) {
            console.log(error);
            if(error?.status === 401){
                navigate('/login');
            } else {
                navigate('/login');
            }
           
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
            fetchUser();
    } , [])

    return (
        <div>
            {isLoading && (
                <>
                  <h2>Loading ....</h2>
                </>
            )}
            {!isLoading && (
                <>
                    <NavBar />
                    <Outlet />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Body;