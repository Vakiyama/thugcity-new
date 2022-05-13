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
                <h1 className='info_events_title'>THE GAME</h1>
                <h1 className='info_events_description'>A once lonely and monotonous city sees a new darkness advancing upon it. A wave of Thugs are
planning to take control over the city and everyone within it... but not if the Cops have a
say. Which side will you join... Thugs or Cops?  <span className='info_events_description_span'><br></br>Stake your Thugs or Cops in different
locations in the city to yield $BILLS and climb up the leaderboard through commiting and
fighting crime to earn rewards.</span></h1>
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