import React from 'react';

const ErrorComponent = ({ error }) => {
  return (
    <div className="error-container">
      <h2>An error occurred!</h2>
      {/* <p>{error.message}</p> */}
    </div>
  );
};

export default ErrorComponent;