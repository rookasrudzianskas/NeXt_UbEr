import React from 'react';
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <div className=" flex flex-row items-center mx-10">
                <div className="flex flex-1">
                    <Image className="" height={140} width={200} resizeMode={'contain'} src="https://i.ibb.co/84stgjq/uber-technologies-new-2021814.jpg" />
                </div>
                <div className="flex flex-row items-center">
                    <div className="">Rokas <div>Rudzianskas</div></div>
                    <div className="ml-5">
                        <Image className="rounded-full border-1 border-gray-200 p-3" width="40" height='40' src={'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
