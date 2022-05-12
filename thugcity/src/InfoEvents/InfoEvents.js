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
                <h1 className='info_events_description'>The events below depict the actions each Thug/Cop can take part of within ThugCity</h1>
                <div className='info_events_wrapper'>
                    <Event title="thugcIty hotel" src="./hotel.png"/>
                    <Event title="thugcIty polIce statIon" src="./police-station.png"/>
                    <Event title="thugcIty bank" src="./bank.png"/>
                    
                </div>
                <div className='info_events_wrapper'>
                    <Event title="thugcIty dealershIp" src="./hotel.png"/>
                    <Event title="thugcIty gun store" src="./gun-store.png"/>
                    <Event title="thugcIty prIson" src="./prison.png"/>
                    
                </div>
            </div>
        );
    }
}

export default InfoEvents;