import React from 'react';
import { AiTwotoneLike } from 'react-icons/ai';

const SingleComment = ({ comment }) => {
    return (
        <div>
            <div className='mt-3 flex  items-center'>
                <div className="avatar mr-3">
                    <div className="w-6 h-6 rounded-full">
                        <img src={comment?.photoUrl} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-[16px]'>{comment?.name}</h1>
                </div>
            </div>
            <div className='mt-2' >
                <p className='text-[14px]'>{comment?.comment}</p>
            </div>
            <button className='flex  hover:bg-[#F0F2F5] px-2 items-center my-1'><AiTwotoneLike /><span className='ml-1'>Helpful</span></button>
            <div className="divider my-[-2px] "></div>
        </div>
    );
};

export default SingleComment;