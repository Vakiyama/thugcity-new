import React, { Component } from 'react';
import './Event.css'

class Event extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='info_events_event'>
                <img className='info_events_event_img' src={this.props.src}/>
                <div className='info_events_event_bottom_wrapper'>
                    <h1 className='info_events_event_title'>{this.props.title}</h1>
                    <button className='info_events_event_button'>
                        <span className='info_events_event_span'>COMING SOON...</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default Event;