import React from 'react';
import Image from "next/image";

const Search = () => {
    return (
        <div className="bg-gray-200 h-screen">
            <div className="bg-white px-4">
                <Image src={'https://img.icons8.com/ios-filled/50/000000/left.png'} width={40} height={40} resizeMode={'contain'} className={"mt-2"}/>
            </div>
            <div className="flex bg-white px-4">
                <div className="flex flex-col">
                    <Image src={'https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'} width={2} height={40} className={""}/>
                    <Image src={'https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'} width={40} height={40} resizeMode={'contain'} className={""}/>
                    <Image src={'https://img.icons8.com/windows/50/000000/square-full.png'} width={2} height={40} resizeMode={'contain'} className={""}/>
                </div>
                <div className="ml-5 flex flex-col flex-1">
                    <input type="text" placeholder={'Search'} className={"h-10 bg-gray-200 outline-none rounded-md w-96 px-2"}/>
                    <input type="text" placeholder={'Enter the destination location...'} className={"h-10 bg-gray-200 outline-none mt-8 rounded-md w-96 px-2"}/>
                </div>
                <div className="flex items-center mb-5 rounded-full">
                    <span className="text-6xl font-thin">+</span>
                </div>
            </div>
            <div className="">
            </div>
        </div>
    );
};

export default Search;
