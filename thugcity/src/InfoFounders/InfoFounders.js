import React, { Component } from 'react';
import './InfoFounders.css'

class InfoFounders extends Component {

    constructor(props) {
        super(props);

        this.sourceUrls = [
            "./handheld-kyle.png",
            "./handheld-kyle.png",
            "./handheld-kaden.png",
            "./handheld-ryan.png",
            "./handheld-ryan.png"
        ]

        this.state = {
            focusedIndex: 2,
            direction: 'left'
        }
    }

    getOffset(index) {
        const focusedIndex = this.state.focusedIndex;
        const direction = this.state.direction;
        if (index === focusedIndex) {
            if (direction === 'left') {
                return 'showcase_focused_left'
            }
            return 'showcase_focused_right';
        }

        if (index - focusedIndex === -1) {
            if (direction === 'left') {
                return 'showcase_1_left'
            }
            return 'showcase_1_right'
        }

        if (index - focusedIndex === 1) {
            if (direction === 'left') {
                return 'showcase_3_left'
            }
            return 'showcase_3_right'
        }

        if (index - focusedIndex < 0) {
            return 'showcase_left_hidden'
        }

        return 'showcase_right_hidden'
    }

    incrementIndex() {
        let currentIndex = this.state.focusedIndex;
        if (currentIndex === 0) return;
        currentIndex--;
        this.setState({ focusedIndex: currentIndex, direction: 'right' });
    }

    decrementIndex() {
        let currentIndex = this.state.focusedIndex;
        if (currentIndex === this.sourceUrls.length - 1) return 0;
        currentIndex++;
        this.setState({ focusedIndex: currentIndex, direction: 'left' });
    }

    render() {
        return (
            <div className='info_founders'>
                <h1 className='info_founders_title'>THUGCITY TEAM</h1>
                
                <div className='info_founders_showcase_wrapper'>
                    <button onClick={() => {this.incrementIndex()}} className='info_founders_showcase_left'><span className='info_founders_showcase_left_span'>&#60;</span></button>
                        <div className='info_founders_showcase_image_wrapper'>
                            {this.sourceUrls.map((url, index) => {
                                return <img key={index} className={this.getOffset(index)} src={url} />
                            })}
                        </div>
                    <button onClick={() => {this.decrementIndex()}} className='info_founders_showcase_right'><span className='info_founders_showcase_right_span'>&#62;</span></button>
                </div>
                <button className='info_founders_more_button'><span className='info_founders_more_span'>More Info</span></button>
            </div>
        );
    }
}

export default InfoFounders;