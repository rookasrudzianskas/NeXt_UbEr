import React from 'react';
import Image from "next/image";

const Search = () => {
    return (
        <div className="bg-gray-200 h-screen">
            <div className="bg-white px-4">
                <Image src={'https://img.icons8.com/ios-filled/50/000000/left.png'} width={40} height={40} resizeMode={'contain'} className={"mt-2"}/>
            </div>
            <div className="">
                <div>
                    <Image src={'https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'} width={40} height={40} resizeMode={'contain'} className={""}/>
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
