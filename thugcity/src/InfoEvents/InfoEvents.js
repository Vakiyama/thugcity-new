import React, { Component } from 'react';
import './InfoEvents.css'
// modules
    // props: 
        // title: String - non-case sensitive event title
        // src: String - standard src string for event image directory
import Event from './Event/Event.js'

class InfoEvents extends Component {
    render() {
        return (
            <div className='info_events'>
                <img className='info_events_squares_left' src="./squares-right.png"/>
                <img className='info_events_squares_right' src="./squares-left.png"/>
                <h1 className='info_events_title'>THE EVENTS</h1>
                <h1 className='info_events_description'>Information placed here. - placeholder text</h1>
                <div className='info_events_wrapper'>
                    <Event title="thugcity dealership" src="./hotel.png"/>
                    <Event title="thugcity prison" src="./prison.png"/>
                    <Event title="thugcity police station" src="./police-station.png"/>
                </div>
                <div className='info_events_wrapper'>
                    <Event title="thugcity hotel" src="./hotel.png"/>
                    <Event title="thugcity gun store" src="./gun-store.png"/>
                    <Event title="thugcity bank" src="./bank.png"/>
                </div>
            </div>
        );
    }
}

export default InfoEvents;