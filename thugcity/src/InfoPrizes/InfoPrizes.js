import React, { Component } from 'react';
import './InfoPrizes.css'

class InfoPrizes extends Component {
    render() {
        return (
            <div className='info_prizes'>
                <h1 className='info_prizes_title'>THUGCITY</h1>
                <h1 className='info_prizes_title_2'>PRIZES</h1>
                <img className='info_prizes_background_car' src="./car.png"/>
                <div className='info_prizes_button_wrapper'>
                    <button className='info_prizes_giveaway_button'>
                            <span className='info_prizes_giveaway_span'>weekly<br></br> gIveaways</span>
                        </button>
                        <button className='info_prizes_leaderboard_button'>
                            <span className='info_prizes_leaderboard_span'>leaderboard<br></br>prIzes</span>
                        </button>
                        <button className='info_prizes_discord_button'>
                            <img className='info_prizes_discord_img' src=""/> {/* need a discord logo here, do buttons work with img children? */}
                            <span className='info_prizes_discord_span'>JOIN THE DISCORD</span>
                        </button>
                </div>
            </div>
        );
    }
}

export default InfoPrizes;