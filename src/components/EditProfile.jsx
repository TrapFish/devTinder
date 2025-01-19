import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import Alert from './Alert';
import UserCard from './UserCard';
import { addUser } from '../utils/userSlice';

const EditProfile = () => {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [updateCompleted, setUpdateCompleted] = useState(false);
    const [userDetail, setUserDetail] = useState({
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        photoUrl: userData?.photoUrl,
        gender: userData?.gender,
        age: userData?.age,
        skills: userData?.skills,
        about: userData?.about
    });

    const [newSkills, setNewSkills] = useState('');

    const [removedSkills, setRemoveSkills] = useState([]);

    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        let timeoutId;

        if (updateCompleted) {
            timeoutId = setTimeout(() => {
                setUpdateCompleted(false);
            }, 2000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [updateCompleted]);

    const editProfileAction = async () => {
        try {
            const res = await axios.patch(`${BASE_URL}/profile/edit`, userDetail, { withCredentials: true });
            if (res.status === 200) {
                setUpdateCompleted(true);
                setAlertMessage(res?.data?.message);
                dispatch(addUser(res?.data?.updatedUser))
            }
        } catch (error) {
            console.log("Line 29 ::", error)
        }
    }


    const addSkillsList = () => {
        setUserDetail((prev) => {
            return { ...prev, skills: [...prev.skills, newSkills] }
        });
        setNewSkills('')
    }

    const removeSkills = () => {
        let newArray = userDetail.skills.filter((updateSkills, index) => {
            return !removedSkills.includes(updateSkills);
        });

        setUserDetail((prev) => {
            return { ...prev, skills: newArray }
        })
    }

    const handleSelection = (selectedSkills) => {
        setRemoveSkills((prev) => {
            return [...prev, selectedSkills]
        })
    }

    const handleFormChange = (e) => {
        setUserDetail((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        <div>
            <h1>Edit Profile</h1>
            {updateCompleted && (
                <>
                    <Alert message={alertMessage} type='success' />
                </>
            )}
            <div className='flex justify-center'>
                <div className='flex justify-center'>
                    <div className="card bg-base-300 w-96 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Edit Profile </h2>
                            <div className=''>

                                <label className="form-control w-full max-w-xs my-4">
                                    <div className="label">
                                        <span className="label-text">First Name : </span>
                                    </div>
                                    <input type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        name="firstName"
                                        value={userDetail?.firstName}
                                        onChange={handleFormChange} />

                                </label>

                                <label className="form-control w-full max-w-xs my-4">
                                    <div className="label">
                                        <span className="label-text">Last Name : </span>
                                    </div>
                                    <input type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        name="lastName"
                                        value={userDetail?.lastName}
                                        onChange={handleFormChange} />

                                </label>

                                <label className="form-control w-full max-w-xs my-4">
                                    <div className="label">
                                        <span className="label-text">PhotoUrl : </span>
                                    </div>
                                    <input type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        name="photoUrl"
                                        value={userDetail?.photoUrl}
                                        onChange={handleFormChange} />

                                </label>

                                <label className="form-control w-full max-w-xs my-4">
                                    <div className="label">
                                        <span className="label-text">Gender : </span>
                                    </div>
                                    <input type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        name="gender"
                                        value={userDetail?.gender}
                                        onChange={handleFormChange} />

                                </label>

                                <label className="form-control w-full max-w-xs my-4">
                                    <div className="label">
                                        <span className="label-text">Age : </span>
                                    </div>
                                    <input type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        name="age"
                                        value={userDetail?.age}
                                        onChange={handleFormChange} />

                                </label>

                                <label className="form-control w-full max-w-xs my-4">
                                    <div className="label">
                                        <span className="label-text">About : </span>
                                    </div>
                                    <input type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        name="about"
                                        value={userDetail?.about}
                                        onChange={handleFormChange} />

                                </label>

                                <label className="form-control w-full max-w-xs my-4">
                                    <div className="label">
                                        <span className="label-text">Skill List: </span>
                                    </div>
                                    <ul className="pl-12 list-disc">
                                        {userDetail?.skills?.map((skillPresent, index) => {
                                            return (
                                                <div key={index} className="flex gap-4 flex-row">
                                                    <li>{skillPresent}</li>
                                                    <input type="checkbox" className="checkbox" onClick={() => handleSelection(skillPresent)} />
                                                </div>
                                            )
                                        })}
                                    </ul>
                                    <input className="mt-2"
                                        type="text"
                                        value={newSkills}
                                        name="newSkills"
                                        onChange={(e) => setNewSkills(e.target.value)} />

                                    <div className='mt-4'>
                                        <button className="btn btn-success" onClick={addSkillsList}>Add Skills</button>
                                        <button className="btn btn-warning" onClick={removeSkills}>Delete Skills</button>
                                    </div>

                                </label>
                            </div>
                            <div className="card-actions justify-center m-2">
                                <button className="btn btn-primary" onClick={editProfileAction}>Edit Profile</button>
                            </div>
                        </div>
                    </div>
                </div>

                <UserCard user={userData} />
            </div>
        </div>
    );
};

export default EditProfile;