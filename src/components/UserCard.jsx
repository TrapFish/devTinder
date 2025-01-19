import React from 'react';

const UserCard = ({ user }) => {
    console.log("Line 21221", user)
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={user?.photoUrl}
                        alt={user?.firstName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{user?.firstName} {user?.lastName}</h2>
                    <p>{user?.gender}</p>
                    <>
                        <div className='text-blue-100'>Skills List</div>
                        <div className='ml-6'>
                            <ul className="pr-4 list-disc">
                                {user?.skills.map((skill, index) => {
                                    return (
                                        <React.Fragment>
                                            <li>{skill}</li>
                                        </React.Fragment>
                                    )
                                })}
                            </ul>
                        </div>
                    </>
                    <div className="card-actions justify-center m-4">
                        <button className="btn btn-success">Interested</button>
                        <button className="btn btn-error">Ignore</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserCard;