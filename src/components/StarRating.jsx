import React from 'react';

const StarRating = ({ rating }) => {
    const stars = Array(5).fill(0);

    return (
        <>
            {stars.map((_, index) => {
                return (
                <span
                key={index}
                className={`text-3xl`}
                style={{ color: index < Math.floor(rating) ? '#fb923c' : '#ccc'}}
            >★</span>

                );
            })}
            <p className='ml-4 px-4 py-1 bg-[#ccc] rounded-badge cursor-pointer hover:bg-slate-300'>{rating} out of 5</p>
        </>
    );
};

export default StarRating;
