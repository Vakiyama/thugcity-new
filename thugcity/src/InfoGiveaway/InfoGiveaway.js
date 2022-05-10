import React, { Component } from 'react';
import './InfoGiveaway.css'

class InfoGiveaway extends Component {
    render() {
        return (
            <div className='info_giveaway'>
                <div className='info_giveaway_wrapper'>
                    <img className='info_giveaway_switch_img' src="./switch.png"/>
                    <img className='info_giveaway_crate-1' src="./crate-1.png"/>
                    <img className='info_giveaway_crate-2' src="./crate-2.png"/>
                </div>
            </div>
        );
    }
}

export default InfoGiveaway;