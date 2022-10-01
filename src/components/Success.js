import React from 'react';

const Success = ({ buttonAvailable, setCurrentState, currentState }) => {
    const goHome = () => {
        setCurrentState(0)
    }
    return (
        <div>
            dsfsf
            <button onClick={goHome}>
                Home
            </button>
        </div>
    );
};

export default Success;