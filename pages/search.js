import React from 'react';
import Image from "next/image";

const Search = () => {
    return (
        <div className="bg-gray-200 h-screen">
            <div className="bg-white px-4">
                <Image src={'https://img.icons8.com/ios-filled/50/000000/left.png'} width={40} height={40} resizeMode={'contain'} className={"mt-2"}/>
            </div>
            <div className="flex">
                <div className="flex flex-col">
                    <Image src={'https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'} width={10} height={10} resizeMode={'contain'} className={""}/>
                    <Image src={'https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'} width={40} height={40} resizeMode={'contain'} className={""}/>
                    <Image src={'https://img.icons8.com/windows/50/000000/square-full.png'} width={10} height={10} resizeMode={'contain'} className={""}/>
                </div>
            </div>
            <div className="">

            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Search;
