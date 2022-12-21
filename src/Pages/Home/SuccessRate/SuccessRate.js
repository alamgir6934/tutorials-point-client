import React from 'react';
import { FaRegCheckCircle, FaUsers, FaRegHandshake } from 'react-icons/fa';

const SuccessRate = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-16'>
            <div className=''>
                <div>
                    <h4 className='ml-16'><FaRegCheckCircle /></h4>
                </div>
                <p><strong>100%</strong> International student</p>

            </div>
            <div className=''>
                <div className=''>
                    <h4 className='ml-16'><FaRegHandshake /></h4>
                </div>
                <p><strong>96%</strong>  Recommendation rate</p>

            </div>
            <div className=''>
                <div className=''>
                    <h4 className='ml-16'><FaUsers /></h4>
                </div>
                <p className='text-bold'><strong>100,000</strong> Students</p>

            </div>
        </div>
    );
};

export default SuccessRate;