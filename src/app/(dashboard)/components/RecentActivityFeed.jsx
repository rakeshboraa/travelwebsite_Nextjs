import React from 'react';


const RecentActivityFeed = ({ icon: Icon, description, timestamp }) => {
    return (
        <div className='mt-2 p-4 '>
            <ul className="space-y-4">
                <li className="flex items-center">
                    <span className="mr-4 text-2xl">{<Icon />}</span>
                    <div className="flex-1">
                        <p className="text-gray-700">{description}</p>
                        <p className="text-gray-500 text-sm">{timestamp}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default RecentActivityFeed;
