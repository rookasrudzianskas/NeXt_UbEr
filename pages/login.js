import React from 'react';
import Image from "next/image";
import {auth, provider} from "../firebase";

const Login = () => {

    const loginWithGoogle = async () => {
        await auth.signInWithPopup(provider);
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200 flex-col">
            <Image src={'https://i.ibb.co/n6LWQM4/Post.png'} width="800" height="300" resizeMode={'contain'}/>
            <div onClick={() => loginWithGoogle} className="text-white px-10 py-5 rounded-md font-bold bg-black hover:cursor-pointer mt-10">Sign in with Google</div>
        </div>
    );
};

export default Login;


