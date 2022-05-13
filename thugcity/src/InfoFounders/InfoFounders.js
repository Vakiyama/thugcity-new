import React, { Component } from 'react';
import './InfoFounders.css'

class InfoFounders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sourceUrls: [
                "./handheld-kyle.png",
                "./handheld-kyle.png",
                "./handheld-kaden.png",
                "./handheld-ryan.png",
                "./handheld-ryan.png",
                "./handheld-kaden.png"
            ],
            focusedIndex: 2,
            direction: 'left',
            safeToAnimate: true
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
        if (!this.state.safeToAnimate) {
            setTimeout(() => {
                this.incrementIndex()
            }, 100)
            return
        }
        let currentIndex = this.state.focusedIndex;
        if (currentIndex === 0) return;
        console.log(this.state.sourceUrls.length - 1)
        console.log(currentIndex)
        currentIndex--;
        this.setState({ focusedIndex: currentIndex, direction: 'right', safeToAnimate: false });
        setTimeout(() => {
            this.setState({ safeToAnimate: true })
        }, 700)
    }

    decrementIndex() {
        if (!this.state.safeToAnimate) {
            setTimeout(() => {
                this.decrementIndex()
            }, 100)
            return
        }
        let currentIndex = this.state.focusedIndex;
        if (currentIndex === this.state.sourceUrls.length - 1) return;
        console.log(currentIndex)
        currentIndex++;
        this.setState({ focusedIndex: currentIndex, direction: 'left', safeToAnimate: false });
        setTimeout(() => {
            this.setState({ safeToAnimate: true })
        }, 700)
    }

    render() {
        return (
            <div className='info_founders'>
                <img className='info_founders_squares_left' src="./squares-right.png"/>
                <img className='info_founders_squares_right' src="./squares-left.png"/>
                <h1 className='info_founders_title'>THUGCITY TEAM</h1>
                <div className='info_founders_showcase_wrapper'>
                    <img className='info_founders_background_ellipse' src="./background-ellipse.png"/>
                    <button onClick={() => {this.incrementIndex()}} className='info_founders_showcase_left'><span className='info_founders_showcase_left_span'>&#60;</span></button>
                        <div className='info_founders_showcase_image_wrapper'>
                            {this.state.sourceUrls.map((url, index) => {
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