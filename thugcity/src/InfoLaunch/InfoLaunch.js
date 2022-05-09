import React, { Component } from 'react';
import './InfoLaunch.css'

class InfoLaunch extends Component {
    render() {
        return (
            <div className='info_launch'>
                <img className='info_launch_background_ak' src="/AK-47.png"/>
                <img className='info_launch_background_m16' src="/M16.png"/>
                <h1 className='info_launch_title'>FULL GAME LAUNCH DATE</h1>
                <h1 className='info_launch_description'>Our goal is to launch the game on July 14th/2022</h1>
                <button className='info_launch_learn_button'>  
                    <span className='info_launch_span'>
                        LEARN MORE
                    </span>
                </button>
            </div>
        );
    }
}

export default InfoLaunch;