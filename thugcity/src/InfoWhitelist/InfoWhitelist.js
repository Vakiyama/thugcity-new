import React, { Component } from 'react';
import './InfoWhitelist.css'

class InfoWhitelist extends Component {
    render() {
        return (
            <div className='info_whitelist'>
                <img className='info_whitelist_background_img' src="./hotel.png"/>
                <h1 className='info_whitelist_title'>2000 WHITELIST SPOTS</h1>
                <h1 className='info_whitelist_description'>Thugcity has fallen and there are 9,000 thugs loose <br></br>
                    in the city. 1,000 cops have survived to make a <br></br> 
                    final stand. What side will you be on?</h1>
                    <button className='info_whitelist_learn_button'>
                        <span className='info_whitelist_learn_span'>Learn More</span>
                    </button>
                <div className='info_whitelist_nft_showcase_wrapper'>
                    <img className='info_whitelist_left' src="./136.png"/>
                    <img className='info_whitelist_top' src="./136.png"/>
                    <img className='info_whitelist_bottom' src="./136.png"/>
                </div>
            </div>
        );
    }
}

export default InfoWhitelist;