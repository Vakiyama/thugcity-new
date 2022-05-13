import React, { Component } from 'react';
import './InfoLaunch.css'

class InfoLaunch extends Component {
    render() {
        return (
            <div className='info_launch'>
                <img className='info_launch_background_ak' src="/AK-47.png"/>
                <img className='info_launch_background_m16' src="/M16.png"/>
                <h1 className='info_launch_title'>FULL GAME LAUNCH DATE</h1>
                <h1 className='info_launch_description'>Mid-End of July 2022</h1>
                <div className='info_launch_button_wrapper'>
                    <img className='info_launch_safe_img' src="./vault-temp.png"/>
                    <div className='button_wrapper'>
                        <p className='info_launch_public_title'>WHITELIST RELEASE <br></br><span className='info_launch_public_span'>July 13th/2022</span></p>
                        <button className='info_launch_learn_button'>  
                            <span className='info_launch_span'>
                                HOW TO <br></br>JOIN
                            </span>
                        </button>
                    </div>
                    <div className='button_wrapper'>
                        <p className='info_launch_public_title'>PUBLIC RELEASE <br></br><span className='info_launch_public_span'>July 14th/2022</span></p>
                            <button className='info_launch_learn_button'>  
                                <span className='info_launch_span'>
                                    ADD TO <br></br>CALENDAR
                                </span>
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoLaunch;