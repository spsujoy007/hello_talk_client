import React from 'react';
import {BsFillEmojiHeartEyesFill, BsFillEmojiFrownFill} from  'react-icons/bs';

const Package = () => {
    return (
        <div className="lg:md:flex lg:md:gap-x-[40px] lg:md:gap-y-[0px] gap-y-[15px] justify-center">
          <div className="border-[2px] shadow-md p-[25px] border-[#61B800] rounded-xl shadow-[#8abf9e]">
            <h2 className="text-center text-2xl font-semibold font-featherbold text-[#58CC02]">FREE</h2>

            <ul className="mt-[20px]">
                <li className="flex flex-col">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiHeartEyesFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Learning Contents</span>
                    <span className="text-[#333]  lg:md:ml-[30px] text-[14px]">Level up by completing units</span>
                </li>
                <li className="flex flex-col mt-[15px]">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiFrownFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Unlimited Gems</span>
                    <span className="text-[#333]  lg:md:ml-[30px] text-[14px]">Level up by completing units</span>
                </li>
                <li className="flex flex-col mt-[15px]">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiFrownFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Practice Mistakes</span>
                    <span className="text-[#333]  lg:md:ml-[30px] text-[14px]">See where and why you made that mistake</span>
                </li>
                <li className="flex flex-col mt-[15px]">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiFrownFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Unlimited Legendary</span>
                    <span className="text-[#333]  lg:md:ml-[30px] text-[14px]">Special surprise contents</span>
                </li>
                <li className="flex flex-col mt-[15px]">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiFrownFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Free Courses</span>
                    <span className="text-[#333]  lg:md:ml-[30px] text-[14px]">Up to 3 premium courses for free</span>
                </li>
                <li className="flex flex-col mt-[15px]">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiFrownFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Premium Blog Content</span>
                    <span className="text-[#333] lg:md:ml-[30px]">Read all premium blog articles for free</span>
                </li>
            </ul>

            <button className="mt-[15px] bg-[#58CC02] border-[#46A302] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-[#fff] font-bold text-[14px] focus:border-b-[2px] w-[100%] ">Start your journey</button>
          </div>

          <div className="border-[2px] shadow-xl p-[25px] border-[#61B800] rounded-xl shadow-[#8abf9e]">
            <h2 className="text-center text-2xl font-semibold font-featherbold text-[#58CC02]">PREMIUM</h2>

            <ul className="mt-[20px]">
                <li className="flex flex-col">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiHeartEyesFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Learning Contents</span>
                    <span className="text-[#333]  lg:md:ml-[30px] text-[14px]">Level up by completing units</span>
                </li>
                <li className="flex flex-col mt-[15px]">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiHeartEyesFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Unlimited Gems</span>
                    <span className="text-[#333]  lg:md:ml-[30px] text-[14px]">Level up by completing units</span>
                </li>
                <li className="flex flex-col mt-[15px]">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiHeartEyesFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Practice Mistakes</span>
                    <span className="text-[#333]  lg:md:ml-[30px] text-[14px]">See where and why you made that mistake</span>
                </li>
                <li className="flex flex-col mt-[15px]">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiHeartEyesFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Unlimited Legendary</span>
                    <span className="text-[#333]  lg:md:ml-[30px] text-[14px]">Special surprise contents</span>
                </li>
                <li className="flex flex-col mt-[15px]">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiHeartEyesFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Free Courses</span>
                    <span className="text-[#333]  lg:md:ml-[30px] text-[14px]">Up to 3 premium courses for free</span>
                </li>
                <li className="flex flex-col mt-[15px]">
                    <span className="text-lg font-semibold flex items-center"><BsFillEmojiHeartEyesFill className="text-[#f3c776] mr-[5px] font-bold text-2xl"/>Premium Blog Content</span>
                    <span className="text-[#333] lg:md:ml-[30px]">Read all premium blog articles for free</span>
                </li>
            </ul>

            <button className="mt-[15px] bg-[#58CC02] border-[#46A302] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-[#fff] font-bold text-[14px] focus:border-b-[2px] w-[100%]">Buy Now</button>
          </div>
        </div>
    );
};

export default Package;