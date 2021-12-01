import React from 'react';
import Image from "next/image";
import WhereTo from "./WhereTo";
import Link from "next/link";

const ActionButtons = () => {
    return (
        <>
            <div className="flex flex-row px-4 items-center justify-center">
                <Link href={'/search'}>
                    <div className="bg-gray-300 flex flex-1 items-center flex-col  m-10 p-2 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg  duration-200">
                        <Image src={'https://i.ibb.co/cyvcpfF/uberx.png'} height={'70'} width={'70'} />
                        Ride
                    </div>
                </Link>
                <div className="bg-gray-300 flex flex-1 items-center flex-col m-10 p-2 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg  duration-200">
                    <Image src={'https://i.ibb.co/cyvcpfF/uberx.png'} height={'70'} width={'70'} />
                    2-Wheels
                </div>
                <div className="bg-gray-300 flex flex-1 items-center flex-col m-10 p-2 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg  duration-200">
                    <Image src={'https://i.ibb.co/cyvcpfF/uberx.png'} height={'70'} width={'70'} />
                    Reserve
                </div>

            </div>
            <WhereTo />
        </>
    );
};

export default ActionButtons;
