import React from 'react';
import StarSVG from '../Images/StarSVG';

const Card = ({ title, description, points, color, type }) => {
    return (
        <div
            className={`grid grid-cols-3 py-6 my-4 mx-2 rounded-xl divide-x-2 bg-${color} h-100`}
        >
            <div className="col-span-2 grid grid-cols-1 gap-3 py-2 test-center">
                <div className="text-center text-white text-xl font-bold">{title}</div>
                <div className="text-center text-white font-bold">{description}</div>
            </div>
            <div className="grid grid-cols-1 text-white py-2">
                <div className="text-center text-lg font-bold">
                    {type === -1 ? <span>-</span> : <span>+</span>}
                    {points}
                </div>
                <div className="flex justify-center ">
                    <StarSVG width={25} height={23} />
                </div>
            </div>
        </div>
    );
};

export default Card;
