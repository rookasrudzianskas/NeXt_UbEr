import React from 'react';
import Image from "next/image";

const ActionButtons = () => {
    return (
        <div className="flex flex-row px-4 items-center justify-center">
            <div className="bg-gray-300 flex flex-1 items-center flex-col ">
                <Image src={'https://i.ibb.co/cyvcpfF/uberx.png'} height={'70'} width={'70'} />
                Ride
            </div>
            <div className="bg-gray-300 flex flex-1 items-center flex-col">
                <Image src={'https://i.ibb.co/cyvcpfF/uberx.png'} height={'70'} width={'70'} />
                2-Wheels
            </div>
            <div className="bg-gray-300 flex flex-1 items-center flex-col">
                <Image src={'https://i.ibb.co/cyvcpfF/uberx.png'} height={'70'} width={'70'} />
                Reserve
            </div>
        </div>
    );
};

export default ActionButtons;
