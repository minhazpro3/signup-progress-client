import React from 'react';

const Direction = ({currentState}) => {
    return (
        <div className=' flex justify-center my-6'>
            <div>
               { currentState === 0 
                      ? <div className='flex justify-between gap-72'>
                    <h4 className='text-xl font-medium'>Account Information:</h4>
                    <h4 className='text-xl font-medium'>Step: 1 - 4</h4>
                    </div> : null}
               {   currentState === 1
                      ? <div className='flex justify-between gap-72'>
                    <h4 className='text-xl font-medium'>Personal Information:</h4>
                    <h4 className='text-xl font-medium'>Step: 2 - 4</h4>
                    </div> : null}
               {  currentState === 2
                      ? <div className='flex justify-between gap-72'>
                    <h4 className='text-xl font-medium'>Image Upload:</h4>
                    <h4 className='text-xl font-medium'>Step: 3 - 4</h4>
                    </div> : null}
               {  currentState === 3
                      ? <div className='flex justify-between gap-72'>
                    <h4 className='text-xl font-medium'>Finish:</h4>
                    <h4 className='text-xl font-medium'>Step: 4 - 4</h4>
                    </div> : null}
                
            </div>
        </div>
    );
};

export default Direction;