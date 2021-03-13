import React from 'react';
import Loadingvid from "../Loadingvid.m4v"

const LogoLoading = () => {
    return (
        <div className="LogoLoading">
            <video className='loading-video' autoPlay muted>
                <source src={Loadingvid} type='video/mp4' />
            </video>
        </div>
    )
}
export default LogoLoading;
