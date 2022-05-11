import React, { Component } from 'react';
import './InfoFounders.css'

class InfoFounders extends Component {
    render() {
        return (
            <div className='info_founders'>
                <h1 className='info_founders_title'>THUGCITY FOUNDERS</h1>
                
                <div className='info_founders_showcase_wrapper'>
                    <button className='info_founders_showcase_left'><span className='info_founders_showcase_left_span'>&#60;</span></button>
                    {/* these image elements will be implemented after
                    <img src="./handheld-kaden.png"/>
                    <img src="./handheld-kyle.png"/>
                    <img src="./handheld-ryan.png"/>
                    */}
                    <button className='info_founders_showcase_right'><span className='info_founders_showcase_right_span'>&#62;</span></button>
                </div>
                <button className='info_founders_more_button'><span className='info_founders_more_span'>More Info</span></button>
            </div>
        );
    }
}

export default InfoFounders;