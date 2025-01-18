import React from 'react';
import PropTypes from 'prop-types';
import {ALERT_TYPE} from '../utils/constants'

const Alert = ({ message, type }) => {
    let typeIcon = ALERT_TYPE;

    let dvalueUpdate = '';
    
    for(const value of typeIcon){
        if(value?.messageType === type){
          dvalueUpdate =  value?.dvalue ; 
        }
    }

    return (
        <div role="alert" className={`alert alert-${type}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 stroke-current">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={dvalueUpdate}></path>
            </svg>
            <span className='flex justify-center ml-20'>{message}</span>
        </div>
    );
};

Alert.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
};

export default Alert;