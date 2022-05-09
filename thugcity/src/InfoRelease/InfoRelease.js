import React, { Component } from 'react';
import './InfoRelease.css'

class InfoRelease extends Component {
    render() {
        return (
            <div className='info_release'>
                <img src="/squares-left.png" className='background_squares_left'/>
                <img src="/squares-right.png" className='background_squares_right'/>
                <img src="/logo-background.png" className='info_release_background_thugcity_logo'/>
                <div className='info_release_title_wrapper'>
                    <div className='info_release_title_wrapper_top'>
                        <div className='info_release_title_top_gradient'></div>
                        <h1 className='info_release_title_top_subtitle'>Ethereum Blockchain</h1>
                    </div>
                    <h1 className='info_release_title_h1'>THUGCITY</h1>
                </div>
                <div className='info_release_divider_div'></div>
                <div className='info_release_left_wrapper'>
                    <h1 className='info_release_left_title'>PUBLIC SALE: <span className='info_release_left_span'>JULY 14th/2022</span></h1>
                    <button className='info_release_calendar_button'> 
                        <span className='info_release_calendar_span'>ADD TO CALENDAR</span>
                    </button>
                </div>
                <img className='info_release_vault_img' src="./vault-temp.png"/>
                <div className="info_release_right_wrapper">
                    <h1 className='info_release_right_title'>WHITELIST SALE: <span className='info_release_left_span'>JULY 13th/2022</span></h1>
                    <button className='info_release_join_button'> 
                        <span className='info_release_join_span'>HOW TO JOIN</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default InfoRelease;