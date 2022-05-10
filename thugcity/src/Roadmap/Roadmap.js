import React, { Component } from 'react';
import './Roadmap.css'

class Roadmap extends Component {
    render() {
        return (
            <div className='roadmap'>
                <img className='roadmap_infographic_img' src="./roadmap-infographic.png"/>
                <div className='roadmap_text' id="roadmap_text_1">
                    <h1 className='roadmap_text_title'>PHASE: 001</h1>
                    <ul>
                        <li>Start of Game Development</li>
                        <li>Fundraising Begins</li>
                        <li>UX/UI Website Research</li>
                        <li>UX/UI Website Design</li>
                        <li>NFT Designs</li>
                        <li>Team Building and Development</li>
                    </ul>
                </div>
                <div className='roadmap_text' id="roadmap_text_2">
                    <h1 className='roadmap_text_title'>PHASE: 002</h1>
                    <ul>
                        <li>Completion of P2E Smart Contract</li>
                        <li>Finalize Marketing Contract</li>
                        <li>THUGCITY Branding</li>
                        <li>Website Launch</li>
                        <li>Team Building and Development</li>
                    </ul>
                </div>
                <div className='roadmap_text' id="roadmap_text_3">
                    <h1 className='roadmap_text_title'>PHASE: 003</h1>
                    <ul>
                        <li>Start of Online Marketing Strategy</li>
                        <li>Start of Community Growth</li>
                        <li>Creating Project Awareness</li>
                        <li>Weekly Giveaways to Discord Members</li>
                        <li>Weekly Prizes Starting From Nintendo Switches</li>
                    </ul>
                </div>
                <div className='roadmap_text' id="roadmap_text_4">
                    <h1 className='roadmap_text_title'>PHASE: 004</h1>
                    <ul>
                        <li>72 Hour Billboard in Times Square, NYC to shed light on the project: May 21st</li>
                    </ul>
                </div>
                <div className='roadmap_text' id="roadmap_text_5">
                    <ul>
                        <li>Public Event we will attend and people can meet us there. To be announced!</li>
                    </ul>
                </div>
                <div className='roadmap_text' id="roadmap_text_6">
                    <ul>
                        <li>NFT Launch</li>
                        <li>$BILLS Token Launch</li>
                        <li>Release of P2E Staking Game</li>
                        <li>Season 1 begins!</li>
                    </ul>
                </div>
                <div className='roadmap_text' id="roadmap_text_7">
                    <ul>
                        <li>Season 1 Rewards Allocated</li>
                        <li>Thug Leaders Released</li>
                        <li>Aridropped Giveaways</li>
                        <li>Season 2 Launch</li>
                    </ul>
                </div>
                <div className='roadmap_text' id="roadmap_text_8">
                    <ul>
                        <li>Season 2 Rewards Allocated</li>
                        <li>V2 In-Game Asset Launch</li>
                        <li>Season 3 launch!</li>
                        <li>Reveal of usb hard drive prizes</li>
                    </ul>
                </div>
                <div className='roadmap_text' id="roadmap_text_9">
                    <ul>
                        <li>Season 3 Giveaway</li>
                        <li>V3 In-Game Asset Launch</li>
                        <li>Buy and Display your thug in the form of a 3D Toy Figure</li>
                        <li>Season 4 Launch</li>
                    </ul>
                </div>
                <div className='roadmap_text' id="roadmap_text_10">
                    <ul>
                        <li>VIP Club Owners of Thugs, V1, V2 and V3 Assets</li>
                        <li>Community driven in person event for VIP Club Owners</li>
                        <li>Implementation of Augmented Reality</li>
                        <li>Season 4 Giveaway</li>
                    </ul>
                </div>
                {/* images below are out of document flow/absolute position */}
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