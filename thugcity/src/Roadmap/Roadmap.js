import React, { Component } from 'react';
import './Roadmap.css'

class Roadmap extends Component {
    render() {
        return (
            <div className='roadmap'>
                <img className='roadmap_infographic_img' src="./roadmap-infographic.png"/>
                <img className='roadmap_background_logo_1'src="./logo-background-2.png"/>
                <img className='roadmap_squares_left_1' src="./squares-right.png"/>
                <img className='roadmap_squares_right_1' src="./squares-left.png"/>
                <img className='roadmap_m16' src="./M16.png"/>
                <img className='roadmap_ak47' src="./AK-47.png"/>
                <img className='roadmap_background_logo_2' src="./logo-background.png"/>
                <img className='roadmap_squares_left_2' src="./squares-right.png"/>
                <img className='roadmap_squares_right_2' src="./squares-left.png"/>
                <img className='roadmap_car' src="./car.png"/>
                <img className='roadmap_crate' src="./crate-1.png"/>
                <img className='roadmap_safe' src="./vault-temp.png"/>
                <img className='roadmap_squares_right_3' src="./squares-left.png"/>
            </div>
        );
    }
}

export default Roadmap;